# Mock Exam 1

---

## **Part 1: MongoDB Overview and the Document Model (8 Questions)**

---

**1.** In MongoDB, which of the following best describes the **document model**?

- A) It organizes data into rows and columns, similar to a relational database
- B) It stores data as JSON-like documents that can have varying structures
- C) It uses a tabular format for storing key-value pairs
- D) It relies on fixed schemas for data organization

**2.** Which of the following statements about **BSON** is true?

- A) BSON is an XML-based format for storing documents
- B) BSON supports more data types than JSON, such as `Date` and `Binary`
- C) BSON is only used for transmitting data between MongoDB and a client
- D) BSON stores documents as plain text

**3.** Which of the following BSON types is used for storing **binary data** in MongoDB, such as images or files?

- A) `ObjectId`
- B) `Binary`
- C) `Double`
- D) `Decimal128`

**4.** What is the **default BSON type** for the `_id` field in MongoDB if no `_id` field is provided during document insertion?

- A) `String`
- B) `UUID`
- C) `ObjectId`
- D) `Int32`

**5.** How does the **schema-less nature** of MongoDB affect the way data is stored in collections?

- A) All documents in a collection must have the same structure
- B) Different documents within the same collection can have different fields and structures
- C) Documents are required to follow a predefined schema
- D) MongoDB automatically enforces a schema on all collections

**6.** Which of the following is an **advantage** of the document model used by MongoDB?

- A) It forces documents to adhere to a strict relational schema
- B) It supports flexible and hierarchical data structures, allowing nested documents
- C) It organizes data into tables for easy joining
- D) It is optimized only for structured data, such as financial records

**7.** In MongoDB, **documents** can store which of the following types of data?

- A) Only string and integer values
- B) Structured and unstructured data, including arrays and embedded documents
- C) Only data that fits predefined fields
- D) Only structured data with strict typing

**8.** MongoDB’s **document model** is particularly suited for use cases involving:

- A) Complex relational data that requires frequent joins
- B) Applications that need flexibility in data structure and frequent schema changes
- C) Fixed schemas where data types do not change over time
- D) Scenarios where only structured data, like addresses, is stored

---

## **Part 1: Data Modeling (4 Questions)**

---

**1.** Which of the following scenarios is most appropriate for using **embedded documents** in your data model?

- A) When related data is frequently accessed and modified together
- B) When data is rarely queried or updated
- C) When the document size is expected to exceed the 16MB BSON size limit
- D) When the related data has a 1:many relationship and the “many” part grows indefinitely

**2.** Which of the following is considered an **anti-pattern** in MongoDB data modeling?

- A) Embedding subdocuments that are frequently accessed
- B) Using references for large datasets that need to be independently queried
- C) Storing arrays that grow indefinitely
- D) Denormalizing data for faster reads

**3.** When should you use **reference** relationships between collections instead of embedding?

- A) When the data is frequently accessed together
- B) When data size is small and retrieval speed is prioritized
- C) When the related data grows independently of the parent document
- D) When the related data is frequently updated together with the parent

**4.** Which of the following represents an **effective schema design** for **one-to-many relationships** where each "many" record is small and frequently accessed with the "one"?

- A) Embedding the "many" documents as an array inside the "one"
- B) Storing the "many" documents in a separate collection with references
- C) Embedding a few of the "many" documents and referencing the rest
- D) Creating an index on the "\_id" field of the "many" documents

---

---

## **Part 1: MongoDB Overview and the Document Model (Answer Key)**

**1.** B) It stores data as JSON-like documents that can have varying structures  
**2.** B) BSON supports more data types than JSON, such as `Date` and `Binary`  
**3.** B) `Binary`  
**4.** C) `ObjectId`  
**5.** B) Different documents within the same collection can have different fields and structures  
**6.** B) It supports flexible and hierarchical data structures, allowing nested documents  
**7.** B) Structured and unstructured data, including arrays and embedded documents  
**8.** B) Applications that need flexibility in data structure and frequent schema changes

