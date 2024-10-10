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
