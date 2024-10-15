import express, { Application } from "express";
import { MongoClient, TransactionOptions } from "mongodb";
import { config } from "dotenv";
import {
  ACCOUNT_NUMBERS,
  SYMBOLS,
  DBTxn,
  DBCustomer,
  DBAccount,
  LIMITS,
  PRODUCTS,
  TTxn,
} from "./data.js";

config();
const app: Application = express();
app.use(express.json());

const uri =
  "mongodb://adminZiro:admin@localhost:40000,localhost:40001,127.0.0.1:40002/?replicaSet=myapp&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1&w=majority&wtimeoutMS=2000";
const client = new MongoClient(uri);

const db = client.db("sample_analytics");

const accountsCollection = db.collection<DBAccount>("accounts");
const customersCollection = db.collection<DBCustomer>("customers");
const transactionsCollection = db.collection<DBTxn>("transactions");

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
    /**
     * // Beginner

    // await addNewTransaction(
    //   getRandom(accountNumbers),
    //   "tsl",
    //   1500,
    //   25.5,
    //   "buy"
    // );

    // await updateAccountLimit(getRandom(accountNumbers), getRandom(limits));

    // await updateAccountProducts(
    //   getRandom(ACCOUNT_NUMBERS),
    //   getRandom(PRODUCTS)
    // );

    // Intermediate

    // const txns = [
    //   buildTxn(500, "buy", "aapl", 135),
    //   buildTxn(300, "sell", "msft", 240),
    // ];
    // await insertMultiTxns(getRandom(ACCOUNT_NUMBERS), txns);

    // const acc: DBAccount = {
    //   account_id: createAccountID(),
    //   limit: getRandom(LIMITS),
    //   products: [],
    // };
    // const txn: DBTxn = {
    //   account_id: acc.account_id,
    //   transaction_count: 0,
    //   bucket_start_date: new Date(),
    //   bucket_end_date: new Date(),
    //   transactions: [],
    // };
    // await addNewAccountAndTxn(acc, txn);
     */

    // Advanced
    // await closeCustomerAccounts("ziro", [371138, 324287]);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();

// Transactions Questions

/**
 * Closes accounts `accountsToDelete` for a user with `username`
 * @param username The customer username to match in the database.
 * @param accountsToDelete An array of account numbers to delete.
 */
async function closeCustomerAccounts(
  username: string,
  accountsToDelete: number[]
) {
  const session = client.startSession();
  const txnOpts: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  console.log(`User: ${username}\nAccs: ${accountsToDelete}`);

  try {
    const txnRes = await session.withTransaction(async () => {
      const updateCustomersResults = await customersCollection.updateOne(
        { username },
        { $pull: { accounts: { $in: accountsToDelete } } },
        { session }
      );
      if (updateCustomersResults.modifiedCount !== 1) {
        console.error("Update to Customer DB failed. Rolling back...");
        await session.abortTransaction();
        return;
      }

      for await (const acc of accountsToDelete) {
        const accountDeleteResult = await accountsCollection.deleteOne(
          {
            account_id: acc,
          },
          { session }
        );

        if (accountDeleteResult.deletedCount !== 1) {
          console.error(
            `Account with account_id: ${acc} failed to delete. Rolling back...`
          );
          await session.abortTransaction();
          return;
        }
      }

      return "Transaction committed.";
    }, txnOpts);

    console.log("\nCommiting transaction...");

    if (txnRes) {
      console.log("\nTransaction committed.");
    } else {
      console.log("\nThe transaction was intentionally aborted.");
    }
  } catch (error) {
    console.error("\nTransaction failed due to an unexpected error: ", error);
    return;
  } finally {
    await session.endSession();
    await client.close();
  }
}
/**
 *  - Scenario: You want to calculate the total value of all the
 * transactions (both `buy` and `sell`) for the account `account_id:
 * 443178` within the year 2014.
 *
 * - **Task**: Write a transaction that first retrieves and sums the
 * `total` field for all transactions in the year 2014, then updates the
 * `transactions_summary` field for that account with the calculated
 * value.
 */

/**
 * - Scenario: You need to deactivate all customers born before 1980.
 * 
 * - **Task**: Write a transaction that updates the `active` field to 
 * `false` for all customers born before 1980. Roll back if any one of 
 * the updates fails.

 */