---

## **Part 1: Data Modeling (Answer Key)**

**1.** A) When related data is frequently accessed and modified together  
**2.** C) Storing arrays that grow indefinitely  
**3.** C) When the related data grows independently of the parent document  
**4.** A) Embedding the "many" documents as an array inside the "one"

---

---

---

### End of Part 1

---

## **Part 2: CRUD Operations (Basic) - 18 Questions**

---

**1.** When inserting a document using `insertOne()`, what happens if you do not provide an `_id` field?

- A) The document will fail to insert
- B) MongoDB will generate a new `ObjectId` for the `_id` field
- C) MongoDB will insert the document without an `_id`
- D) The `insertOne()` operation will throw an error

**2.** Which of the following update operations will **replace** the entire document, keeping only the `_id` field intact?

- A) `db.collection.replaceOne( { _id: 1 }, { name: "Alice", age: 25 } )`
- B) `db.collection.updateOne( { _id: 1 }, { name: "Alice", age: 25 } )`
- C) `db.collection.updateOne( { _id: 1 }, { $set: { name: "Alice", age: 25 } } )`
- D) `db.collection.findAndReplace( { _id: 1 }, { name: "Alice", age: 25 } )`

**3.** In which of the following cases would you use the **`$push` operator** in an update operation?

- A) To increment a numeric field by a given value
- B) To remove an element from an array
- C) To append an element to an array field
- D) To replace an existing field with a new array

**4.** Which MongoDB method would you use to retrieve **the first document** in a collection that matches a query?

- A) `findOne()`
- B) `find()`
- C) `findMany()`
- D) `findFirst()`

**5.** What does the `findOneAndDelete()` method return when no matching document is found?

- A) An error
- B) `null`
- C) An empty array
- D) The deleted document

**6.** Which MongoDB query operator is used to select documents where a field is greater than a specified value?

- A) `$gte`
- B) `$gt`
- C) `$lt`
- D) `$eq`

**7.** You want to update **multiple fields** in a document at once. Which update operator should you use?

- A) `$set`
- B) `$push`
- C) `$pull`
- D) `$unset`

**8.** What happens if you attempt to delete a document using `deleteOne()` but no document matches the query?

- A) An error is thrown
- B) MongoDB will still return a success message, but no document is deleted
- C) MongoDB will delete all documents in the collection
- D) MongoDB will insert a new document

**9.** Which query would you use to find documents where the **name** field starts with the letter "A"?

- A) `db.collection.find( { name: { $regex: "^A" } } )`
- B) `db.collection.find( { name: { $startsWith: "A" } } )`
- C) `db.collection.find( { name: { $begins: "A" } } )`
- D) `db.collection.find( { name: { $eq: "A%" } } )`

**10.** Which MongoDB operator is used to **remove a field** from a document?

- A) `$unset`
- B) `$set`
- C) `$pull`
- D) `$push`

**11.** You want to **increment** the `views` field in a document by 1 each time it is accessed. Which update operator should you use?

- A) `$inc`
- B) `$set`
- C) `$mul`
- D) `$add`

**12.** In which scenario would you use the **`findOneAndUpdate()`** method?

- A) To update one document and retrieve it in a single operation
- B) To update all matching documents and retrieve the first one
- C) To find and delete a single document
- D) To find and update multiple documents at once

**13.** Which MongoDB update operator would you use to **remove the first element** from an array?

- A) `$pop`
- B) `$pull`
- C) `$push`
- D) `$set`

**14.** How does the **`$exists`** operator work in MongoDB queries?

- A) It checks if a field has a specific value
- B) It checks if a field exists or not in a document
- C) It ensures the field contains only unique values
- D) It validates the type of a field

**15.** What does the **`upsert: true`** option do in an `updateOne()` or `updateMany()` operation?

