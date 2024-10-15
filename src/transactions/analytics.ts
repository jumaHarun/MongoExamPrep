import express, { Application } from "express";
import { MongoClient, TransactionOptions } from "mongodb";
import { config } from "dotenv";

config();
const app: Application = express();
app.use(express.json());

const uri =
  "mongodb://adminZiro:admin@localhost:40000,localhost:40001,127.0.0.1:40002/?replicaSet=myapp&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1&w=majority&wtimeoutMS=2000";
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
async function getTotalTransactionAmountForAccount(accountId: number) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  try {
    const txnRes = await session.withTransaction(async () => {
      // Aggregrate total amount for buys and sells
      const pipeline: Document[] = [];

      const cursor = transactionsCollection.aggregate(pipeline, {
        maxTimeMS: 60_000,
        allowDiskUse: true,
      });

      for await (const doc of cursor) {
        console.log(doc);
      }

      // Populate total_transactions field with results {buys: number, sells: number}
      return "Transaction committed.";
    }, transactionOptions);

    console.log("\nCommiting transaction...");

    if (txnRes) {
      console.log("\nTransaction committed.");
    } else {
      console.log("\nThe transaction was intentionally aborted.");
    }
  } catch (error) {
    console.error("\nTransaction failed due to an unexpected error: ", error);

    await session.abortTransaction();
    console.error("Transaction aborted!");
    return;
  } finally {
    await session.endSession();
    await client.close();
  }
}

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
