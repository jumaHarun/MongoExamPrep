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

const db = client.db("sample_supplies");
const coll = db.collection("sales");

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
     *  Calculate the total revenue generated by each supplier.
     */
    // await getTotalRevenueForEachStoreLocation();

    /**
     * Which month of the year has the highest sales volume?
     */
    // await getHighestSalesVolumeMonthForEachYear();

    /**
     *
     * Find the average order amount for each year.
     */
    // await getAvgOrderAmountForEachYear();
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
 * Calculates the total revenue for each store location.
 * @returns An array of documents with `storeLocation` and `totalRevenue` properties.
 */
async function getTotalRevenueForEachStoreLocation(): Promise<Document[]> {
  const docs = [];

  try {
    const pipeline: Document[] = [
      {
        $unwind: {
          path: "$items",
        },
      },
      {
        $group: {
          _id: "$storeLocation",
          totalRevenue: {
            $sum: { $multiply: ["$items.price", "$items.quantity"] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          storeLocation: "$_id",
          totalRevenue: 1,
        },
      },
    ];

    await coll.createIndex({ storeLocation: 1 });
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
 * Calculates the average order amount for each year.
 * @returns An array of documents with `year` and `avgOrderAmount` properties.
 */
async function getAvgOrderAmountForEachYear(): Promise<Document[]> {
  const docs = [];

  try {
    const pipeline: Document[] = [
      {
        $unwind: "$items",
      },
      {
        $group: {
          _id: {
            $year: "$saleDate",
          },
          avgOrderAmount: {
            $avg: {
              $multiply: ["$items.price", "$items.quantity"],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
          avgOrderAmount: {
            $round: ["$avgOrderAmount", 2],
          },
        },
      },
    ];

    await coll.createIndex({ salesDate: 1 });
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
 * Calculates and returns the month with the highest sales volume for each year.
 * @returns An array of documents with `_year_`, `_topSalesAmount_` and `_topSalesMonth_` properties.
 */
async function getHighestSalesVolumeMonthForEachYear() {
  const docs = [];

  try {
    const pipeline: Document[] = [
      {
        $unwind: {
          path: "$items",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          year: {
            $year: "$saleDate",
          },
          month: {
            $month: "$saleDate",
          },
          monthName: {
            $dateToString: {
              date: "$saleDate",
              format: "%B",
            },
          },
          totalSales: {
            $sum: {
              $multiply: ["$items.price", "$items.quantity"],
            },
          },
        },
      },
      {
        $group: {
          _id: {
            year: "$year",
            month: "$month",
            monthName: "$monthName",
          },
          monthlySales: {
            $sum: "$totalSales",
          },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          monthlySales: -1,
        },
      },
      {
        $group: {
          _id: "$_id.year",
          topSalesMonth: {
            $first: "$_id.monthName",
          },
          topSalesAmount: {
            $first: "$monthlySales",
          },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
          topSalesAmount: 1,
          topSalesMonth: 1,
        },
      },
      {
        $sort: {
          year: 1,
        },
      },
    ];

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