- A) It only updates existing documents
- B) It creates a new document if no matching document is found
- C) It throws an error if the document does not exist
- D) It updates all documents that match the query

**16.** You have a document where the `tags` field is an array. Which query would you use to retrieve all documents where `tags` contains both "tech" and "science"?

- A) `db.collection.find( { tags: { $all: ["tech", "science"] } } )`
- B) `db.collection.find( { tags: { $elemMatch: ["tech", "science"] } } )`
- C) `db.collection.find( { tags: { $in: ["tech", "science"] } } )`
- D) `db.collection.find( { tags: ["tech", "science"] } )`

**17.** When using the `find()` method, how can you **limit** the number of results returned by the query?

- A) `db.collection.find().limit(10)`
- B) `db.collection.find().maxResults(10)`
- C) `db.collection.find().count(10)`
- D) `db.collection.find().restrict(10)`

**18.** Which MongoDB method would you use to **retrieve a specific document** by its `_id` field?

- A) `findOne()`
- B) `find()`
- C) `getById()`
- D) `findById()`

---

---

## **Part 2: CRUD Operations (Basic) - Answer Key**

**1.** B) MongoDB will generate a new `ObjectId` for the `_id` field  
**2.** A) `db.collection.replaceOne( { _id: 1 }, { name: "Alice", age: 25 } )`  
**3.** C) To append an element to an array field  
**4.** A) `findOne()`  
**5.** B) `null`  
**6.** B) `$gt`  
**7.** A) `$set`  
**8.** B) MongoDB will still return a success message, but no document is deleted  
**9.** A) `db.collection.find( { name: { $regex: "^A" } } )`  
**10.** A) `$unset`  
**11.** A) `$inc`  
**12.** A) To update one document and retrieve it in a single operation  
**13.** A) `$pop`  
**14.** B) It checks if a field exists or not in a document  
**15.** B) It creates a new document if no matching document is found  
**16.** A) `db.collection.find( { tags: { $all: ["tech", "science"] } } )`  
**17.** A) `db.collection.find().limit(10)`  
**18.** A) `findOne()`

---

---

---

### End of Part 2

---

## **Part 3: CRUD Operations (Advanced) - 18 Questions**

---

**1.** Which MongoDB update operator would you use to **increment** the value of a field by a specified amount?

- A) `$set`
- B) `$inc`
- C) `$mul`
- D) `$push`

**2.** When using the `updateMany()` method in MongoDB, what happens if no documents match the query?

- A) MongoDB throws an error
- B) No documents will be updated, and no error will occur
- C) The first document in the collection will be updated
- D) MongoDB will create a new document

**3.** You have a document where the `hobbies` field is an array: `{ "_id": 1, "hobbies": ["reading", "sports"] }`. Which of the following queries returns documents where `hobbies` includes both "reading" and "sports"?

- A) `db.collection.find( { hobbies: { $all: ["reading", "sports"] } } )`
- B) `db.collection.find( { hobbies: { $elemMatch: ["reading", "sports"] } } )`
- C) `db.collection.find( { hobbies: { $in: ["reading", "sports"] } } )`
- D) `db.collection.find( { hobbies: ["reading", "sports"] } )`

**4.** Which MongoDB method allows you to **find and modify** a document in a single operation?

- A) `findOneAndUpdate()`
- B) `find()`
- C) `findAndModify()`
- D) `updateOne()`

**5.** How do you **sort the results** of a query by the `age` field in descending order?

- A) `db.collection.find().sort( { age: -1 } )`
- B) `db.collection.find().orderBy( { age: -1 } )`
- C) `db.collection.find().sort( { age: 1 } )`
- D) `db.collection.find().sortBy( { age: 1 } )`

**6.** Which MongoDB operator would you use to check whether a field is **not equal** to a specific value?

- A) `$eq`
- B) `$ne`
- C) `$gt`
- D) `$exists`

