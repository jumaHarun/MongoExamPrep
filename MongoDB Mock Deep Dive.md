# MongoDB Associate Developer Mock Exam

## Various Deep Dives with answers

---

### **Section 1: MongoDB Overview and the Document Model (8%)**

**1.** Which of the following is **NOT** a valid BSON data type supported by MongoDB?

- A) String
- B) Array
- C) Date
- D) File

**2.** You are given three documents with different structures. Which of the following combinations is **NOT** valid for storage within the same collection?

- A) `{ "_id": 1, "name": "John" }`
- B) `{ "_id": 2, "name": "Jane", "age": 30 }`
- C) `{ "_id": 3, "age": 40, "hobbies": ["reading"] }`
- D) `{ "_id": 4, "name": { "first": "Alice", "last": "Smith" }, "age": "thirty" }`

**3.** Which of the following correctly defines how MongoDB stores and represents data internally?

- A) BSON (Binary JSON)
- B) XML
- C) CSV
- D) YAML

---

### **Section 2: CRUD (51%)**

**4.** Given the document `{ "name": "John", "age": 30 }`, which of the following commands is a properly formed insert operation?

- A) `db.collection.insert( { name: "John", age: 30 } )`
- B) `db.collection.save( { name: "John", age: 30 } )`
- C) `db.collection.insertOne( { name: "John", age: 30 } )`
- D) `db.collection.insertDocument( { name: "John", age: 30 } )`

**5.** Which of the following will correctly update the document to set `age` to 31?

- A) `db.collection.update( { name: "John" }, { age: 31 } )`
- B) `db.collection.updateOne( { name: "John" }, { $set: { age: 31 } } )`
- C) `db.collection.updateOne( { name: "John" }, { age: 31 } )`
- D) `db.collection.replaceOne( { name: "John" }, { age: 31 } )`

**6.** In a scenario where you want to update a document if it exists and insert it if it doesn't, which command should be used?

- A) `db.collection.update( { name: "John" }, { $set: { age: 31 } }, { upsert: true } )`
- B) `db.collection.updateOne( { name: "John" }, { $set: { age: 31 } } )`
- C) `db.collection.replaceOne( { name: "John" }, { age: 31 }, { upsert: true } )`
- D) `db.collection.findAndModify( { name: "John" }, { $set: { age: 31 } } )`

**7.** Which of the following commands deletes all documents where the `age` field is greater than 30?

- A) `db.collection.remove( { age: { $gt: 30 } } )`
- B) `db.collection.deleteMany( { age: { $gt: 30 } } )`
- C) `db.collection.delete( { age: { $gt: 30 } } )`
- D) `db.collection.removeMany( { age: { $gt: 30 } } )`

**8.** Given the following query: `db.collection.find( { hobbies: { $in: ["reading", "sports"] } } )`, which documents will be returned?

- A) Documents where `hobbies` contains either "reading" or "sports"
- B) Documents where `hobbies` contains both "reading" and "sports"
- C) Documents where `hobbies` is exactly ["reading", "sports"]
- D) Documents where `hobbies` is an array of length 2

---

### **Section 3: Indexes (17%)**

**9.** Which of the following would improve the performance of a query that frequently performs an equality match on the `age` field?

- A) `db.collection.createIndex( { name: 1 } )`
- B) `db.collection.createIndex( { age: 1 } )`
- C) `db.collection.createIndex( { hobbies: 1 } )`
- D) `db.collection.createIndex( { age: -1 } )`

**10.** You run a query that performs a full collection scan. Which tool can be used to analyze the performance of the query and identify indexing issues?

- A) `explain()`
- B) `aggregate()`
- C) `validate()`
- D) `mapReduce()`

**11.** What is a potential downside to having too many indexes on a collection?

- A) Increased read performance
- B) Increased disk space usage and slower writes
- C) Faster query performance across the board
- D) Reduced flexibility in document structure

---

### **Section 4: Data Modeling (4%)**

**12.** Which of the following is an example of an anti-pattern in MongoDB data modeling?

- A) Embedding frequently accessed subdocuments in a parent document
- B) Referencing related documents in a separate collection using ObjectIDs
- C) Denormalizing data to avoid unnecessary joins
- D) Storing arrays with unbounded growth that can exceed MongoDB document size limits

**13.** When should you embed related documents instead of linking them with references?

- A) When related data is frequently queried together
- B) When the related data will grow indefinitely
- C) When the collections are too large
- D) When indexing is not required

---

### **Section 5: Tools and Tooling (2%)**

**14.** Which MongoDB tool allows you to load the Atlas Sample Dataset and explore it through a graphical interface?

- A) MongoDB Atlas Data Explorer
- B) MongoDB Compass
- C) Robo 3T
- D) MongoDB Shell

---

### **Section 6: Drivers (18%)**

**15.** What does the connection string URI in MongoDB define?

- A) The database schema
- B) The connection pooling settings
- C) The location of the MongoDB instance and authentication details
- D) The indexes available on a collection

**16.** How would you use the MongoDB driver to insert multiple documents into a collection?

- A) `db.collection.insertMany( [ { name: "Alice" }, { name: "Bob" } ] )`
- B) `db.collection.insertOne( [ { name: "Alice" }, { name: "Bob" } ] )`
- C) `db.collection.insertDocuments( [ { name: "Alice" }, { name: "Bob" } ] )`
- D) `db.collection.bulkInsert( [ { name: "Alice" }, { name: "Bob" } ] )`

**17.** Which driver feature allows you to efficiently reuse connections instead of opening a new connection for every database operation?

- A) Sharding
- B) Connection Pooling
- C) Aggregation
- D) Indexing

---

### **Answer Key**

1. D) File
2. D) `{ "_id": 4, "name": { "first": "Alice", "last": "Smith" }, "age": "thirty" }`
3. A) BSON (Binary JSON)
4. C) `db.collection.insertOne( { name: "John", age: 30 } )`
5. B) `db.collection.updateOne( { name: "John" }, { $set: { age: 31 } } )`
6. A) `db.collection.update( { name: "John" }, { $set: { age: 31 } }, { upsert: true } )`
7. B) `db.collection.deleteMany( { age: { $gt: 30 } } )`
8. A) Documents where `hobbies` contains either "reading" or "sports"
9. B) `db.collection.createIndex( { age: 1 } )`
10. A) `explain()`
11. B) Increased disk space usage and slower writes
12. D) Storing arrays with unbounded growth that can exceed MongoDB document size limits
13. A) When related data is frequently queried together
14. A) MongoDB Atlas Data Explorer
15. C) The location of the MongoDB instance and authentication details
16. A) `db.collection.insertMany( [ { name: "Alice" }, { name: "Bob" } ] )`
17. B) Connection Pooling

---

---

---

### **Indexes Section (Deep Dive)**

**1.** Which of the following commands creates a single-field ascending index on the `age` field?

- A) `db.collection.createIndex( { age: -1 } )`
- B) `db.collection.ensureIndex( { age: 1 } )`
- C) `db.collection.createIndex( { age: 1 } )`
- D) `db.collection.addIndex( { age: 1 } )`

---

**2.** You have a collection where many queries involve sorting documents by the `createdAt` field in descending order. Which index would be the most appropriate to improve the performance of these queries?

- A) `db.collection.createIndex( { createdAt: -1 } )`
- B) `db.collection.createIndex( { createdAt: 1 } )`
- C) `db.collection.createIndex( { createdAt: 1, updatedAt: 1 } )`
- D) `db.collection.createIndex( { createdAt: -1, updatedAt: -1 } )`

