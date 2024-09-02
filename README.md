# MongoDB Associate Developer Exam Prep

## Exam Details

- **Format**: 53 Multiple choice questions
- **Time allotted**: 75 Minutes
- **Exam fee**: USD $150
- **Delivery Options**: Online in a proctored environment
- **Prerequisites**: None
- **Languange**: English

## Domains

### Section 1: MONGODB OVERVIEW AND THE DOCUMENT MODEL (8%)

- 1.1 Identify the set of value types MongoDB BSON supports.
- 1.2 Given three documents that are of dierent shape, identify which can co-exist in the
  same collection.

### Section 2: CRUD (51%)

- 2.1 Given a scenario with a type of structured document that needs to be inserted into a
  database, identify properly and improperly formed insert commands.
- 2.2 Given an update scenario where an entire updated document (no update operators
  used) is provided, identify the output and how the database changed state.
- 2.3 Given an update scenario where $set is used, identify the output and how the
  database changed state.
- 2.4 Given a scenario about updating a document and information about where it should
  be inserted if it does not exist, identify the upsert command that should be used.
- 2.5 Given a scenario where multiple documents need to be updated, identify the correct
  update expression.
- 2.6 Given a findAndModify scenario where another operation is run concurrently, identify
  the output and how the database changed state.
- 2.7 Given a scenario where a document should be deleted from the database, identify the
  delete expression that should be used.
- 2.8 Given a scenario where a single document should be looked up by a simple equality
  constraint (eg {x: 3}), identify the expression that should be used.
- 2.9 Identify documents matched by a query with an equality constraint on an array field.
- 2.10 Identify documents matched by an expression with relational operators in it.
- 2.11 Identify documents matched by an expression with $in.
- 2.12 Identify documents matched by an $elemMatch expression.
- 2.13 Identify documents matched by an expression that has several logical operators.
- 2.14 Given a query with a sort and limit, identify the correct output.
- 2.15 Identify the incorrect projection among a set of expressions.
- 2.16 Identify how to get all results from a cursor.
- 2.17 Identify the expressions used to count the number of documents matching a query.
- 2.18 Given an indexing scenario, identify the correct command for defining a search index.
- 2.19 Given a scenario, identify the correct search query.
- 2.20 Given an aggregation expression using $match, $group, identify the correct output.
- 2.21 Given an aggregation expression using $lookup, identify the correct output.
- 2.22 Given an aggregation expression using $out, identify the correct output.

### Section 3: INDEXES (17%)

- 3.1 Given a query that is performing a collection scan, identify which index would
  improve the performance of this query.
- 3.2 Given a query that is performing a collection scan on an equality match on an array
  field, identify which index would improve the performance of this query.
- 3.3 Given a query with no constraint and a sort of two fields that is doing collection scan,
  identify which index would improve the performance of this query.
- 3.4 Given a collection, identify how many indexes exist for that collection.
- 3.5 Identify the trade-os of using indexes and the ramifications of deleting indexes
  support queries
- 3.6 Identify the explain plan outputs that signify a potential performance issue,
  specifically whether an index is present or not for the given query.

### Section 4: DATA MODELING (4%)

- 4.1 Given a scenario with three collections (a parent and two children) and the user,
  identify the embedded relationships and which should be linked.
- 4.2 Identify data model examples that are considered an anti-pattern.

### Section 5: TOOLS AND TOOLING (2%)

- 5.1 Given a scenario to load Atlas Sample Dataset and then use Data Explorer to use it to
  find a given first document in a collection

### Section 6: NODE DRIVERS (18%)

- 6.1 Define what the Node driver is?
- 6.2 Define how the Node application connects/uses the Node driver?
- 6.3 Define the components of the URI string used by MongoClient to connect the driver to
  the database.
- 6.4 Identify what connection pooling is in terms of the driver and what advantages it
  oers.
- 6.5 Identify the correct syntax for the Node driver to insert one document and to insert
  many documents.
- 6.6 Identify the correct syntax for the Node driver to update one document and to update
  many documents.
- 6.7 Identify the correct syntax for the Node driver to delete one document and to delete
  many documents.
- 6.8 Identify the correct syntax for the Node driver to find many documents and to find one
  document.
- 6.9 Identify the correct syntax for the Node driver to create an aggregation pipeline.
- 6.10 Identify the dierent syntax for the Node driver when using the MongoDB Query
  Language (MQL) and when using the Aggregation Framework.