**7.** You want to perform a **case-insensitive search** on a `name` field. Which query operator would you use?

- A) `$regex` with the `i` option
- B) `$in`
- C) `$caseInsensitive`
- D) `$search`

**8.** How do you **limit** the number of documents returned by a query to 5?

- A) `db.collection.find().limit(5)`
- B) `db.collection.find().max(5)`
- C) `db.collection.find().restrict(5)`
- D) `db.collection.find().cap(5)`

**9.** What does the `$pull` operator do in MongoDB updates?

- A) It removes all instances of a specified value from an array
- B) It appends a value to an array
- C) It replaces a field with an array
- D) It removes the first element from an array

**10.** You have a field `scores` that is an array of numbers. Which MongoDB query returns all documents where **at least one element** in the `scores` array is greater than 90?

- A) `db.collection.find( { scores: { $gt: 90 } } )`
- B) `db.collection.find( { scores: { $elemMatch: { $gt: 90 } } } )`
- C) `db.collection.find( { scores: { $all: [90] } } )`
- D) `db.collection.find( { scores: { $gte: 90 } } )`

**11.** Which MongoDB operator would you use to check if a field **exists** in a document?

- A) `$exists`
- B) `$in`
- C) `$all`
- D) `$elemMatch`

**12.** Which of the following aggregation stages is used to **group documents** by a specific field?

- A) `$group`
- B) `$match`
- C) `$sort`
- D) `$count`

**13.** What does the `$addToSet` operator do in MongoDB?

- A) It adds an element to an array **only if** it doesn’t already exist in the array
- B) It appends a value to an array even if it already exists
- C) It removes all instances of a value from an array
- D) It sets the value of a field

**14.** How do you **delete multiple documents** in a MongoDB collection based on a condition?

- A) `deleteMany()`
- B) `deleteOne()`
- C) `removeAll()`
- D) `drop()`

**15.** What is the purpose of the **`$elemMatch`** operator in MongoDB?

- A) It matches an array element that satisfies all specified criteria
- B) It matches all elements in an array that satisfy any criteria
- C) It removes elements from an array
- D) It adds elements to an array

**16.** How do you **skip** a specific number of documents in the result set of a query?

- A) `db.collection.find().skip(10)`
- B) `db.collection.find().limit(10)`
- C) `db.collection.find().cap(10)`
- D) `db.collection.find().restrict(10)`

**17.** You want to **update a nested field** in a document. Which query correctly updates the `city` field inside the `address` subdocument?

- A) `db.collection.updateOne( { _id: 1 }, { $set: { "address.city": "New York" } } )`
- B) `db.collection.updateOne( { _id: 1 }, { $set: { address.city: "New York" } } )`
- C) `db.collection.updateOne( { _id: 1 }, { "address.city": { $set: "New York" } } )`
- D) `db.collection.updateOne( { _id: 1 }, { "address.city": "New York" } )`

**18.** When performing an `updateOne()` operation, what happens if the document does not exist and the `upsert` option is set to `true`?

- A) MongoDB creates a new document
- B) MongoDB throws an error
- C) MongoDB ignores the query
- D) MongoDB deletes the document

---

---

## **Part 3: CRUD Operations (Advanced) - Answer Key**

---

**1.** B) `$inc`  
**2.** B) No documents will be updated, and no error will occur  
**3.** A) `db.collection.find( { hobbies: { $all: ["reading", "sports"] } } )`  
**4.** A) `findOneAndUpdate()`  
**5.** A) `db.collection.find().sort( { age: -1 } )`  
**6.** B) `$ne`  
**7.** A) `$regex` with the `i` option  
**8.** A) `db.collection.find().limit(5)`  
**9.** A) It removes all instances of a specified value from an array  
**10.** B) `db.collection.find( { scores: { $elemMatch: { $gt: 90 } } } )`  
**11.** A) `$exists`  
**12.** A) `$group`  
**13.** A) It adds an element to an array **only if** it doesn’t already exist in the array  
**14.** A) `deleteMany()`  
**15.** A) It matches an array element that satisfies all specified criteria  
**16.** A) `db.collection.find().skip(10)`  
**17.** A) `db.collection.updateOne( { _id: 1 }, { $set: { "address.city": "New York" } } )`  
**18.** A) MongoDB creates a new document