---

**3.** In MongoDB, which of the following is **NOT** true about indexes?

- A) Indexes improve query performance by reducing the amount of data MongoDB scans.
- B) Indexes consume additional disk space and memory.
- C) MongoDB automatically creates an index on the `_id` field when a collection is created.
- D) Indexes have no impact on write performance.

---

**4.** Given a collection that stores products, you want to create a compound index on `category` (ascending) and `price` (descending). Which of the following commands will achieve this?

- A) `db.collection.createIndex( { category: 1, price: -1 } )`
- B) `db.collection.createIndex( { category: -1, price: 1 } )`
- C) `db.collection.createCompoundIndex( { category: 1, price: -1 } )`
- D) `db.collection.createIndex( { category: 1 }, { price: -1 } )`

---

**5.** A query on a collection is performing a full collection scan, and the explain plan output shows `"COLLSCAN"`. What does this indicate?

- A) The query is using an index but is scanning every document.
- B) The query is not using an index and is scanning the entire collection.
- C) The query is incorrectly formed and can't be executed.
- D) The index on the collection is corrupted.

---

**6.** You need to create an index on an array field `tags` to improve query performance. Which of the following index types is appropriate for querying array fields?

- A) Single-field index
- B) Compound index
- C) Multi-key index
- D) Text index

---

**7.** What is the effect of having too many indexes on a collection in MongoDB?

- A) It improves both read and write performance equally.
- B) It increases disk space usage and reduces write performance.
- C) It improves write performance but reduces read performance.
- D) It has no impact on performance.

---

**8.** Which of the following would be the most efficient index for a query that performs an equality match on `category` and a range query on `price`?

- A) `db.collection.createIndex( { category: 1, price: 1 } )`
- B) `db.collection.createIndex( { price: 1, category: 1 } )`
- C) `db.collection.createIndex( { price: 1 } )`
- D) `db.collection.createIndex( { category: 1 } )`

---

**9.** Which of the following best describes a **text index** in MongoDB?

- A) It is used to index numerical fields.
- B) It enables efficient search of string fields for keywords and text search.
- C) It can only be used with the aggregation pipeline.
- D) It indexes all fields of type `String` in a document by default.

---

**10.** What is the purpose of a **sparse index** in MongoDB?

- A) It indexes all documents in a collection, including those with null values for the indexed field.
- B) It indexes only the documents that have the indexed field present, skipping documents without that field.
- C) It improves performance by distributing index entries across multiple shards.
- D) It ensures that all indexed fields are unique.

---

**11.** In a collection where documents frequently contain a missing `status` field, you want to optimize queries for documents that have this field. Which index type would be most appropriate?

- A) Partial index
- B) Sparse index
- C) Compound index
- D) Unique index

---

**12.** What happens when you delete an index from a collection in MongoDB?

- A) MongoDB automatically recreates the index on the next query.
- B) Query performance might degrade, especially if queries were optimized for that index.
- C) All documents associated with the index are deleted from the collection.
- D) Deleting an index does not affect query performance.

---

**13.** A collection has a unique index on the `email` field. What happens if you try to insert a document with an email that already exists in the collection?

- A) The document will be inserted, and the unique index will be updated.
- B) The document will not be inserted, and an error will be thrown.
- C) The document will overwrite the existing document with the same email.
- D) The unique index will be dropped automatically.

---

**14.** In which of the following scenarios would using an **index on an array field** (multi-key index) improve performance?

- A) When performing exact equality searches on scalar fields.
- B) When querying documents where the array contains a specific value.
- C) When performing text searches on array elements.
- D) When performing aggregations that group by array elements.

---

**15.** Which of the following index types allows for **geospatial queries** in MongoDB?

- A) Single-field index
- B) Compound index
- C) 2dsphere index
- D) Text index

---

**16.** How does a **compound index** differ from a single-field index?

- A) It can index multiple fields, allowing efficient queries that involve multiple fields.
- B) It only works with numerical fields.
- C) It performs better on equality queries than range queries.
- D) It only supports ascending order indexing.

---

**17.** When analyzing an explain plan in MongoDB, what does a high value for `nscanned` compared to `nreturned` suggest?

- A) The query is using an optimal index.
- B) The query is scanning more documents than it returns, possibly indicating an inefficient index.
- C) The query is returning fewer documents than it is scanning, which is expected.
- D) The query is not using any index at all.

---

**18.** Which of the following best describes the impact of indexes on **write performance** in MongoDB?

- A) Indexes have no impact on write performance.
- B) Indexes improve write performance by reducing the number of disk operations.
- C) Indexes degrade write performance slightly because MongoDB must maintain the index with each insert or update.
- D) Indexes degrade write performance significantly and should be avoided in write-heavy applications.

---

### **Answer Key:**

1. C) `db.collection.createIndex( { age: 1 } )`
2. A) `db.collection.createIndex( { createdAt: -1 } )`
3. D) Indexes have no impact on write performance.
4. A) `db.collection.createIndex( { category: 1, price: -1 } )`
5. B) The query is not using an index and is scanning the entire collection.
6. C) Multi-key index
7. B) It increases disk space usage and reduces write performance.
8. A) `db.collection.createIndex( { category: 1, price: 1 } )`
9. B) It enables efficient search of string fields for keywords and text search.
10. B) It indexes only the documents that have the indexed field present, skipping documents without that field.
11. B) Sparse index
12. B) Query performance might degrade, especially if queries were optimized for that index.
13. B) The document will not be inserted, and an error will be thrown.
14. B) When querying documents where the array contains a specific value.
15. C) 2dsphere index
16. A) It can index multiple fields, allowing efficient queries that involve multiple fields.
17. B) The query is scanning more documents than it returns, possibly indicating an inefficient index.
18. C) Indexes degrade write performance slightly because MongoDB must maintain the index with each insert or update.

---

---

---

## **Data Modeling (Deep Dive)**

_Expected number of questions: 2_  
_Deep dive number of questions: 4_

---

**1.** In MongoDB, which of the following scenarios is most appropriate for using **embedded documents** in your data model?

- A) When related data is frequently accessed and modified together
- B) When data is rarely queried or updated
- C) When the document size is expected to exceed the 16MB BSON size limit
- D) When the related data has a 1:many relationship and the “many” part grows indefinitely

---

**2.** Which of the following is considered an **anti-pattern** in MongoDB data modeling?

- A) Embedding subdocuments that are frequently accessed
- B) Using references for large datasets that need to be independently queried
- C) Storing arrays that grow indefinitely
- D) Denormalizing data for faster reads

---

**3.** When should you use **reference** relationships between collections instead of embedding?

- A) When the data is frequently accessed together
- B) When data size is small and retrieval speed is prioritized
- C) When the related data grows independently of the parent document
- D) When the related data is frequently updated together with the parent

---

**4.** Which of the following represents an **effective schema design** for **one-to-many relationships** where each "many" record is small and frequently accessed with the "one"?

- A) Embedding the "many" documents as an array inside the "one"
- B) Storing the "many" documents in a separate collection with references
- C) Embedding a few of the "many" documents and referencing the rest
- D) Creating an index on the "\_id" field of the "many" documents

---

## **Tools and Tooling (Deep Dive)**

_Expected number of questions: 1_  
_Deep dive number of questions: 2_

---

**1.** Which tool is used in MongoDB Atlas to explore and modify your data, create indexes, and run aggregation pipelines via a graphical user interface?

- A) MongoDB Compass
- B) MongoDB Atlas Data Explorer
- C) Robo 3T
- D) MongoDB Shell

---

