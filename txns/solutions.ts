import { MongoClient, TransactionOptions } from "mongodb";
import { DBAccount, DBCustomer, DBTxn, TTxn } from "./data";

const uri =
  "mongodb://adminZiro:admin@localhost:40000,localhost:40001,127.0.0.1:40002/?replicaSet=myapp&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1&w=majority&wtimeoutMS=2000";
const client = new MongoClient(uri);

const db = client.db("sample_analytics");

const accountsCollection = db.collection<DBAccount>("accounts");
const customersCollection = db.collection<DBCustomer>("customers");
const transactionsCollection = db.collection<DBTxn>("transactions");

// Intermediate
/**
 * - Scenario: You want to transfer $2,500 from the account `account_id: 371138` to the
 * account `account_id: 443178`.
 *
 * - **Task**: Write a MongoDB transaction that deducts $2,500 from one account’s balance
 * and adds $2,500 to the other account, while also creating a new transaction entry for
 * both.
 */
async function transferFunds(
  fromAccountId: number,
  toAccountId: number,
  amount: number
) {
  // TBD
}

/**
 * - Scenario: You need to insert multiple transactions for an account with `account_id:
 * 443178` in one go.
 *
 * - **Task**: Write a transaction that inserts two new transactions: one `buy` for 500
 * shares of `aapl` at $135, and one `sell` for 300 shares of `msft` at $240. Ensure both
 * are part of a single transaction.
 */
/**
 * Inserts multiple transactions in the `transactions` field and increments the `transaction_count` field by the `txnsToAdd` param's length.
 * @param account_id The account ID to match a document.
 * @param txnsToAdd An array of transaction objects to insert in the matched document.
 */
async function insertMultiTxns(account_id: number, txnsToAdd: TTxn[]) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  console.log(txnsToAdd);
  console.log("account_id: ", account_id);
  try {
    const txnRes = await session.withTransaction(async () => {
      const updateResults = await transactionsCollection.updateOne(
        { account_id },
        {
          $push: {
            transactions: { $each: [...txnsToAdd] },
          },
          $inc: { transaction_count: txnsToAdd.length },
        },
        { session }
      );
      if (updateResults.modifiedCount !== 1) {
        console.log(
          `No updates done on document with account_id: ${account_id}`
        );
      } else {
        console.log(
          `Document updated. Inserted ${txnsToAdd.length} transactions.`
        );
      }

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
 * - Scenario: You are attempting to insert a new account document and a new transaction in
 * two separate collections.
 *
 * - **Task**: Write a transaction that inserts a new document into the `accounts`
 * collection and creates a new transaction in the `transactions` collection. If the
 * transaction creation fails, roll back the new account insertion.
 */
/**
 * Insert a new account and a new transaction into the `accounts` and `tranasctions` collections respectively.
 * @param accountToAdd The account document to insert into `accounts` collection.
 * @param txnToAdd The tranasction document to insert into `tranasctions` collection.
 */
async function addNewAccountAndTxn(accountToAdd: DBAccount, txnToAdd: DBTxn) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  console.log("txnToAdd: ", txnToAdd);
  console.log("accountToAdd: ", accountToAdd);

  try {
    const txnRes = await session.withTransaction(async () => {
      const insertAccountResults = await accountsCollection.insertOne(
        accountToAdd,
        { session }
      );
      if (insertAccountResults.insertedId) {
        console.log(
          `Inserted new account successfully with ID: ${insertAccountResults.insertedId}`
        );
      }

      const insertTransactionResults = await transactionsCollection.insertOne(
        txnToAdd,
        { session }
      );
      if (insertTransactionResults.insertedId) {
        console.log(
          `Inserted new account successfully with ID: ${insertTransactionResults.insertedId}`
        );
      } else {
        console.log("Aborting Transaction...");
        await session.abortTransaction();
        return;
      }

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
