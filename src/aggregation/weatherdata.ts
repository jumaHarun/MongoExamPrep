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

const db = client.db("sample_weatherdata");
const coll = db.collection("data");

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
     * Find the average air temperature recorded by each station
     */
    // await getAvgAirTempForEachStation();

    /**
     * Calculate the total number of valid wind direction
     * measurements (quality of "1") for each station
     */
    // await getTotalValidWindDirectionMeasurementsPerStation();

    /**
     * Find the top 5 dates with the highest air pressure values
     */
    // await getTopDatesWithHighestAirPressure(5);

    /**
     * What is the most common wind speed rate recorded for
     * all stations?
     */
    // await getMostCommonWindSpeedRateForAllStations();

    /**
     * Calculate the total number of records with a visibility
     * distance below 100,000 meters
     */
    await getAllRecordsWithVisibilityBelowParam(100_000);
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
 * Find and returns the average air temperature recorded by each station.
 * @returns An array of documents, which each document having `station` and `avgAirTemp` properties.
 */
async function getAvgAirTempForEachStation(): Promise<Document[]> {
  const docs = [];

  try {
    const pipeline: Document[] = [
      {
        $group: {
          _id: "$st",
          avgAirTemp: {
            $avg: "$airTemperature.value",
          },
        },
      },
      {
        $project: {
          _id: 0,
          station: "$_id",
          avgAirTemp: 1,
        },
      },
    ];

    coll.createIndex({ st: 1, "airTemperature.value": 1 });
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
 * Calculates the valid wind direction measurements _(quality of "1")_ for each station.
 * @returns An array of documents, each with `station` and `totalValidMeasurements` properties,
 * holding the station code "st", and valid wind direction measurements (quality of "1")
 * for each station.
 */
async function getTotalValidWindDirectionMeasurementsPerStation(): Promise<
  Document[]
> {
  const docs = [];

  try {
    const pipeline: Document[] = [
      {
        $match: {
          "wind.direction.quality": "1",
        },
      },
      {
        $group: {
          _id: "$st",
          validWindObjects: {
            $push: "$wind.direction",
          },
          validWindObjectsSize: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          station: "$_id",
          totalValidMeasurements: "$validWindObjectsSize",
        },
      },
    ];

    await coll.createIndex("wind.direction.quality");
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
 * Gets the top dates with the highest air pressure values.
 * @param docsLimit Number to limit returned documents.
 * @returns An array of documents, each with `dateRecorded` and `highestValue` properties.
 */
async function getTopDatesWithHighestAirPressure(
  docsLimit: number
): Promise<Document[]> {
  const docs = [];

  try {
    const pipeline: Document[] = [
      {
        $project: {
          _id: 0,
          year: {
            $year: "$ts",
          },
          month: {
            $month: "$ts",
          },
          day: {
            $dayOfMonth: "$ts",
          },
          pressureValue: {
            $cond: [
              {
                $eq: ["$pressure.quality", "1"],
              },
              "$pressure.value",
              null,
            ],
          },
        },
      },
      {
        $group: {
          _id: {
            year: "$year",
            month: "$month",
            day: "$day",
          },
          pressureValues: {
            $addToSet: "$pressureValue",
          },
        },
      },
      {
        $project: {
          _id: 0,
          date: {
            $concat: [
              {
                $toString: "$_id.day",
              },
              "-",
              {
                $toString: "$_id.month",
              },
              "-",
              {
                $toString: "$_id.year",
              },
            ],
          },
          pressureValue: {
            $max: "$pressureValues",
          },
        },
      },
      {
        $sort: {
          pressureValue: -1,
        },
      },
      {
        $limit: docsLimit,
      },
    ];

    // await coll.createIndex({ "pressure.value": -1 });
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

interface MostCommonWindSpeedRateForAllStations extends Document {
  mostCommonWindSpeedRate: number;
}
/**
 * Finds and returns the most common wind speed rate recorded for all stations.
 * @returns A single document with `MostCommonWindSpeedRateForAllStations` shape.
 */
async function getMostCommonWindSpeedRateForAllStations(): Promise<MostCommonWindSpeedRateForAllStations> {
  const res = {} as MostCommonWindSpeedRateForAllStations;

  try {
    const pipeline: Document[] = [
      {
        $group: {
          _id: "$wind.speed.rate",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          mostCommonWindSpeedRate: "$_id",
        },
      },
    ];

    await coll.createIndex({ "wind.speed.rate": 1 });
    const cursor = coll.aggregate<MostCommonWindSpeedRateForAllStations>(
      pipeline,
      aggregationOptions
    );

    for await (const doc of cursor) {
      res.mostCommonWindSpeedRate = doc.mostCommonWindSpeedRate;
    }
  } catch (error) {
    console.error(error);
  }

  console.log(res);
  return res;
}

interface RecordsWithLowVisibility extends Document {
  docCount: number;
}
/**
 * Calculates and returns the total number of records with a visibility distance below `distanceBelow` parameter.
 * @param distanceBelow The visibility distance below in meters.
 * @returns A document with the `RecordsWithLowVisibility` shape.
 */
async function getAllRecordsWithVisibilityBelowParam(distanceBelow: number) {
  const res = {} as RecordsWithLowVisibility;

  try {
    const pipeline: Document[] = [
      {
        $match: {
          "visibility.distance.value": {
            $lt: distanceBelow,
          },
        },
      },
      {
        $count: "docCount",
      },
    ];

    await coll.createIndex({ "visibility.distance.value": -1 });
    const cursor = coll.aggregate<RecordsWithLowVisibility>(
      pipeline,
      aggregationOptions
    );

    for await (const doc of cursor) {
      res.docCount = doc.docCount;
    }
  } catch (error) {
    console.error(error);
  }

  console.log(res);
  return res;
}