**2.** When using MongoDB’s `mongodump` tool, which of the following is true?

- A) It creates a binary export of the data, including indexes
- B) It creates a JSON export of the data
- C) It does not include indexes in the dump
- D) It creates a SQL dump that can be imported into a relational database

---

## **Drivers (Deep Dive)**

_Expected number of questions: 10_  
_Deep dive number of questions: 20_

---

**1.** Which of the following is a **primary function** of the MongoDB driver?

- A) To manage the replication and sharding of a MongoDB cluster
- B) To allow an application to interact with MongoDB using MongoDB Query Language (MQL)
- C) To manage backup and restore of the database
- D) To handle MongoDB schema design

---

**2.** What is **connection pooling** in the context of MongoDB drivers, and why is it beneficial?

- A) It refers to storing data in multiple collections to improve performance
- B) It allows multiple application connections to share a pool of database connections, reducing the overhead of creating new connections
- C) It reduces the memory usage of the driver by caching query results
- D) It allows for better load balancing across different database servers

---

**3.** What does the following connection string URI specify? `mongodb://user:password@localhost:27017/test?retryWrites=true&w=majority`

- A) The username and password used to authenticate against the database
- B) The port number used to connect to the MongoDB server
- C) The `test` database and options for write concern
- D) All of the above

---

**4.** When using the MongoDB Node.js driver, which of the following commands inserts **multiple documents** into a collection?

- A) `db.collection.insertMany([{name: 'Alice'}, {name: 'Bob'}])`
- B) `db.collection.insert([name: 'Alice'], [name: 'Bob'])`
- C) `db.collection.bulkInsert([{name: 'Alice'}, {name: 'Bob'}])`
- D) `db.collection.insertAll([{name: 'Alice'}, {name: 'Bob'}])`

---

**5.** Which of the following statements is **true** regarding MongoDB drivers and **aggregation pipelines**?

- A) Aggregation pipelines can only be run in the MongoDB shell
- B) Aggregation pipelines can be run in MongoDB drivers by using the `aggregate()` method
- C) Aggregation pipelines cannot return multiple documents in a single query
- D) Aggregation pipelines must be converted to JSON format before being executed by a driver

---

**6.** Which of the following describes **write concern** in MongoDB when using a driver?

- A) Write concern specifies the level of acknowledgement requested from MongoDB after a write operation
- B) Write concern determines how often MongoDB writes data to disk
- C) Write concern controls the replication of data across multiple servers
- D) Write concern is used to manage connection pooling behavior

---

**7.** How does the MongoDB driver support **transactions**?

- A) The driver automatically handles transactions for all write operations
- B) Transactions are supported for replica set environments and can be manually implemented using `startSession()` and `withTransaction()`
- C) Transactions are only supported in sharded clusters, and no driver support is needed
- D) Transactions can only be performed using the `bulkWrite` method in the driver

---

**8.** Which command in the MongoDB driver would you use to **find all documents** in a collection?

- A) `db.collection.find()`
- B) `db.collection.findOne()`
- C) `db.collection.query()`
- D) `db.collection.findMany()`

---

**9.** When using the MongoDB Node.js driver, how would you correctly **update a single document**?

- A) `db.collection.updateOne({ _id: 1 }, { $set: { name: 'Alice' } })`
- B) `db.collection.updateOne({ _id: 1 }, { name: 'Alice' })`
- C) `db.collection.updateOne({ _id: 1 }, { $set: { name: 'Alice' } }, { upsert: true })`
- D) `db.collection.updateOne({ _id: 1 }, { name: 'Alice' }, { upsert: true })`

---

**10.** What is the purpose of the **retryWrites** option in the connection URI?

- A) To retry read operations that fail due to network issues
- B) To retry write operations that fail due to transient network errors
- C) To retry both read and write operations in the case of connection issues
- D) To retry the connection to the database if it fails

---

**11.** When should you use the **bulkWrite** method in the MongoDB driver?

- A) When you need to perform multiple operations (inserts, updates, deletes) efficiently in a single request
- B) When you are inserting a large number of documents into the database
- C) When you are deleting multiple documents based on a specific condition
- D) All of the above

---

**12.** Which of the following is the correct way to **delete multiple documents** in a collection using the MongoDB driver?

- A) `db.collection.deleteMany({ age: { $gt: 30 } })`
- B) `db.collection.remove({ age: { $gt: 30 } })`
- C) `db.collection.deleteDocuments({ age: { $gt: 30 } })`
- D) `db.collection.bulkDelete({ age: { $gt: 30 } })`

---

**13.** Which MongoDB driver method is used to create an **aggregation pipeline**?

- A) `aggregate()`
- B) `runPipeline()`
- C) `execPipeline()`
- D) `createPipeline()`

---

**14.** Which feature in MongoDB drivers allows applications to specify the level of **data replication** required before considering a write operation successful?

- A) Read Concern
- B) Write Concern
- C) Connection Pooling
- D) Sharding

---

**15.** What is **read concern** in the context of MongoDB drivers?

- A) It controls the isolation level for read operations
- B) It determines how many replicas are read from during read operations
- C) It defines the durability of read operations
- D) It determines the performance of read operations

---

**16.** How do you **start a transaction** using the MongoDB Node.js driver?

- A) By calling `db.collection.startTransaction()`
- B) By calling `db.startSession()` followed by `session.startTransaction()`
- C) By calling `db.startTransaction()`
- D) Transactions are automatically handled in all write operations

---

**17.** What is the **default write concern** when using MongoDB drivers?

- A) `w: 1` (acknowledged by a single node)
- B) `w: majority` (acknowledged by the majority of nodes)
- C) `w: 0` (unacknowledged write)
- D) `w: all` (acknowledged by all nodes)

---

**18.** In the MongoDB Node.js driver, what does the **MongoClient.connect()** method return?

- A) A promise that resolves to the database connection
- B) A cursor to iterate over documents
- C) An object containing all collections
- D) A function to start a transaction

---

**19.** When using **findOne()** in the MongoDB driver, what is the default behavior if no document matches the query?

- A) It returns `null`
- B) It throws an error
- C) It returns an empty object `{}`
- D) It returns an undefined result

---

**20.** What is the primary advantage of **using GridFS** in MongoDB drivers?

- A) It is used to store and retrieve large files, exceeding the 16MB document size limit
- B) It automatically indexes all files for efficient retrieval
- C) It allows binary data to be stored directly in the document
- D) It supports only structured file formats like JSON and CSV

---

### **Answer Key:**

**Data Modeling Section**

1. A) When related data is frequently accessed and modified together
2. C) Storing arrays that grow indefinitely
3. C) When the related data grows independently of the parent document
4. A) Embedding the "many" documents as an array inside the "one"

---

**Tools and Tooling Section**

1. B) MongoDB Atlas Data Explorer
2. C) It does not include indexes in the dump

---

**Drivers Section**

1. B) To allow an application to interact with MongoDB using MongoDB Query Language (MQL)
2. B) It allows multiple application connections to share a pool of database connections, reducing the overhead of creating new connections
3. D) All of the above
4. A) `db.collection.insertMany([{name: 'Alice'}, {name: 'Bob'}])`
5. B) Aggregation pipelines can be run in MongoDB drivers by using the `aggregate()` method
6. A) Write concern specifies the level of acknowledgement requested from MongoDB after a write operation
7. B) Transactions are supported for replica set environments and can be manually implemented using `startSession()` and `withTransaction()`
8. A) `db.collection.find()`
9. A) `db.collection.updateOne({ _id: 1 }, { $set: { name: 'Alice' } })`
10. B) To retry write operations that fail due to transient network errors
11. A) When you need to perform multiple operations (inserts, updates, deletes) efficiently in a single request
12. A) `db.collection.deleteMany({ age: { $gt: 30 } })`
13. A) `aggregate()`
14. B) Write Concern
15. A) It controls the isolation level for read operations
16. B) By calling `db.startSession()` followed by `session.startTransaction()`
17. A) `w: 1` (acknowledged by a single node)
18. A) A promise that resolves to the database connection
19. A) It returns `null`
20. A) It is used to store and retrieve large files, exceeding the 16MB document size limit

