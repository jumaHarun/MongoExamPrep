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

const db = client.db("sample_analytics");

const accountsCollection = db.collection("accounts");
const customersCollection = db.collection("customers");
const transactionsCollection = db.collection("transactions");

const connectToDB = async () => {
  try {
    await client.connect();
    console.log(
      `\nConnected to the ${db.databaseName} database\nUsing the ${accountsCollection.collectionName}, ${customersCollection.collectionName}, and ${transactionsCollection.collectionName} collections.\n`
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
/**
 * Create a transaction that transfers an amount from one account to another
 * in the `sample_analytics.transactions` collection. Ensure that the
 * transaction updates the `sample_analytics.accounts` collection to
 * reflect the new balances.
 */

/**
 * Develop a transaction that updates the `sample_analytics.accounts`
 * collection to add a new product to an account's product list and inserts
 * a corresponding transaction into the `sample_analytics.transactions`
 * collection.
 */

/**
 * Write a transaction that aggregates the total amount of transactions for
 *  a specific account in the `sample_analytics.transactions` collection
 * and updates the `sample_analytics.accounts` collection with this total.
 */

/**
 * Develop a transaction that transfers an amount from one account to
 * another in the `sample_analytics.transactions` collection. Ensure that
 * the transaction updates the `sample_analytics.accounts` collection to
 * reflect the new balances.
 */

/**
 * Write a transaction that updates the `sample_analytics.accounts`
 * collection to add a new product to an account's product list and inserts
 *  a corresponding transaction into the `sample_analytics.transactions`
 * collection.
 */

/**
 *Create a transaction that aggregates the total amount of transactions for
 a specific account in the `sample_analytics.transactions` collection and 
 updates the `sample_analytics.accounts` collection with this total.
 */