---

---

---

### End of Part 3

---

## **Part 4: Indexes - 18 Questions**

---

**1.** You have a **compound index** on `{ name: 1, age: -1 }`. Which query would most efficiently use this index?

- A) `db.collection.find( { age: { $gt: 25 } } ).sort( { name: 1 } )`
- B) `db.collection.find( { name: "Alice" } ).sort( { age: -1 } )`
- C) `db.collection.find( { name: "Alice", age: { $lt: 30 } } ).sort( { age: 1 } )`
- D) `db.collection.find( { age: { $gt: 30 }, name: "Alice" } )`

**2.** Which of the following commands will create a **unique index** on the `email` field to prevent duplicate entries?

- A) `db.collection.createIndex( { email: 1 }, { unique: true } )`
- B) `db.collection.createUniqueIndex( { email: 1 } )`
- C) `db.collection.addIndex( { email: 1 }, { unique: true } )`
- D) `db.collection.createIndex( { email: 1 } )`

**3.** What does it mean when the **explain plan** of a MongoDB query shows `IXSCAN`?

- A) The query is performing a **full collection scan**
- B) The query is using an **index scan** to find matching documents
- C) The query is using **multiple indexes** to optimize performance
- D) The query has **skipped** using an index and performed a scan of a single field

**4.** In MongoDB, what is a **sparse index**, and when would you use it?

- A) An index that skips **documents with missing fields** in the index
- B) An index that is used only for **array fields**
- C) An index that **stores data sparsely** across multiple collections
- D) An index that enforces **uniqueness** across all documents

**5.** You have a **multi-key index** on the `tags` field, which is an array. Which of the following queries will effectively use this index?

- A) `db.collection.find( { tags: "electronics" } )`
- B) `db.collection.find( { tags: { $size: 3 } } )`
- C) `db.collection.find( { tags: { $in: ["electronics", "gadgets"] } } )`
- D) `db.collection.find( { tags: { $all: ["electronics", "appliances"] } } )`

**6.** You run a query, and MongoDB performs a **collection scan** instead of using the available index. What is a likely reason for this behavior?

- A) The query conditions are not covered by any existing index
- B) The index is not properly created in the collection
- C) The index is a sparse index and some fields are missing
- D) MongoDB has too many indexes and skips using them for performance reasons

**7.** What does the **`hint()`** method do in a MongoDB query?

- A) It forces MongoDB to use a specific index for the query
- B) It allows MongoDB to optimize the query automatically
- C) It forces MongoDB to **skip** using indexes for the query
- D) It hints MongoDB to optimize the query for **read operations**

**8.** You have a collection of products with a **text index** on the `description` field. Which of the following queries will use this index?

- A) `db.products.find( { $text: { $search: "laptop" } } )`
- B) `db.products.find( { description: { $regex: "laptop" } } )`
- C) `db.products.find( { description: "laptop" } )`
- D) `db.products.find( { $where: "this.description.includes('laptop')" } )`

**9.** Which type of index would you create to run **geospatial queries** in MongoDB, such as finding nearby locations?

- A) 2dsphere index
- B) Text index
- C) Compound index
- D) Sparse index

**10.** What is the advantage of using a **compound index** in MongoDB?

- A) It supports queries that need to match multiple fields efficiently
- B) It is faster than single-field indexes
- C) It reduces storage requirements for indexes
- D) It forces MongoDB to automatically use the correct index for each query

**11.** In MongoDB, which type of index is used to ensure that **each value in an indexed field is unique** across all documents?