---

---

---

## **Section 1: MongoDB Overview and the Document Model (Deep Dive)**

_Expected number of questions: 4_  
_Deep dive number of questions: 8_

---

**1.** Which of the following describes how MongoDB organizes data internally?

- A) MongoDB stores data in rows and tables
- B) MongoDB stores data as collections of JSON-like documents
- C) MongoDB stores data in CSV format
- D) MongoDB uses XML to store its data

---

**2.** Which BSON data type would you use to store a **timestamp** in a MongoDB document?

- A) `String`
- B) `Date`
- C) `ObjectId`
- D) `Binary`

---

**3.** Which of the following data types is **not** supported by BSON?

- A) Double
- B) Decimal128
- C) Binary
- D) Blob

---

**4.** You have a collection where documents have the following structure: `{ "_id": 1, "name": "John", "age": 30, "address": { "city": "New York" } }`. Which of the following operations is **not** valid for MongoDB?

- A) Updating the `city` field in the `address` object
- B) Adding a new field to the document
- C) Deleting the entire document
- D) Storing a document larger than 16MB

---

**5.** Which of the following BSON types is **automatically created** by MongoDB when a document is inserted into a collection?

- A) `String`
- B) `ObjectId`
- C) `Array`
- D) `Int32`

---

**6.** In MongoDB, which of the following **allows documents with different structures** to be stored in the same collection?

- A) MongoDB is schema-less, so documents in the same collection can have different structures
- B) MongoDB automatically enforces a strict schema on all collections
- C) MongoDB requires documents to be identical within a collection
- D) MongoDB uses a relational model to store data

---

**7.** If a document in MongoDB is represented as JSON, which of the following correctly represents how MongoDB stores the document internally?

- A) BSON
- B) SQL
- C) XML
- D) CSV

---

**8.** Which of the following represents a limitation in MongoDB’s document model?

- A) Documents are limited to a maximum size of 16MB
- B) Documents cannot contain arrays
- C) Documents must have a `_id` field of type `String`
- D) MongoDB does not support nested documents

---

## **Section 2: CRUD Operations (Deep Dive)**

_Expected number of questions: 27_  
_Deep dive number of questions: 54_

---

**1.** Which command would you use to **insert a single document** into a MongoDB collection?

- A) `db.collection.insertOne( { name: "John", age: 30 } )`
- B) `db.collection.insert( { name: "John", age: 30 } )`
- C) `db.collection.insertSingle( { name: "John", age: 30 } )`
- D) `db.collection.createDocument( { name: "John", age: 30 } )`

---

**2.** Given the following document: `{ "_id": 1, "name": "Alice", "age": 25 }`, which of the following correctly updates the `age` field to 26?

- A) `db.collection.updateOne( { name: "Alice" }, { age: 26 } )`
- B) `db.collection.updateOne( { name: "Alice" }, { $set: { age: 26 } } )`
- C) `db.collection.replaceOne( { name: "Alice" }, { age: 26 } )`
- D) `db.collection.update( { name: "Alice" }, { age: 26 } )`

---

**3.** Which of the following **correctly deletes a document** where `name` is "Alice"?

- A) `db.collection.deleteOne( { name: "Alice" } )`
- B) `db.collection.removeOne( { name: "Alice" } )`
- C) `db.collection.remove( { name: "Alice" } )`
- D) `db.collection.deleteMany( { name: "Alice" } )`

---

**4.** When using the `find()` method, what is returned if no documents match the query?

- A) `null`
- B) An empty array `[]`
- C) An error is thrown
- D) The first document in the collection

---

**5.** Which of the following correctly demonstrates **updating multiple documents** where `status` is "active"?

- A) `db.collection.updateMany( { status: "active" }, { $set: { active: true } } )`
- B) `db.collection.updateOne( { status: "active" }, { $set: { active: true } } )`
- C) `db.collection.updateAll( { status: "active" }, { $set: { active: true } } )`
- D) `db.collection.replaceMany( { status: "active" }, { $set: { active: true } } )`

---

**6.** Which MongoDB method allows you to **replace an entire document** while keeping the same `_id`?

- A) `updateOne()`
- B) `replaceOne()`
- C) `updateMany()`
- D) `modifyOne()`

---

**7.** In MongoDB, what is the purpose of the `$set` operator in an update command?

- A) To remove a field from the document
- B) To set the value of a specific field in the document
- C) To overwrite the entire document
- D) To change the field type of the document

---

**8.** You want to insert a new document if it doesn’t exist, or update it if it already exists. Which of the following update options should you use?

- A) `upsert: true`
- B) `multi: true`
- C) `replace: true`
- D) `insertIfNotFound: true`

---

**9.** How do you **retrieve all documents** from a MongoDB collection where `status` is "active"?

- A) `db.collection.find( { status: "active" } )`
- B) `db.collection.query( { status: "active" } )`
- C) `db.collection.get( { status: "active" } )`
- D) `db.collection.findAll( { status: "active" } )`

---

**10.** Given an update scenario where `$inc` is used, what does `$inc` do in MongoDB?

- A) It replaces the current value of the field
- B) It increments the value of a field by a specified amount
- C) It decrements the value of a field by a specified amount
- D) It increments all the numeric fields in the document

---

**11.** What is the purpose of the `findOneAndUpdate()` method in MongoDB?

- A) It updates one document and then retrieves all documents in the collection
- B) It retrieves one document and then updates all matching documents
- C) It finds a single document and applies the update to that document
- D) It retrieves and updates all documents in the collection

---

**12.** Which MongoDB method allows you to **delete multiple documents** based on a query?

- A) `deleteMany()`
- B) `delete()`
- C) `removeAll()`
- D) `bulkDelete()`

---

**13.** How does MongoDB treat **null values** in a query?

- A) `null` values are not indexed and cannot be queried
- B) `null` values are treated as missing fields in queries
- C) `null` values can be queried using `{ field: null }`
- D) `null` values are ignored during queries

---

**14.** Which command in MongoDB would you use to **count the number of documents** in a collection matching a specific query?

- A) `db.collection.countDocuments( { status: "active" } )`
- B) `db.collection.count( { status: "active" } )`
- C) `db.collection.getCount( { status: "active" } )`
- D) `db.collection.totalDocuments( { status: "active" } )`

---

**15.** Which of the following aggregation stages is used to **filter documents** in the MongoDB aggregation pipeline?

- A) `$match`
- B) `$group`
- C) `$project`
- D) `$sort`

---

**16.** When using the `updateMany()` method in MongoDB, what will happen if no documents match the query?

- A) An error will be thrown
- B) No documents will be updated, and no error will occur
- C) The first document in the collection will be updated
- D) All documents in the collection will be updated

---

**17.** Which of the following MongoDB commands would you use to **sort the results of a query** by the `age` field in ascending order?

- A) `db.collection.find().sort( { age: 1 } )`
- B) `db.collection.find().orderBy( { age: 1 } )`
- C) `db.collection.query().sort( { age: 1 } )`
- D) `db.collection.sortBy( { age: 1 } )`

