# **MongoDB Associate Developer Mock Exam V3**

## Full

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

This mock exam mirrors the depth and coverage of the MongoDB Associate Developer Exam objectives. It provides targeted questions on BSON types, CRUD operations, indexing, data modeling, MongoDB tools, and driver usage. The answer key allows you to evaluate your understanding and identify areas for further study.

---

## Indexes

Here is a **deep dive** into the **Indexes** section, with **18 detailed questions** that cover a wide range of topics on indexing in MongoDB. These questions will explore concepts like index creation, performance optimization, types of indexes, and analyzing query plans.

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