- A) Unique index
- B) Sparse index
- C) Compound index
- D) Geospatial index

**12.** Which of the following best describes a **multi-key index** in MongoDB?

- A) An index created on an **array field**, allowing efficient querying of array elements
- B) An index created on **multiple fields** in the same document
- C) An index used for **text search** on multiple fields
- D) An index that ensures **uniqueness** across multiple fields

**13.** You want to analyze the performance of your queries and determine if they are using indexes effectively. Which command would you use?

- A) `explain()`
- B) `validate()`
- C) `aggregate()`
- D) `stats()`

**14.** Which MongoDB operator would you use to create a **partial index** that only includes documents where the `status` field is set to "active"?

- A) `partialFilterExpression`
- B) `sparseIndex`
- C) `uniqueIndex`
- D) `multiKeyIndex`

**15.** What is the purpose of the `ttl` (Time To Live) index in MongoDB?

- A) To automatically **expire documents** after a certain period of time
- B) To cache documents for faster retrieval
- C) To enforce uniqueness in a collection
- D) To create an index on a field with an array of values

**16.** You have a **compound index** on `{ category: 1, price: -1 }`. Which of the following queries would benefit the most from this index?

- A) `db.collection.find( { category: "electronics" } ).sort( { price: -1 } )`
- B) `db.collection.find( { price: { $gt: 100 } } )`
- C) `db.collection.find( { category: "electronics" } ).sort( { price: 1 } )`
- D) `db.collection.find( { price: { $gt: 100 }, category: "electronics" } )`

**17.** Which of the following **index types** would you use to **optimize queries** that involve both **text search** and **geospatial data**?

- A) Compound index combining **text** and **2dsphere** index
- B) Multi-key index on text and geospatial fields
- C) Unique index on geospatial fields
- D) Text index on all fields

**18.** What does the `background` option do when creating an index in MongoDB?

- A) It allows the index to be built **in the background** without locking the database
- B) It speeds up the index creation process
- C) It automatically optimizes index usage
- D) It forces MongoDB to use an existing index

---

---

## **Part 4: Indexes - Answer Key**

---

**1.** B) `db.collection.find( { name: "Alice" } ).sort( { age: -1 } )`  
**2.** A) `db.collection.createIndex( { email: 1 }, { unique: true } )`  
**3.** B) The query is using an **index scan** to find matching documents  
**4.** A) An index that skips **documents with missing fields** in the index  
**5.** A) `db.collection.find( { tags: "electronics" } )`  
**6.** A) The query conditions are not covered by any existing index  
**7.** A) It forces MongoDB to use a specific index for the query  
**8.** A) `db.products.find( { $text: { $search: "laptop" } } )`  
**9.** A) 2dsphere index  
**10.** A) It supports queries that need to match multiple fields efficiently  
**11.** A) Unique index  
**12.** A) An index created on an **array field**, allowing efficient querying of array elements  
**13.** A) `explain()`  
**14.** A) `partialFilterExpression`  
**15.** A) To automatically **expire documents** after a certain period of time  
**16.** A) `db.collection.find( { category: "electronics" } ).sort( { price: -1 } )`  
**17.** A) Compound index combining **text** and **2dsphere** index  
**18.** A) It allows the index to be built **in the background** without locking the database

---

---

---

### End of Part 4

---

## **Part 5, Section 1: Tools and Tooling (8 Questions)**

---

**1.** You need to load the **Atlas Sample Dataset** into your MongoDB Atlas cluster for analysis. Which tool would you use to **graphically explore** the dataset after loading?

- A) MongoDB Compass
- B) MongoDB Atlas Data Explorer
- C) Robo 3T
- D) MongoDB Shell

**2.** When exporting data from MongoDB using the `mongodump` tool, which of the following is true?

- A) It creates a **binary** export of the data
- B) It exports data in **JSON** format
- C) It exports only **indexes** without documents
- D) It creates a **relational SQL** dump of the database

