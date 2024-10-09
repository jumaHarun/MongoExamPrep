import express, { Application } from "express";
import { Document, MongoClient } from "mongodb";
import { config } from "dotenv";

config();
const app: Application = express();
app.use(express.json());

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI in the .env file");
}

const client = new MongoClient(uri);

const db = client.db("sample_mflix");
const commentsCollection = db.collection("comments");
const moviesCollection = db.collection("movies");
const sessionsCollection = db.collection("sessions");
const theatersCollection = db.collection("theaters");
const usersCollection = db.collection("users");

const connectToDB = async () => {
  try {
    await client.connect();
    console.log(
      `\nConnected to the ${db.databaseName} database\nUsing the ${commentsCollection.collectionName}, ${moviesCollection.collectionName}, ${sessionsCollection.collectionName}, ${theatersCollection.collectionName}, and ${usersCollection.collectionName} collections.\n`
    );
  } catch (error) {
    console.error(error);
    return;
  }
};

(async () => {
  try {
    await connectToDB();
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();
// Transaction Questions

/** Basic Transaction
 *
 * Write a transaction that inserts a new comment into the
 * `sample_mflix.comments` collection and updates the `sample_mflix.movies`
 * collection to increment the `comments_count` field for the related movie
 */

/** Transaction with Error Handling
 *
 * Write a transaction that inserts a new user into the `sample_mflix.users`
 * collection and a new session into the `sample_mflix.sessions` collection.
 * Use `try-catch` blocks to ensure that if one operation fails, the entire
 * transaction is rolled back.
 */

/** Insert and Update Transaction
 *
 * Write a transaction that inserts a new comment into the
 * `sample_mflix.comments` collection and updates the `comments_count` field
 * in the `sample_mflix.movies` collection to increment the number of
 * comments for the related movie.
 */

/** User and Session Transaction
 *
 * Create a transaction that inserts a new user into the `sample_mflix.users`
 * collection and a new session into the `sample_mflix.sessions` collection.
 * Use `try-catch` blocks to ensure that the transaction is rolled back if
 * either operation fails.
 */

/** Delete and Update Transaction
 *
 * Write a transaction that deletes a comment from the `sample_mflix.comments`
 * collection and updates the `comments_count` field in the
 * `sample_mflix.movies` collection to decrement the number of comments for
 * the related movie.
 */
