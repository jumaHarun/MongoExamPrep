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

const db = client.db("airbnb");
const coll = db.collection("listingsAndReviews");

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
    /**
     *  What are the top 5 cities with the highest average price for Airbnb
     * listings with more than 5 reviews?
     */
    // await getTopCitiesWithHighestAvgPrice(5, 5);

    /**
     * Find the total number of Airbnb listings in each neighborhood of New York.
     */
    // await getTotalNumberOfListingsInEachNeighbourhoodOfCity("New York");

    /**
     * What is the average number of beds for Airbnb listings priced above $200?
     */
    // await getAvgNumOfBedsForListingsAbovePrice(200);
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

/**
 * Finds and returns the top cities with the highest average price.
 * @param numOfReviewsGT The number of reviews greater than.
 * @param docsLimit The limit for number of documents to return.
 * @returns An array of documents resulting from the aggregration pipeline, with `docsLimit` length.
 */
async function getTopCitiesWithHighestAvgPrice(
  numOfReviewsGT: number,
  docsLimit: number
): Promise<Document[]> {
  const docs = [];
  try {
    const pipeline: Document[] = [
      {
        $match: {
          number_of_reviews: {
            $gt: numOfReviewsGT,
          },
        },
      },
      {
        $group: {
          _id: "$address.market",
          avgPrice: { $avg: "$price" },
        },
      },
      { $sort: { avgPrice: -1 } },
      { $limit: docsLimit },
      {
        $project: {
          _id: "$_id",
          avgPrice: {
            $round: ["$avgPrice", 2],
          },
        },
      },
    ];

    await coll.createIndex({ number_of_reviews: 1, "address.market": 1 });

    const cursor = coll.aggregate(pipeline, aggregationOptions);

    for await (const doc of cursor) {
      docs.push(doc);
    }
  } catch (error) {
    console.error(error);
  }

  console.log(docs);

  return docs;
}

/**
 * Finds and returns the total number of listings in each `government_area` for a specific city.
 * @param city The city to search for listings.
 * @returns An array of documents resulting from the aggregration pipeline.
 */
async function getTotalNumberOfListingsInEachNeighbourhoodOfCity(
  city: string
): Promise<Document[]> {
  const docs = [];
  try {
    const pipeline: Document[] = [
      {
        $match: {
          "address.market": "New York",
        },
      },
      {
        $group: {
          _id: "$address.government_area",
          totalNumOfListings: {
            $sum: 1,
          },
        },
      },
    ];

    await coll.createIndex({
      "address.market": 1,
      "address.government_area": 1,
    });

    const cursor = coll.aggregate(pipeline, aggregationOptions);

    for await (const doc of cursor) {
      docs.push(doc);
    }
  } catch (error) {
    console.error(error);
  }

  console.log(docs);

  return docs;
}

/**
 * Calculates the average number of beds for listings with a price above `filterPrice`.
 * @param filterPrice The price to find average beds for.
 * @returns An object with `ceiledAvgNumOfBeds` property, which is the average number of beds, ceiled.
 */
async function getAvgNumOfBedsForListingsAbovePrice(filterPrice: number) {
  let result = {};

  try {
    const pipeline: Document[] = [
      {
        $match: {
          price: {
            $gt: filterPrice,
          },
        },
      },
      {
        $group: {
          _id: null,
          avgNumOfBeds: { $avg: "$beds" },
        },
      },
      {
        $project: {
          _id: 0,
          ceiledAvgNumOfBeds: {
            $ceil: "$avgNumOfBeds",
          },
        },
      },
    ];

    await coll.createIndex({ price: 1, beds: 1 });
    const cursor = coll.aggregate(pipeline, aggregationOptions);

    for await (const doc of cursor) {
      result = doc;
    }
  } catch (error) {
    console.error(error);
  }

  console.log(result);

  return result;
}