---

**18.** Which of the following **MongoDB query operators** would you use to find documents where a field is equal to one of several possible values?

- A) `$in`
- B) `$all`
- C) `$eq`
- D) `$or`

---

**19.** Which command allows you to **limit the number of documents** returned in a query?

- A) `db.collection.find().limit(10)`
- B) `db.collection.find().limitBy(10)`
- C) `db.collection.limit(10)`
- D) `db.collection.query().limit(10)`

---

**20.** You have a document where the field `categories` is an array: `{ "_id": 1, "categories": ["electronics", "appliances", "kitchen"] }`. Which query would you use to find all documents where `categories` contains "electronics"?

- A) `db.collection.find( { categories: "electronics" } )`
- B) `db.collection.find( { categories: { $in: ["electronics"] } } )`
- C) `db.collection.find( { categories: { $elemMatch: "electronics" } } )`
- D) `db.collection.find( { categories: { $contains: "electronics" } } )`

---

**21.** Which MongoDB query operator would you use to find documents where a specific array field contains **all** of the specified elements?

- A) `$in`
- B) `$elemMatch`
- C) `$all`
- D) `$and`

---

**22.** In MongoDB, the `$lookup` aggregation stage is used for:

- A) Joining data from multiple collections
- B) Counting documents in a collection
- C) Sorting documents by a specific field
- D) Filtering documents based on a condition

---

**23.** When performing a **delete operation**, which MongoDB command is used to remove **all documents** in a collection?

- A) `db.collection.deleteMany( {} )`
- B) `db.collection.deleteOne( {} )`
- C) `db.collection.remove( {} )`
- D) `db.collection.removeAll()`

---

**24.** Which MongoDB aggregation stage is used to **group documents** by a specific field?

- A) `$group`
- B) `$match`
- C) `$sort`
- D) `$count`

---

**25.** Which of the following **aggregation operators** is used to **sum values** in MongoDB?

- A) `$sum`
- B) `$total`
- C) `$aggregate`
- D) `$add`

---

**26.** Which method in MongoDB is used to **find and modify** a document in a single operation?

- A) `findOneAndUpdate()`
- B) `findOne()`
- C) `findAndReplace()`
- D) `findAndModify()`

---

**27.** In a **CRUD** operation, which MongoDB method returns a **cursor** to iterate through all matching documents in a collection?

- A) `find()`
- B) `findOne()`
- C) `findMany()`
- D) `findCursor()`

---

**28.** You have a collection of documents where the `hobbies` field is an array: `{ "_id": 1, "hobbies": ["reading", "sports"] }`. Which of the following queries returns documents where `hobbies` includes both "reading" and "sports"?

- A) `db.collection.find( { hobbies: { $all: ["reading", "sports"] } } )`
- B) `db.collection.find( { hobbies: { $elemMatch: "reading", "sports" } } )`
- C) `db.collection.find( { hobbies: { $in: ["reading", "sports"] } } )`
- D) `db.collection.find( { hobbies: ["reading", "sports"] } )`

---

**29.** Which of the following aggregation stages would you use to limit the number of documents that pass through the pipeline?

- A) `$limit`
- B) `$skip`
- C) `$project`
- D) `$sort`

---

**30.** Which MongoDB operator would you use to **update a nested field** inside a subdocument?

- A) `$set`
- B) `$push`
- C) `$addToSet`
- D) `$inc`

---

**31.** When using the `updateMany()` method, which of the following is **true** about the command’s behavior?

- A) It updates all documents that match the query
- B) It updates only the first matching document
- C) It throws an error if multiple documents are found
- D) It deletes all documents that match the query

---

**32.** What does the `$unset` operator do when used in a MongoDB update operation?

- A) It removes the specified field from the document
- B) It sets the value of a field to `null`
- C) It sets the value of a field to 0
- D) It updates all documents with missing fields

---

**33.** You need to **remove all documents** where `age` is less than 18. Which of the following commands is correct?

- A) `db.collection.deleteMany( { age: { $lt: 18 } } )`
- B) `db.collection.remove( { age: { $lt: 18 } } )`
- C) `db.collection.delete( { age: { $lt: 18 } } )`
- D) `db.collection.deleteAll( { age: { $lt: 18 } } )`

---

**34.** Which of the following methods returns only **one matching document** based on the query?

- A) `findOne()`
- B) `find()`
- C) `findMany()`
- D) `findAndUpdate()`

---

**35.** Which of the following operators would you use to **append a value** to an array field in a document?

- A) `$push`
- B) `$set`
- C) `$pop`
- D) `$addToSet`

---

**36.** Which command is used to retrieve **documents that match multiple conditions**?

- A) `$and`
- B) `$or`
- C) `$not`
- D) `$in`

---

**37.** Which operator can be used to **exclude a field** from the result set in a MongoDB query?

- A) `$project`
- B) `$exclude`
- C) `$unset`
- D) `$remove`

---

**38.** When performing a query on a field that contains an array, which operator checks if **at least one element** of the array matches the specified condition?

- A) `$elemMatch`
- B) `$all`
- C) `$in`
- D) `$match`

---

**39.** In MongoDB, which of the following methods allows you to retrieve **distinct values** for a field across all documents in a collection?

- A) `distinct()`
- B) `findDistinct()`
- C) `unique()`
- D) `findOne()`

---

**40.** Which operator would you use to **check if a field exists** in a MongoDB document?

- A) `$exists`
- B) `$in`
- C) `$has`
- D) `$type`

---

---

### **Answer Key:**

---

### **Section 1: MongoDB Overview and the Document Model**

1. B) MongoDB stores data as collections of JSON-like documents
2. B) `Date`
3. D) Blob
4. D) Storing a document larger than 16MB
5. B) `ObjectId`
6. A) MongoDB is schema-less, so documents in the same collection can have different structures
7. A) BSON
8. A) Documents are limited to a maximum size of 16MB

---

### **Section 2: CRUD Operations Answer Key**

1. A) `db.collection.insertOne( { name: "John", age: 30 } )`
2. B) `db.collection.updateOne( { name: "Alice" }, { $set: { age: 26 } } )`
3. A) `db.collection.deleteOne( { name: "Alice" } )`
4. B) An empty array `[]`
5. A) `db.collection.updateMany( { status: "active" }, { $set: { active: true } } )`
6. B) `replaceOne()`
7. B) To set the value of a specific field in the document
8. A) `upsert: true`
9. A) `db.collection.find( { status: "active" } )`
10. B) It increments the value of a field by a specified amount
11. C) It finds a single document and applies the update to that document
12. A) `deleteMany()`
13. C) `null` values can be queried using `{ field: null }`
14. A) `db.collection.countDocuments( { status: "active" } )`
15. A) `$match`
16. B) No documents will be updated, and no error will occur
17. A) `db.collection.find().sort( { age: 1 } )`
18. A) `$in`
19. A) `db.collection.find().limit(10)`
20. A) `db.collection.find( { categories: "electronics" } )`
21. C) `$all`
22. A) Joining data from multiple collections
23. A) `db.collection.deleteMany( {} )`
24. A) `$group`
25. A) `$sum`
26. D) `findAndModify()`
27. A) `find()`
28. A) `db.collection.find( { hobbies: { $all: ["reading", "sports"] } } )`
29. A) `$limit`
30. A) `$set`
31. A) It updates all documents that match the query
32. A) It removes the specified field from the document
33. A) `db.collection.deleteMany( { age: { $lt: 18 } } )`
34. A) `findOne()`
35. A) `$push`
36. A) `$and`
37. A) `$project`
38. A) `$elemMatch`
39. A) `distinct()`
40. A) `$exists`

