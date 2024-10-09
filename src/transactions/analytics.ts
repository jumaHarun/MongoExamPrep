import express, { Application } from "express";
import { MongoClient } from "mongodb";
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

// Transaction Questions

/** Multi-Document Transaction
 *
 * Create a transaction that transfers an amount from one account to another
 * in the `sample_analytics.transactions` collection. Ensure that the
 * transaction updates the `balance` field in the `sample_analytics.accounts`
 * collection to reflect the new balances.
 */

/** Complex Transaction
 * Develop a transaction that updates the `products` field in the
 * `sample_analytics.accounts` collection to add a new product and inserts a
 * corresponding transaction into the `sample_analytics.transactions`
 * collection.
 */

/** Transaction with Aggregation
 *
 * Write a transaction that calculates the total amount of transactions for
 * a specific account in the `sample_analytics.transactions` collection
 * using an aggregation pipeline and updates the `total_transactions` field
 * in the `sample_analytics.accounts` collection with this total.
 */

/** Transfer Funds Transaction
 *
 * Develop a transaction that transfers an amount from one account to
 * another in the `sample_analytics.transactions` collection. Ensure that
 * the transaction updates the `balance` field in the
 * `sample_analytics.accounts` collection to reflect the new balances.
 */

/** Account and Transaction Update
 *
 * Write a transaction that updates the `products` field in the
 * `sample_analytics.accounts` collection to add a new product and inserts a
 * corresponding transaction into the `sample_analytics.transactions`
 * collection.
 */

/** Aggregate and Update Transaction
 *
 * Create a transaction that calculates the total amount of transactions for
 * a specific account in the `sample_analytics.transactions` collection
 * using an aggregation pipeline and updates the `total_transactions` field
 * in the `sample_analytics.accounts` collection with this total.
 */

// IIFE main function

(async () => {
  try {
    await connectToDB();
    // Multi-Document Transaction

    // Complex Transaction

    // Transaction with Aggregation

    // Transfer Funds Transaction

    // Account and Transaction Update

    // Aggregate and Update Transaction
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();
