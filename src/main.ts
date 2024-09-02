import express, { Application } from "express";
import { MongoClient } from "mongodb";
import { config } from "dotenv";

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

const connectToDatabase = async () => {
  try {
    await client.connect();
    const collections = await client.db(database).collections();

    console.log(
      `Connected to the ${database} database 🌍 \nFull connection string: ${uri}`
    );
    if (collections.length > 0) {
      console.log(`Collections: ${collections}`);
    } else {
      console.log("No collections in database!");
    }
  } catch (err) {
    console.error(`Error connecting to the databases: ${err}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error(`Error in main: ${err}`);
  } finally {
    await client.close();
  }
};
main();
