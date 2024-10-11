import { MongoClient, TransactionOptions } from "mongodb";
import { DBAccount, DBCustomer, DBTxn } from "./data";

const uri =
  "mongodb://adminZiro:admin@localhost:40000,localhost:40001,127.0.0.1:40002/?replicaSet=myapp&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1&w=majority&wtimeoutMS=2000";
const client = new MongoClient(uri);

const db = client.db("sample_analytics");

const accountsCollection = db.collection<DBAccount>("accounts");
const customersCollection = db.collection<DBCustomer>("customers");
const transactionsCollection = db.collection<DBTxn>("transactions");

// Beginner
/**
 * Adds a new transaction in the `transactions` field and increments the `transaction_count` by one.
 * @param account_id The account ID to insert transaction.
 * @param symbol The symbol for the transaction.
 * @param shares The amount of shares bought or sold.
 * @param atPrice The price at which each share is bought or sold.
 * @param code The transaction code. Either buy or sell.
 */
export async function addNewTransaction(
  account_id: number,
  symbol: string,
  shares: number,
  atPrice: number,
  code: string
) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  console.log("account_id: ", account_id);

  try {
    const txnRes = await session.withTransaction(async () => {
      await transactionsCollection.updateOne(
        { account_id },
        {
          $push: {
            transactions: {
              date: new Date(),
              amount: shares,
              transaction_code: code,
              symbol,
              price: atPrice.toString(),
              total: (atPrice * shares).toString(),
            },
          },
          $inc: { transaction_count: 1 },
        },
        { session }
      );
      console.log("Successfully inserted new transaction");

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
    return;
  } finally {
    await session.endSession();
    await client.close();
  }
}

/**
 * Updates the `limit` field of the specified account.
 * @param account_id The account ID to match a document.
 * @param newLimit The new limit to be set in the `limit` field.
 */
export async function updateAccountLimit(account_id: number, newLimit: number) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  console.log("account_id: ", account_id);

  try {
    const txnRes = await session.withTransaction(async () => {
      await accountsCollection.updateOne(
        { account_id },
        { $set: { limit: newLimit } },
        { session }
      );

      console.log(
        `Updated the limit to ${newLimit} for account with ID: ${account_id}`
      );

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
    return;
  } finally {
    await session.endSession();
    await client.close();
  }
}

/**
 * Updates the `products` field of the specified account with a new product. Does nothing if product already exists.
 * @param account_id The account ID to match a document.
 * @param newProduct The new product to be added in the `products` field.
 */
export async function updateAccountProducts(
  account_id: number,
  newProduct: string
) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  console.log("account_id: ", account_id);
  console.log("newProduct: ", newProduct);

  try {
    const txnRes = await session.withTransaction(async () => {
      await accountsCollection.updateOne(
        {
          account_id,
        },
        {
          $addToSet: {
            products: newProduct,
          },
        }
      );

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
    return;
  } finally {
    await session.endSession();
    await client.close();
  }
}