---

---

---

## **Section 3: Indexes (Deep Dive)**

_Expected number of questions: 9_  
_Deep dive number of questions: 18_

---

**1.** What is the primary purpose of an **index** in MongoDB?

- A) To enforce data integrity in documents
- B) To optimize and speed up query operations
- C) To ensure all documents are stored in the same order
- D) To automatically update fields in related collections

---

**2.** Which of the following **index types** would you use to support text searches across a collection?

- A) Single-field index
- B) Multi-key index
- C) Compound index
- D) Text index

---

**3.** In MongoDB, what does the **`nscanned`** value in the `explain()` output represent?

- A) The number of documents returned by the query
- B) The number of documents scanned by MongoDB to fulfill the query
- C) The number of indexes used to run the query
- D) The total size of documents in the collection

---

**4.** You want to create an index on an array field `tags`, where each document has an array of multiple tags. Which index type is most suitable for this scenario?

- A) Single-field index
- B) Multi-key index
- C) Compound index
- D) Text index

---

**5.** What is the **trade-off** of using **many indexes** in a MongoDB collection?

- A) It reduces the query execution time and improves write performance
- B) It increases query execution speed but reduces write performance
- C) It improves both read and write performance
- D) It has no impact on performance

---

**6.** Which of the following is a correct description of a **compound index**?

- A) An index on a single field in the document
- B) An index that applies to all the fields in a collection
- C) An index that is applied to multiple fields in the same document
- D) An index that optimizes multi-threaded database operations

---

**7.** What happens when you attempt to create an index on a field that does not exist in any of the documents in a MongoDB collection?

- A) The index will fail to be created
- B) The index will be created, but it will not be used in queries
- C) The index will be created, but it will not store any entries for that field
- D) MongoDB will create the field in all documents

---

**8.** Which index type allows MongoDB to store **geospatial data** and run geospatial queries?

- A) 2d index
- B) Single-field index
- C) Compound index
- D) 2dsphere index

---

**9.** You have a compound index on `{ category: 1, price: -1 }`. Which of the following queries will **use this index**?

- A) `db.collection.find( { price: { $gt: 100 } } )`
- B) `db.collection.find( { category: "electronics", price: { $gt: 100 } } )`
- C) `db.collection.find( { category: "electronics" } ).sort( { price: 1 } )`
- D) `db.collection.find( { price: { $gt: 100 }, category: "electronics" } )`

---

**10.** What is the purpose of the **`hint()`** method in MongoDB queries?

- A) It forces MongoDB to use a specific index for the query
- B) It optimizes a query based on the last-used index
- C) It provides query suggestions to MongoDB based on previous queries
- D) It analyzes query performance and suggests indexes

---

**11.** In MongoDB, how can you determine whether a **query is using an index**?

- A) By analyzing the output of the `count()` method
- B) By using the `explain()` method to see the query plan
- C) By running the `distinct()` method
- D) By using the `aggregate()` pipeline

---

**12.** Which of the following is a **limitation** of using **multi-key indexes** in MongoDB?

- A) A multi-key index cannot be used on fields with large values
- B) MongoDB cannot create a multi-key index on fields with large arrays
- C) A compound index cannot have more than one multi-key indexed field
- D) Multi-key indexes cannot be combined with text indexes in a collection

---

**13.** When running a query, you realize that MongoDB is performing a **collection scan** instead of using an index. What might be the reason?

- A) The index was created with a wrong field order
- B) The query conditions are not covered by any existing index
- C) The index is stored in the wrong database
- D) MongoDB does not support indexes on that collection

---

**14.** Which of the following **commands** will provide information about the **indexes** on a MongoDB collection?

- A) `db.collection.getIndexes()`
- B) `db.collection.indexInfo()`
- C) `db.collection.listIndexes()`
- D) `db.collection.showIndexes()`

---

**15.** What is the primary function of a **sparse index** in MongoDB?

- A) To index only documents where the indexed field exists
- B) To index all documents in a collection
- C) To index fields with null values
- D) To index all documents in descending order

---

**16.** You have a collection where each document contains an array of `tags`. Which of the following queries **benefits the most** from an index on the `tags` field?

- A) `db.collection.find( { tags: "electronics" } )`
- B) `db.collection.find( { tags: { $size: 3 } } )`
- C) `db.collection.find( { tags: { $exists: true } } )`
- D) `db.collection.find( { tags: ["electronics", "appliances"] } )`

---

**17.** Which of the following best describes **index intersection** in MongoDB?

- A) Using a single index to satisfy a query
- B) Using multiple indexes to satisfy different parts of a query
- C) Using the same index for both read and write operations
- D) Using an index to combine multiple fields in a document

---

**18.** When would it be **necessary to drop an index** from a collection in MongoDB?

- A) When the index is no longer needed or used by queries
- B) When the index size is larger than the entire collection
- C) When the index has caused data corruption
- D) When the index has not been used for over a month

---

### **Answer Key:**

1. B) To optimize and speed up query operations
2. D) Text index
3. B) The number of documents scanned by MongoDB to fulfill the query
4. B) Multi-key index
5. B) It increases query execution speed but reduces write performance
6. C) An index that is applied to multiple fields in the same document
7. C) The index will be created, but it will not store any entries for that field
8. D) 2dsphere index
9. B) `db.collection.find( { category: "electronics", price: { $gt: 100 } } )`
10. A) It forces MongoDB to use a specific index for the query
11. B) By using the `explain()` method to see the query plan
12. C) A compound index cannot have more than one multi-key indexed field
13. B) The query conditions are not covered by any existing index
14. C) `db.collection.listIndexes()`
15. A) To index only documents where the indexed field exists
16. A) `db.collection.find( { tags: "electronics" } )`
17. B) Using multiple indexes to satisfy different parts of a query
18. A) When the index is no longer needed or used by queries

---

---

---

## **Section 1: MongoDB Overview and the Document Model (Deep Dive - Part 2)**

_Expected number of questions: 4_  
_Deep dive number of questions: 8_

---

**1.** In MongoDB, which of the following best describes the **document model**?

- A) It organizes data into rows and columns, similar to a relational database
- B) It stores data as JSON-like documents that can have varying structures
- C) It uses a tabular format for storing key-value pairs
- D) It relies on fixed schemas for data organization

---

**2.** Which of the following statements about **BSON** is true?

- A) BSON is an XML-based format for storing documents
- B) BSON supports more data types than JSON, such as `Date` and `Binary`
- C) BSON is only used for transmitting data between MongoDB and a client
- D) BSON stores documents as plain text

---

**3.** Which of the following BSON types is used for storing **binary data** in MongoDB, such as images or files?

- A) `ObjectId`
- B) `Binary`
- C) `Double`
- D) `Decimal128`

---

**4.** What is the **default BSON type** for the `_id` field in MongoDB if no `_id` field is provided during document insertion?

- A) `String`
- B) `UUID`
- C) `ObjectId`
- D) `Int32`

---

**5.** How does the **schema-less nature** of MongoDB affect the way data is stored in collections?

- A) All documents in a collection must have the same structure
- B) Different documents within the same collection can have different fields and structures
- C) Documents are required to follow a predefined schema
- D) MongoDB automatically enforces a schema on all collections

---

**6.** Which of the following is an **advantage** of the document model used by MongoDB?

