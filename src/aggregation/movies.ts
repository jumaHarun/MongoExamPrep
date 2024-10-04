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

const db = client.db("mflix");
const coll = db.collection("movies");

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
     * Find the top 3 genres by the number of movies with an
     * IMDb rating above 8.
     */
    // await findTopGenres(8, 3);

    /**
     * Calculate the average IMDb rating for movies released in 2003.
     */
    // await calculateAvgRatingByYear(2003);

    /**
     * Get the number of movies produced by each country after 2010.
     */
    // await getNumOfMoviesProducedByCountryForYear(2010);
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
 * Finds and returns the top `docsLimit` genres, by number of movies, with an IMDb rating above `ratingAbove`.
 * @param ratingAbove The IMDB rating we match greater than to.
 * @param docsLimit The number of documents to return.
 * @returns An array of documents, with `docsLimit` length, resulting from the aggregration pipeline.
 */
async function findTopGenres(
  ratingAbove: number,
  docsLimit: number
): Promise<Document[]> {
  const docs = [];
  try {
    const pipeline: Document[] = [
      { $match: { "imdb.rating": { $gt: ratingAbove } } },
      { $unwind: { path: "$genres" } },
      {
        $group: {
          _id: "$genres",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: docsLimit },
    ];

    const cursor = coll.aggregate(pipeline, aggregationOptions);

    for await (const doc of cursor) {
      docs.push(doc);
    }
  } catch (error) {
    console.error(error);
  }
  return docs;
}
/**
 * Calculates the average rating for movies released in `queryYear year.
 * @param queryYear The year to calculate average rating for.
 * @returns A document with the year set to the `_id` property, and a `roundedAvgRating` property, the average rating rounded to 1 decimal place.
 */
async function calculateAvgRatingByYear(queryYear: number) {
  let result = {};
  try {
    const pipeline: Document[] = [
      { $match: { year: queryYear } },
      {
        $group: {
          _id: "$year",
          avgRating: {
            $avg: "$imdb.rating",
          },
        },
      },
      {
        $project: {
          _id: "$_id",
          roundedAvgRating: {
            $round: ["$avgRating", 1],
          },
        },
      },
    ];

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

/**
 * Finds and returns the number of movies produced by each country after a specific year.
 * @param queryYear The year _(after which)_ to get number of movies produced by each country.
 * @returns An array of documents resulting from the aggregration pipeline.
 */
async function getNumOfMoviesProducedByCountryForYear(
  queryYear: number
): Promise<Document[]> {
  const docs = [];
  try {
    const pipeline: Document[] = [
      {
        $match: {
          year: { $gt: queryYear },
        },
      },
      {
        $unwind: {
          path: "$countries",
        },
      },
      {
        $group: {
          _id: "$countries",
          numOfMovies: {
            $sum: 1,
          },
        },
      },
    ];

    const cursor = coll.aggregate(pipeline, aggregationOptions);

    for await (const doc of cursor) {
      docs.push(doc);
    }

    console.log(`Number of documents: ${docs.length}`);
  } catch (error) {
    console.error(error);
  }
  return docs;
}