**3.** Which of the following tools provides a **visual interface** to monitor the performance of a MongoDB cluster, including **CPU, memory**, and **disk utilization**?

- A) MongoDB Atlas Performance Advisor
- B) MongoDB Compass
- C) MongoDB Cloud Manager
- D) Robo 3T

**4.** What is the purpose of the **`mongorestore`** tool?

- A) To restore a MongoDB database from a **binary** backup created by `mongodump`
- B) To restore **indexes only** to a collection
- C) To restore a **relational** database to MongoDB
- D) To restore data from a **JSON** export

**5.** Which of the following tools would you use to **analyze query performance** and suggest potential **index improvements** based on the queries executed?

- A) MongoDB Compass
- B) MongoDB Atlas Performance Advisor
- C) Robo 3T
- D) `mongotop`

**6.** Which command-line tool would you use to track the **real-time read and write activity** on your MongoDB server, including operations per collection?

- A) `mongostat`
- B) `mongoexport`
- C) `mongorestore`
- D) `mongotop`

**7.** How does the **Atlas Performance Advisor** help optimize your database performance?

- A) It provides recommendations on which **queries** could benefit from **indexing**
- B) It tracks **real-time replication lag** in sharded clusters
- C) It automatically applies **performance improvements** without user intervention
- D) It analyzes data integrity issues in collections

**8.** You need to **export data from a MongoDB collection** in a CSV format. Which tool would you use?

- A) `mongoexport`
- B) `mongodump`
- C) `mongorestore`
- D) MongoDB Atlas Data Explorer

---

## **Part 5, Section 2: Drivers (16 Questions)**

---

**1.** What is the primary purpose of the **MongoDB driver** in an application?

- A) To allow applications to **interact** with MongoDB using **MongoDB Query Language (MQL)**
- B) To manage **schema design** and data modeling for MongoDB
- C) To automatically manage **indexing** on collections
- D) To handle **backup and restore** operations

**2.** In the MongoDB Node.js driver, which of the following methods is used to **insert multiple documents** into a collection?

- A) `db.collection.insertMany()`
- B) `db.collection.insertOne()`
- C) `db.collection.bulkInsert()`
- D) `db.collection.addDocuments()`

**3.** When using the MongoDB driver, what is the purpose of **connection pooling**?

- A) To improve query performance by caching results
- B) To reuse **database connections** and reduce the overhead of establishing new connections
- C) To distribute **read operations** across multiple collections
- D) To automatically **backup** data during heavy read operations

**4.** Which of the following statements about **write concern** is correct?

- A) Write concern specifies the **number of nodes** that must acknowledge a write before it is considered successful
- B) Write concern controls the **read consistency** of a query
- C) Write concern is used to manage **connection pooling** behavior
- D) Write concern determines the **speed of write** operations

**5.** How does the **retryWrites** option in the MongoDB driver help ensure reliable write operations?

- A) It **retries** write operations that fail due to transient network errors
- B) It automatically **retries read operations** if a write operation fails
- C) It forces MongoDB to use a **backup replica** for writes
- D) It increases the **write speed** for high-traffic databases

**6.** Which driver method would you use to **update multiple documents** in a MongoDB collection?

- A) `updateMany()`
- B) `updateOne()`
- C) `replaceMany()`
- D) `bulkWrite()`

**7.** In a MongoDB transaction, how do you ensure that the transaction is **committed** or **rolled back** as a unit?

- A) By using `session.withTransaction()` to wrap all operations in a transaction
- B) By manually checking the success of each query in the application code
- C) By calling `session.rollback()` after each query
- D) By using `findOneAndReplace()` to commit changes

**8.** What does **read concern** define in MongoDB when using a driver?

- A) The **consistency level** of data that is read from the database
- B) The **number of nodes** involved in a write operation
- C) The speed at which MongoDB **commits writes** to disk
- D) The **isolation level** for transactions in a sharded cluster

