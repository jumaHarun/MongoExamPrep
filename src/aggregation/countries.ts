import express, { Application } from "express";
import { AggregateOptions, Document, MongoClient } from "mongodb";
import { config } from "dotenv";

config();
const app: Application = express();
app.use(express.json());

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI in the .env file");
}

const client = new MongoClient(uri);

const db = client.db("examprep");
const coll = db.collection("countries");

const connectToDB = async () => {
  try {
    await client.connect();
    console.log(
      `Connected to the ${db.databaseName} database\nUsing the ${coll.collectionName} collection.`
    );
  } catch (error) {
    console.error(error);
    return;
  }
};

(async () => {
  try {
    await connectToDB();

    const collDocsCount = await coll.countDocuments();
    console.log(
      `\nDB has ${db.collections.length} collections.\nThe ${coll.collectionName} collection has ${collDocsCount} document(s).`
    );

    await (async () => {
      // Get all border countries for each country:
      const res: Document[] = [];

      const aggCursor = coll.aggregate(
        [
          {
            $unwind: "$borders",
          },
          {
            $lookup: {
              from: "countries",
              localField: "borders",
              foreignField: "alpha3Code",
              as: "borderCountry",
            },
          },
          {
            $unwind: {
              path: "$borderCountry",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              name: "$name",
              borderInfo: {
                countryCode: "$borders",
                countryName: "$borderCountry.name",
              },
            },
          },
          {
            $group: {
              _id: "$name",
              border: {
                $push: "$borderInfo",
              },
            },
          },
        ],
        {
          maxTimeMS: 60_000,
          allowDiskUse: true,
        }
      );

      for await (const doc of aggCursor) {
        JSON.stringify(doc.border);
        res.push(doc);
      }

      // for (let i = 0; i < res.length; i++) {
      //   console.log(res[i]);
      // }
      console.log(res);
      return res;
    })();
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();

// Globals
const aggregationOptions: AggregateOptions = {
  maxTimeMS: 60_000,
  allowDiskUse: true,
};