- A) It forces documents to adhere to a strict relational schema
- B) It supports flexible and hierarchical data structures, allowing nested documents
- C) It organizes data into tables for easy joining
- D) It is optimized only for structured data, such as financial records

---

**7.** In MongoDB, **documents** can store which of the following types of data?

- A) Only string and integer values
- B) Structured and unstructured data, including arrays and embedded documents
- C) Only data that fits predefined fields
- D) Only structured data with strict typing

---

**8.** MongoDB’s **document model** is particularly suited for use cases involving:

- A) Complex relational data that requires frequent joins
- B) Applications that need flexibility in data structure and frequent schema changes
- C) Fixed schemas where data types do not change over time
- D) Scenarios where only structured data, like addresses, is stored

---

### **Answer Key:**

1. B) It stores data as JSON-like documents that can have varying structures
2. B) BSON supports more data types than JSON, such as `Date` and `Binary`
3. B) `Binary`
4. C) `ObjectId`
5. B) Different documents within the same collection can have different fields and structures
6. B) It supports flexible and hierarchical data structures, allowing nested documents
7. B) Structured and unstructured data, including arrays and embedded documents
8. B) Applications that need flexibility in data structure and frequent schema changes

---

---

---

## **Section 2: CRUD Operations (Deep Dive - Part 2)**

_Expected number of questions: 27_  
_Deep dive number of questions: 54_

---

**1.** When inserting a document using `insertOne()`, what happens if you do not provide an `_id` field?

- A) The document will fail to insert
- B) MongoDB will generate a new `ObjectId` for the `_id` field
- C) MongoDB will insert the document without an `_id`
- D) The `insertOne()` operation will throw an error

---

**2.** Which of the following update operations will **replace** the entire document, keeping only the `_id` field intact?

- A) `db.collection.replaceOne( { _id: 1 }, { name: "Alice", age: 25 } )`
- B) `db.collection.updateOne( { _id: 1 }, { name: "Alice", age: 25 } )`
- C) `db.collection.updateOne( { _id: 1 }, { $set: { name: "Alice", age: 25 } } )`
- D) `db.collection.findAndReplace( { _id: 1 }, { name: "Alice", age: 25 } )`

---

**3.** In which of the following cases would you use the **`$push` operator** in an update operation?

- A) To increment a numeric field by a given value
- B) To remove an element from an array
- C) To append an element to an array field
- D) To replace an existing field with a new array

---

**4.** Which MongoDB method would you use to retrieve **the first document** in a collection that matches a query?

- A) `findOne()`
- B) `find()`
- C) `findMany()`
- D) `findFirst()`

---

**5.** What does the `findOneAndDelete()` method return when no matching document is found?

- A) An error
- B) `null`
- C) An empty array
- D) The deleted document

---

**6.** Which MongoDB query operator is used to select documents where a field is greater than a specified value?

- A) `$gte`
- B) `$gt`
- C) `$lt`
- D) `$eq`

---

**7.** You want to update **multiple fields** in a document at once. Which update operator should you use?

- A) `$set`
- B) `$push`
- C) `$pull`
- D) `$unset`

---

**8.** What happens if you attempt to delete a document using `deleteOne()` but no document matches the query?

- A) An error is thrown
- B) MongoDB will still return a success message, but no document is deleted
- C) MongoDB will delete all documents in the collection
- D) MongoDB will insert a new document

---

**9.** Which query would you use to find documents where the **name** field starts with the letter "A"?

- A) `db.collection.find( { name: { $regex: "^A" } } )`
- B) `db.collection.find( { name: { $startsWith: "A" } } )`
- C) `db.collection.find( { name: { $begins: "A" } } )`
- D) `db.collection.find( { name: { $eq: "A%" } } )`

---

**10.** Which MongoDB operator is used to **remove a field** from a document?

- A) `$unset`
- B) `$set`
- C) `$pull`
- D) `$push`

---

**11.** You want to **increment** the `views` field in a document by 1 each time it is accessed. Which update operator should you use?

- A) `$inc`
- B) `$set`
- C) `$mul`
- D) `$add`

---

**12.** In which scenario would you use the **`findOneAndUpdate()`** method?

- A) To update one document and retrieve it in a single operation
- B) To update all matching documents and retrieve the first one
- C) To find and delete a single document
- D) To find and update multiple documents at once

---

**13.** Which MongoDB update operator would you use to **remove the first element** from an array?

- A) `$pop`
- B) `$pull`
- C) `$push`
- D) `$set`

---

**14.** How does the **`$exists`** operator work in MongoDB queries?

- A) It checks if a field has a specific value
- B) It checks if a field exists or not in a document
- C) It ensures the field contains only unique values
- D) It validates the type of a field

---

**15.** What does the **`upsert: true`** option do in an `updateOne()` or `updateMany()` operation?

- A) It only updates existing documents
- B) It creates a new document if no matching document is found
- C) It throws an error if the document does not exist
- D) It updates all documents that match the query

---

**16.** You have a document where the `tags` field is an array. Which query would you use to retrieve all documents where `tags` contains both "tech" and "science"?

- A) `db.collection.find( { tags: { $all: ["tech", "science"] } } )`
- B) `db.collection.find( { tags: { $elemMatch: ["tech", "science"] } } )`
- C) `db.collection.find( { tags: { $in: ["tech", "science"] } } )`
- D) `db.collection.find( { tags: ["tech", "science"] } )`

---

**17.** When using the `find()` method, how can you **limit** the number of results returned by the query?

- A) `db.collection.find().limit(10)`
- B) `db.collection.find().maxResults(10)`
- C) `db.collection.find().count(10)`
- D) `db.collection.find().restrict(10)`

---

**18.** Which MongoDB method would you use to **retrieve a specific document** by its `_id` field?

- A) `findOne()`
- B) `find()`
- C) `getById()`
- D) `findById()`

---

**19.** Which of the following commands will correctly update a **nested field** in a MongoDB document?

- A) `db.collection.updateOne( { _id: 1 }, { $set: { "address.city": "New York" } } )`
- B) `db.collection.updateOne( { _id: 1 }, { $set: { address.city: "New York" } } )`
- C) `db.collection.updateOne( { _id: 1 }, { address: { $set: { city: "New York" } } } )`
- D) `db.collection.updateOne( { _id: 1 }, { "address.city": { $set: "New York" } } )`

---

**20.** How can you ensure that **multiple documents** in a collection are deleted based on a condition?

- A) Use the `deleteMany()` method
- B) Use the `delete()` method with a condition
- C) Use the `deleteOne()` method repeatedly
- D) Use the `findAndDelete()` method

---

**21.** What is the primary difference between the `find()` and `findOne()` methods in MongoDB?

- A) `find()` returns a cursor, while `findOne()` returns a single document
- B) `find()` can only retrieve one document at a time, while `findOne()` retrieves all matching documents
- C) `find()` returns an array, while `findOne()` returns a string
- D) `find()` is used for updates, while `findOne()` is for reads

---

**22.** When should you use the **`bulkWrite()`** method in MongoDB?

- A) When performing multiple insert, update, or delete operations in a single request
- B) When retrieving multiple documents at once
- C) When you want to perform a single, atomic operation on a document
- D) When performing aggregation queries across multiple collections

---

**23.** What does the **`$pull` operator** do in a MongoDB update operation?

- A) It removes all instances of a value from an array
- B) It appends a value to an array
- C) It replaces the array with a new value
- D) It sets the value of an array field to `null`

---

**24.** How do you **sort the results** of a query by the `price` field in descending order?

