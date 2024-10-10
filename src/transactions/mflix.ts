import express, { Application } from "express";
import { Document, MongoClient, ObjectId, TransactionOptions } from "mongodb";
import { config } from "dotenv";

config();
const app: Application = express();
app.use(express.json());

const uri =
  "mongodb://adminZiro:admin@localhost:40000,localhost:40001,127.0.0.1:40002/?replicaSet=myapp&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1&w=majority&wtimeoutMS=2000";
const client = new MongoClient(uri);

const db = client.db("sample_mflix");
// Collections
const commentsCollection = db.collection<Comment>("comments");
const moviesCollection = db.collection<Movie>("movies");
const sessionsCollection = db.collection<DBSession>("sessions");
const theatersCollection = db.collection("theaters");
const usersCollection = db.collection<DBUser>("users");

// Document shapes
interface Comment extends Document {
  name: string;
  email: string;
  movie_id: ObjectId;
  text: string;
  date: Date;
}

interface Movie extends Document {
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  countries: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: { wins: number; nominations: number; text: string };
  lastupdated: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
      lastUpdated: Date;
    };
  };
}

// Types
type User = { name: string; email: string };

// Some movie title for testing
const sampleMovies = [
  "Blacksmith Scene",
  "The Great Train Robbery",
  "The Land Beyond the Sunset",
  "A Corner in Wheat",
  "Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics",
  "Traffic in Souls",
  "Gertie the Dinosaur",
];

const sampleUsers: User[] = [
  {
    name: "Jon Snow",
    email: "kit_harington@gameofthron.es",
  },
  {
    name: "Viserys Targaryen",
    email: "harry_lloyd@gameofthron.es",
  },
  {
    name: "Petyr Baelish",
    email: "aidan_gillen@gameofthron.es",
  },
  {
    name: "Jorah Mormont",
    email: "iain_glen@gameofthron.es",
  },
  {
    name: "Daenerys Targaryen",
    email: "emilia_clarke@gameofthron.es",
  },
  {
    name: "Cersei Lannister",
    email: "lena_headey@gameofthron.es",
  },
  {
    name: "Catelyn Stark",
    email: "michelle_fairley@gameofthron.es",
  },
  {
    name: "Jaime Lannister",
    email: "nikolaj_coster-waldau@gameofthron.es",
  },
  {
    name: "Robert Baratheon",
    email: "mark_addy@gameofthron.es",
  },
  {
    name: "Ned Stark",
    email: "sean_bean@gameofthron.es",
  },
];

// Helper functions
type PickRandomTitle = () => Promise<ObjectId>;
const getRandomMovieId: PickRandomTitle = async () => {
  const index = Math.floor(Math.random() * sampleMovies.length);
  const title = sampleMovies[index];

  const movie = await moviesCollection.findOne({ title });
  const id = movie!._id;

  return id;
};

function pickRandomUser(): User {
  const index = Math.floor(Math.random() * sampleMovies.length);

  return sampleUsers[index];
}

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

// Transaction Questions

/** Basic Transaction
 *
 * Write a transaction that inserts a new comment into the
 * `sample_mflix.comments` collection and updates the `sample_mflix.movies`
 * collection to increment the `comments_count` field for the related movie
 */
async function insertCommentAndIncrementCommentCount(
  comment: string,
  movieId: ObjectId
) {
  const { name, email } = pickRandomUser();

  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  try {
    const transactionResults = await session.withTransaction(async () => {
      // 1. Insert new comment
      const insertCommentResults = await commentsCollection.insertOne(
        {
          name,
          email,
          movie_id: movieId,
          text: comment,
          date: new Date(),
        },
        { session }
      );
      if (!insertCommentResults.insertedId) {
        await session.abortTransaction();
        console.error("Transaction aborted!");
        return;
      } else {
        console.log(
          `Successfully inserted ${insertCommentResults.insertedId} into the ${commentsCollection.collectionName} collection`
        );
      }

      // 2. Increment comments_count
      const incrementCountResults = await moviesCollection.updateOne(
        { _id: movieId },
        { $inc: { num_mflix_comments: 1 } },
        { session }
      );
      if (incrementCountResults.modifiedCount !== 1) {
        await session.abortTransaction();
        console.error("Transaction aborted!");
        return;
      } else {
        console.log(
          `${incrementCountResults.matchedCount} document(s) matched in the movies collection, updated ${incrementCountResults.modifiedCount} document(s).`
        );
      }

      return "Transaction committed.";
    }, transactionOptions);

    console.log("\nCommiting transaction...");

    if (transactionResults) {
      console.log("\nTransaction committed.");
    } else {
      console.log("\nThe transaction was intentionally aborted.");
    }
  } catch (error) {
    console.error("\nTransaction failed due to an unexpected error: ", error);
    process.exit(1);
  } finally {
    await session.endSession();
    await client.close();
  }
}

/** Transaction with Error Handling
 *
 * Write a transaction that inserts a new user into the `sample_mflix.users`
 * collection and a new session into the `sample_mflix.sessions` collection.
 * Use `try-catch` blocks to ensure that if one operation fails, the entire
 * transaction is rolled back.
 */
interface DBUser extends Document {
  password: string;
  name: string;
  email: string;
}
interface DBSession extends Document {
  user_id: string;
  jwt: string;
}
async function addUserAndSession(userToAdd: DBUser) {
  const session = client.startSession();
  const transactionOptions: TransactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  try {
    const txnRes = await session.withTransaction(async () => {
      // Add user
      const insertUserResults = await usersCollection.insertOne(userToAdd);
      if (!insertUserResults.insertedId) {
        await session.abortTransaction();
        console.error("Transaction aborted!");
        return;
      } else {
        console.log(
          `Successfully inserted ${insertUserResults.insertedId} into the ${usersCollection.collectionName} collection`
        );
      }

      // Add session
      const insertSessionResults = await sessionsCollection.insertOne({
        user_id: "secretUserIdString",
        jwt: "secretUserJWTString",
      });
      if (!insertSessionResults.insertedId) {
        await session.abortTransaction();
        console.error("Transaction aborted!");
        return;
      } else {
        console.log(
          `Successfully inserted ${insertSessionResults.insertedId} into the ${sessionsCollection.collectionName} collection`
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

    await session.abortTransaction();
    console.error("Transaction aborted!");
    return;
  } finally {
    await session.endSession();
    await client.close();
  }
}

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

// IIFE main function

(async () => {
  try {
    await connectToDB();
    // Basic Transaction
    // const movieId = await getRandomMovieId();
    // await insertCommentAndIncrementCommentCount(
    //   "This is a placeholder comment.",
    //   movieId
    // );

    // Transaction with Error Handling
    // const user: DBUser = {
    //   name: "jane doe",
    //   email: "janeDoe998@gamesofthon.es",
    //   password: "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfMLeuuUpRxa2",
    // };
    // await addUserAndSession(user);

    // Insert and Update Transaction

    // User and Session Transaction

    // Delete and Update Transaction
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
})();