**9.** How do you begin a **MongoDB session** for transactions in the Node.js driver?

- A) `client.startSession()`
- B) `client.beginTransaction()`
- C) `db.beginTransaction()`
- D) `db.startSession()`

**10.** Which MongoDB driver method would you use to **find and delete** a document in a single operation?

- A) `findOneAndDelete()`
- B) `deleteMany()`
- C) `findAndRemove()`
- D) `deleteOne()`

**11.** What is the advantage of using **`bulkWrite()`** in the MongoDB driver?

- A) It allows you to execute **multiple write operations** (inserts, updates, deletes) in a single request for improved efficiency
- B) It allows **faster queries** on multiple fields
- C) It executes **multiple read operations** in parallel
- D) It automatically **replicates** data across shards

**12.** How do you specify **connection options** (e.g., timeouts, retryWrites) when connecting to MongoDB using a driver?

- A) By passing them in the **connection string URI**
- B) By calling `db.setOptions()`
- C) By setting them in the **MongoDB configuration file**
- D) By passing them as arguments to the `insertMany()` method

**13.** In the MongoDB driver, which method allows you to perform **multiple operations** (insert, update, delete) efficiently in a single request?

- A) `bulkWrite()`
- B) `insertMany()`
- C) `updateMany()`
- D) `replaceOne()`

**14.** What is the purpose of the **`hint()`** method in a MongoDB query when using a driver?

- A) It forces MongoDB to use a **specific index** for the query
- B) It allows MongoDB to **skip certain fields** during query execution
- C) It hints MongoDB to optimize the query for **write-heavy** operations
- D) It suggests a query plan to MongoDB based on **previous executions**

**15.** How does **connection pooling** help with **write-heavy** operations when using a MongoDB driver?

- A) It reduces the overhead of creating new connections, allowing multiple write operations to share existing connections
- B) It prevents MongoDB from writing to disk until a pool of writes is accumulated
- C) It improves the speed of writes by **batching** them into a single connection
- D) It creates a separate connection for each write operation, ensuring isolation

**16.** What is the **default read concern** in MongoDB if not specified by the application using a driver?

- A) `local`
- B) `majority`
- C) `linearizable`
- D) `snapshot`

---

---

## **Part 5, Section 1: Tools and Tooling - Answer Key**

---

**1.** B) MongoDB Atlas Data Explorer  
**2.** A) It creates a **binary** export of the data  
**3.** C) MongoDB Cloud Manager  
**4.** A) To restore a MongoDB database from a **binary** backup created by `mongodump`  
**5.** B) MongoDB Atlas Performance Advisor  
**6.** A) `mongostat`  
**7.** A) It provides recommendations on which **queries** could benefit from **indexing**  
**8.** A) `mongoexport`

---

## **Part 5, Section 2: Drivers - Answer Key**

---

**1.** A) To allow applications to **interact** with MongoDB using **MongoDB Query Language (MQL)**  
**2.** A) `db.collection.insertMany()`  
**3.** B) To reuse **database connections** and reduce the overhead of establishing new connections  
**4.** A) Write concern specifies the **number of nodes** that must acknowledge a write before it is considered successful  
**5.** A) It **retries** write operations that fail due to transient network errors  
**6.** A) `updateMany()`  
**7.** A) By using `session.withTransaction()` to wrap all operations in a transaction  
**8.** A) The **consistency level** of data that is read from the database  
**9.** A) `client.startSession()`  
**10.** A) `findOneAndDelete()`  
**11.** A) It allows you to execute **multiple write operations** (inserts, updates, deletes) in a single request for improved efficiency  
**12.** A) By passing them in the **connection string URI**  
**13.** A) `bulkWrite()`  
**14.** A) It forces MongoDB to use a **specific index** for the query  
**15.** A) It reduces the overhead of creating new connections, allowing multiple write operations to share existing connections  
**16.** A) `local`

---

---

---