- A) `db.collection.find().sort( { price: -1 } )`
- B) `db.collection.find().orderBy( { price: -1 } )`
- C) `db.collection.find().order( { price: -1 } )`
- D) `db.collection.find().sortBy( { price: -1 } )`

---

**25.** Which MongoDB operator is used to check whether a field is **not equal** to a specific value?

- A) `$eq`
- B) `$ne`
- C) `$gt`
- D) `$exists`

---

**26.** What does the **`$addToSet`** operator do in a MongoDB update operation?

- A) It adds an element to an array if it doesn’t already exist in the array
- B) It appends an element to an array, even if it already exists
- C) It removes an element from an array
- D) It replaces the array with the new value

---

**27.** How do you count the number of documents that match a specific query in MongoDB?

- A) `db.collection.countDocuments( { status: "active" } )`
- B) `db.collection.countAll( { status: "active" } )`
- C) `db.collection.totalDocuments( { status: "active" } )`
- D) `db.collection.getCount( { status: "active" } )`

---

**28.** You want to find all documents where the `age` field is either 25, 30, or 35. Which operator would you use?

- A) `$or`
- B) `$eq`
- C) `$in`
- D) `$all`

---

**29.** Which operator would you use to **remove** the last element from an array in a document?

- A) `$pop` with `-1`
- B) `$pop` with `1`
- C) `$pull`
- D) `$push` with `-1`

---

**30.** How do you **skip** a specific number of documents in a query result set?

- A) `db.collection.find().skip(5)`
- B) `db.collection.find().omit(5)`
- C) `db.collection.find().ignore(5)`
- D) `db.collection.find().startAt(5)`

---

**31.** What happens if you perform an `updateOne()` operation using `$set` on a field that doesn’t exist in the document?

- A) MongoDB throws an error
- B) MongoDB will create the field and set the value
- C) MongoDB will ignore the field
- D) The document will be deleted

---

**32.** Which of the following is true about **write operations** in MongoDB?

- A) Write operations are always atomic on the entire collection
- B) Write operations are atomic at the level of a single document
- C) Write operations cannot modify multiple fields at once
- D) Write operations require explicit transaction management for all collections

---

**33.** Which operator is used to **retrieve documents** where the field matches any value from an array?

- A) `$in`
- B) `$all`
- C) `$eq`
- D) `$or`

---

**34.** How do you perform a **case-insensitive query** on a string field in MongoDB?

- A) Use a regular expression with the `i` option, like `{$regex: "^abc", $options: "i"}`
- B) Use the `$insensitive` operator
- C) Use the `$toLowerCase` operator in a query
- D) MongoDB does not support case-insensitive queries

---

**35.** How do you **delete all documents** in a collection without dropping the collection itself?

- A) `db.collection.deleteMany( {} )`
- B) `db.collection.deleteOne( {} )`
- C) `db.collection.removeAll()`
- D) `db.collection.drop()`

---

**36.** What does the **`$elemMatch`** operator do in MongoDB queries?

- A) It matches an array element that satisfies all specified criteria
- B) It removes elements from an array that match the criteria
- C) It adds an element to an array if it matches the criteria
- D) It matches all elements in an array

---

**37.** Which query method should you use to **find distinct values** for a field in a MongoDB collection?

- A) `distinct()`
- B) `findDistinct()`
- C) `unique()`
- D) `findOne()`

---

**38.** What is the purpose of the **`$rename`** operator in MongoDB update operations?

- A) To rename a field in a document
- B) To move a field to a different collection
- C) To change the type of a field
- D) To change the value of a field

---

**39.** How do you specify a **limit** and **skip** when paginating query results in MongoDB?

- A) `db.collection.find().limit(10).skip(10)`
- B) `db.collection.find().skip(10).limit(10)`
- C) `db.collection.paginate(10, 10)`
- D) `db.collection.query().limitSkip(10, 10)`

---

**40.** Which operator is used to **multiply the value of a field** by a specified number?

- A) `$mul`
- B) `$inc`
- C) `$set`
- D) `$mod`

---

**41.** What is the **default behavior** of `updateOne()` if the document does not exist?

- A) MongoDB throws an error
- B) The operation fails silently
- C) No document is updated, and no new document is created
- D) The document is created if `upsert: true` is specified

---

**42.** How do you retrieve documents where the **age** field is either less than 25 or greater than 40?

- A) `db.collection.find( { $or: [ { age: { $lt: 25 } }, { age: { $gt: 40 } } ] } )`
- B) `db.collection.find( { age: { $or: [ { $lt: 25 }, { $gt: 40 } ] } } )`
- C) `db.collection.find( { age: { $in: [ 25, 40 ] } } )`
- D) `db.collection.find( { age: { $or: [ { $eq: 25 }, { $eq: 40 } ] } } )`

---

**43.** Which MongoDB query operator can be used to check if a field's value belongs to a **specific set of values**?

- A) `$in`
- B) `$gt`
- C) `$ne`
- D) `$lt`

---

**44.** How can you update **only documents** that meet specific criteria in MongoDB?

- A) Use `updateMany()` with the criteria
- B) Use `updateOne()` repeatedly
- C) Use `replaceOne()` with no criteria
- D) Use `findOneAndUpdate()` without specifying a query

---

**45.** Which MongoDB method allows you to **replace an existing document** entirely with a new document?

- A) `replaceOne()`
- B) `updateOne()`
- C) `findAndReplace()`
- D) `findOneAndReplace()`

---

---

### **Answer Key:**

1. B) MongoDB will generate a new `ObjectId` for the `_id` field
2. A) `db.collection.replaceOne( { _id: 1 }, { name: "Alice", age: 25 } )`
3. C) To append an element to an array field
4. A) `findOne()`
5. B) `null`
6. B) `$gt`
7. A) `$set`
8. B) MongoDB will still return a success message, but no document is deleted
9. A) `db.collection.find( { name: { $regex: "^A" } } )`
10. A) `$unset`
11. A) `$inc`
12. A) To update one document and retrieve it in a single operation
13. A) `$pop`
14. B) It checks if a field exists or not in a document
15. B) It creates a new document if no matching document is found
16. A) `db.collection.find( { tags: { $all: ["tech", "science"] } } )`
17. A) `db.collection.find().limit(10)`
18. A) `findOne()`
19. A) `db.collection.updateOne( { _id: 1 }, { $set: { "address.city": "New York" } } )`
20. A) Use the `deleteMany()` method
21. A) `find()` returns a cursor, while `findOne()` returns a single document
22. A) When performing multiple insert, update, or delete operations in a single request
23. A) It removes all instances of a value from an array
24. A) `db.collection.find().sort( { price: -1 } )`
25. B) `$ne`
26. A) It adds an element to an array if it doesn’t already exist in the array
27. A) `db.collection.countDocuments( { status: "active" } )`
28. C) `$in`
29. B) `$pop` with `1`
30. A) `db.collection.find().skip(5)`
31. B) MongoDB will create the field and set the value
32. B) Write operations are atomic at the level of a single document
33. A) `$in`
34. A) Use a regular expression with the `i` option, like `{$regex: "^abc", $options: "i"}`
35. A) `db.collection.deleteMany( {} )`
36. A) It matches an array element that satisfies all specified criteria
37. A) `distinct()`
38. A) To rename a field in a document
39. A) `db.collection.find().limit(10).skip(10)`
40. A) `$mul`
41. D) The document is created if `upsert: true` is specified
42. A) `db.collection.find( { $or: [ { age: { $lt: 25 } }, { age: { $gt: 40 } } ] } )`
43. A) `$in`
44. A) Use `updateMany()` with the criteria
45. A) `replaceOne()`

---

---

---

