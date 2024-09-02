import express, { Application } from "express";
import { MongoClient, Document } from "mongodb";
import { config } from "dotenv";
import TData from "./types/data.ts";
import countriesData from "./db/data.json";

config();

const app: Application = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please provide your MongoDB database URL.");
}

const client = new MongoClient(uri);
const database = "examprep";
const collection_name = "countries";

const countriesCollection = client.db(database).collection(collection_name);

const connectToDatabase = async () => {
  try {
    await client.connect();

    console.log(
      `Connected to the ${database} database 🌍 \nFull connection string: ${uri}`
    );
  } catch (err) {
    console.error(`Error connecting to the databases: ${err}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();

    // await loadSampleData(countriesData);
  } catch (err) {
    console.error(`Error in main: ${err}`);
  } finally {
    await client.close();
  }
};
main();

async function loadSampleData<T extends TData & Document>(docs: T) {
  const coll = "countries";
  try {
    const res = await client.db(database).collection(coll).insertMany(docs);
    console.log(`Inserted ${res.insertedCount} documents.`);
    console.log(res);
  } catch (err) {
    console.error(`Error loading sample data: ${err}`);
  }
}
