# QUIZ

## Section 1

All question have been generated using ChatGPT, the exam guide and the `data.json` file.

Here are some practice questions based on Section 1 (MongoDB Overview and the Document Model) using the provided JSON dataset:

### 1. **Value Types Supported by BSON:**

**Question:** Identify the correct BSON data types that can be used in MongoDB documents.

**Sample Data:** Consider the following data structure for the country "Brazil" from the dataset:

```json
{
  "name": "Brazil",
  "population": 212559409,
  "area": 8515767,
  "languages": [
    {
      "iso639_1": "pt",
      "name": "Portuguese"
    }
  ]
}
```

**Options:**

1. String, Integer, Array
2. Boolean, Double, String
3. Date, Decimal128, Integer
4. All of the above

### 2. **Document Structure Compatibility:**

**Question:** Given three documents from the dataset, identify which documents can coexist in the same MongoDB collection:

```json
{
  "name": "Afghanistan",
  "population": 40218234,
  "timezones": ["UTC+04:30"]
},
{
  "name": "Albania",
  "population": 2837743,
  "capital": "Tirana"
},
{
  "name": "American Samoa",
  "population": 55197,
  "languages": [
    {
      "iso639_1": "en",
      "name": "English"
    }
  ]
}
```

**Options:**

1. All three documents can coexist.
2. Only the first and second documents can coexist.
3. Only the second and third documents can coexist.
4. None of the documents can coexist.

### 3. **Handling Arrays in BSON:**

**Question:** Given the structure of an array in a document, identify whether it is a valid BSON type:

```json
{
  "name": "Australia",
  "topLevelDomain": [".au"]
}
```

**Options:**

1. Yes, arrays are valid BSON types.
2. No, arrays are not valid BSON types.

### 4. **Multiple Value Types in a Field:**

**Question:** If you want to store both string and numeric values in the same field, is it possible with BSON?

**Options:**

1. Yes, BSON allows storing multiple value types in the same field.
2. No, BSON does not allow storing different value types in the same field.

### 5. **BSON and Document Flexibility:**

**Question:** Given two MongoDB documents with different fields, can they both exist in the same collection?

```json
{
  "name": "Bahamas",
  "capital": "Nassau"
}
```

```json
{
  "name": "Barbados",
  "population": 287371
}
```

**Options:**

1. Yes, MongoDB collections are schema-less, so both documents can exist in the same collection.
2. No, both documents cannot exist in the same collection because they have different fields.

---

### **Answers for Section 1:**

1. **Answer:** _4._ All of the above
2. **Answer:** _1._ All three documents can coexist.
3. **Answer:** _1._ Yes, arrays are valid BSON types.
4. **Answer:** _2._ No, BSON does not allow storing different value types in the same field.
5. **Answer:** _1._ Yes, MongoDB collections are schema-less, so both documents can exist in the same collection.

## Section 2: CRUD

### 2.1: Inserting Documents

1. **Properly Formed Insert Command:**

   **Question:** Given the following document, identify which MongoDB `insertOne` command is correctly formed:

   ```json
   {
     "name": "Belarus",
     "capital": "Minsk",
     "population": 9398861
   }
   ```

   **Options:**

   1. `db.countries.insertOne({ "name": "Belarus", "capital": "Minsk", "population": 9398861 })`
   2. `db.countries.insertOne([ "name": "Belarus", "capital": "Minsk", "population": 9398861 ])`
   3. `db.countries.insertOne({ "name": "Belarus", "capital": "Minsk", population: 9398861 })`
   4. `db.countries.insertOne({ "name": "Belarus", "capital": "Minsk", "population": 9398861 );`

2. **Array Fields in Insert Command:**

   **Question:** Which of the following `insertOne` commands correctly inserts a document with an array field for the languages spoken in "Belgium"?

   ```json
   {
     "name": "Belgium",
     "languages": ["Dutch", "French", "German"]
   }
   ```

   **Options:**

   1. `db.countries.insertOne({ "name": "Belgium", "languages": "Dutch", "French", "German" })`
   2. `db.countries.insertOne({ "name": "Belgium", "languages": ["Dutch", "French", "German"] })`
   3. `db.countries.insertOne({ "name": "Belgium", "languages": "Dutch, French, German" })`
   4. `db.countries.insertOne([ "name": "Belgium", "languages": ["Dutch", "French", "German"] ])`

3. **Insert Command with Nested Document:**

   **Question:** Identify the correct `insertOne` command that would insert the following document containing a nested document for the country "Bhutan":

   ```json
   {
     "name": "Bhutan",
     "currencies": {
       "code": "BTN",
       "name": "Bhutanese ngultrum",
       "symbol": "Nu."
     }
   }
   ```

   **Options:**

   1. `db.countries.insertOne({ "name": "Bhutan", "currencies": { "code": "BTN", "name": "Bhutanese ngultrum", "symbol": "Nu." } })`
   2. `db.countries.insertOne({ "name": "Bhutan", "currencies": [ "code": "BTN", "name": "Bhutanese ngultrum", "symbol": "Nu." ] })`
   3. `db.countries.insertOne({ "name": "Bhutan", "currencies": "code: BTN, name: Bhutanese ngultrum, symbol: Nu." })`
   4. `db.countries.insertOne({ "name": "Bhutan", currencies: { "code": "BTN", "name": "Bhutanese ngultrum", "symbol": "Nu." } })`

4. **Inserting Multiple Documents:**

   **Question:** Given the documents for "Bangladesh" and "Barbados," which `insertMany` command is correctly formed to insert both documents at once?

   ```json
   {
     "name": "Bangladesh",
     "capital": "Dhaka"
   },
   {
     "name": "Barbados",
     "capital": "Bridgetown"
   }
   ```

   **Options:**

   1. `db.countries.insertMany([ { "name": "Bangladesh", "capital": "Dhaka" }, { "name": "Barbados", "capital": "Bridgetown" } ])`
   2. `db.countries.insertMany({ "name": "Bangladesh", "capital": "Dhaka" }, { "name": "Barbados", "capital": "Bridgetown" })`
   3. `db.countries.insertMany({ [ "name": "Bangladesh", "capital": "Dhaka" ], [ "name": "Barbados", "capital": "Bridgetown" ] })`
   4. `db.countries.insertMany([ "name": "Bangladesh", "capital": "Dhaka", "name": "Barbados", "capital": "Bridgetown" ])`

5. **Inserting Document with Multiple Arrays:**

   **Question:** Which of the following commands correctly inserts a document with multiple array fields, such as `borders` and `timezones` for the country "Botswana"?

   ```json
   {
     "name": "Botswana",
     "borders": ["NAM", "ZAF", "ZMB", "ZWE"],
     "timezones": ["UTC+02:00"]
   }
   ```

   **Options:**

   1. `db.countries.insertOne({ "name": "Botswana", "borders": ["NAM", "ZAF", "ZMB", "ZWE"], "timezones": ["UTC+02:00"] })`
   2. `db.countries.insertOne({ "name": "Botswana", "borders": "NAM", "ZAF", "ZMB", "ZWE", "timezones": "UTC+02:00" })`
   3. `db.countries.insertOne({ "name": "Botswana", "borders": [NAM, ZAF, ZMB, ZWE], "timezones": [UTC+02:00] })`
   4. `db.countries.insertOne([ "name": "Botswana", "borders": ["NAM", "ZAF", "ZMB", "ZWE"], "timezones": ["UTC+02:00"] ])`

---

### **Answers for Section 2.1:**

1. **Answer:** _1._ `db.countries.insertOne({ "name": "Belarus", "capital": "Minsk", "population": 9398861 })`
2. **Answer:** _2._ `db.countries.insertOne({ "name": "Belgium", "languages": ["Dutch", "French", "German"] })`
3. **Answer:** _1._ `db.countries.insertOne({ "name": "Bhutan", "currencies": { "code": "BTN", "name": "Bhutanese ngultrum", "symbol": "Nu." } })`
4. **Answer:** _1._ `db.countries.insertMany([ { "name": "Bangladesh", "capital": "Dhaka" }, { "name": "Barbados", "capital": "Bridgetown" } ])`
5. **Answer:** _1._ `db.countries.insertOne({ "name": "Botswana", "borders": ["NAM", "ZAF", "ZMB", "ZWE"], "timezones": ["UTC+02:00"] })`

### 2.2: Updating Documents without Update Operators

1. **Updating a Document by Replacing Entire Content:**

   **Question:** You want to update the "Belarus" document to change the capital city to "Minsk City" and update the population to 10 million. Which command would correctly replace the entire document?

   - **Original Document:**

     ```json
     {
       "name": "Belarus",
       "capital": "Minsk",
       "population": 9398861
     }
     ```

   - **Options:**
     1. `db.countries.updateOne({ "name": "Belarus" }, { "capital": "Minsk City", "population": 10000000 })`
     2. `db.countries.updateOne({ "name": "Belarus" }, { $set: { "capital": "Minsk City", "population": 10000000 } })`
     3. `db.countries.replaceOne({ "name": "Belarus" }, { "capital": "Minsk City", "population": 10000000 })`
     4. `db.countries.update({ "name": "Belarus" }, { "capital": "Minsk City", "population": 10000000 })`

2. **Complete Document Replacement:**

   **Question:** You need to replace the "Albania" document with the following updated document:

   ```json
   {
     "name": "Albania",
     "capital": "Tirana",
     "area": 28748
   }
   ```

   - **Original Document:**

     ```json
     {
       "name": "Albania",
       "capital": "Tirana",
       "population": 2837743
     }
     ```

     **Options:**

   1. `db.countries.updateOne({ "name": "Albania" }, { "capital": "Tirana", "area": 28748 })`
   2. `db.countries.updateOne({ "name": "Albania" }, { $set: { "capital": "Tirana", "area": 28748 } })`
   3. `db.countries.replaceOne({ "name": "Albania" }, { "capital": "Tirana", "area": 28748 })`
   4. `db.countries.replaceOne({ "name": "Albania" }, { "name": "Albania", "capital": "Tirana", "area": 28748 })`

3. **Removing Fields During Update:**

   **Question:** The document for "Armenia" currently contains a `population` field. You want to update the document so that it no longer includes this field but instead includes a `gini` field. What is the correct command to replace the entire document?

   - **Original Document:**

     ```json
     {
       "name": "Armenia",
       "capital": "Yerevan",
       "population": 2963234
     }
     ```

   - **Updated Document:**

     ```json
     {
       "name": "Armenia",
       "capital": "Yerevan",
       "gini": 29.9
     }
     ```

     **Options:**

   1. `db.countries.updateOne({ "name": "Armenia" }, { $unset: { "population": "", "gini": 29.9 } })`
   2. `db.countries.replaceOne({ "name": "Armenia" }, { "capital": "Yerevan", "gini": 29.9 })`
   3. `db.countries.replaceOne({ "name": "Armenia" }, { "name": "Armenia", "capital": "Yerevan", "gini": 29.9 })`
   4. `db.countries.updateOne({ "name": "Armenia" }, { $set: { "capital": "Yerevan", "gini": 29.9 }, $unset: { "population": "" } })`

4. **Replacing a Document Without Keeping Any Fields:**

   **Question:** You want to replace the document for "Angola" with entirely new data, keeping only the `name` field and updating the rest as shown below:

   ```json
   {
     "name": "Angola",
     "capital": "Luanda",
     "languages": ["Portuguese"]
   }
   ```

   **Options:**

   1. `db.countries.updateOne({ "name": "Angola" }, { $set: { "capital": "Luanda", "languages": ["Portuguese"] } })`
   2. `db.countries.replaceOne({ "name": "Angola" }, { "name": "Angola", "capital": "Luanda", "languages": ["Portuguese"] })`
   3. `db.countries.updateOne({ "name": "Angola" }, { "capital": "Luanda", "languages": ["Portuguese"] })`
   4. `db.countries.replaceOne({ "name": "Angola" }, { "capital": "Luanda", "languages": ["Portuguese"] })`

5. **Updating to Add a New Field:**

   **Question:** The document for "Andorra" needs to be updated to add a new `demonym` field while removing the `population` field. Which command will completely replace the document?

   - **Original Document:**

     ```json
     {
       "name": "Andorra",
       "capital": "Andorra la Vella",
       "population": 77265
     }
     ```

   - **Updated Document:**

     ```json
     {
       "name": "Andorra",
       "capital": "Andorra la Vella",
       "demonym": "Andorran"
     }
     ```

     **Options:**

   1. `db.countries.updateOne({ "name": "Andorra" }, { "demonym": "Andorran" })`
   2. `db.countries.replaceOne({ "name": "Andorra" }, { "capital": "Andorra la Vella", "demonym": "Andorran" })`
   3. `db.countries.replaceOne({ "name": "Andorra" }, { "name": "Andorra", "capital": "Andorra la Vella", "demonym": "Andorran" })`
   4. `db.countries.updateOne({ "name": "Andorra" }, { $set: { "demonym": "Andorran" }, $unset: { "population": "" } })`

---

### **Answers for Section 2.2:**

1. **Answer:** 3. `db.countries.replaceOne({ "name": "Belarus" }, { "capital": "Minsk City", "population": 10000000 })`
2. **Answer:** 4. `db.countries.replaceOne({ "name": "Albania" }, { "name": "Albania", "capital": "Tirana", "area": 28748 })`
3. **Answer:** 3. `db.countries.replaceOne({ "name": "Armenia" }, { "name": "Armenia", "capital": "Yerevan", "gini": 29.9 })`
4. **Answer:** 2. `db.countries.replaceOne({ "name": "Angola" }, { "name": "Angola", "capital": "Luanda", "languages": ["Portuguese"] })`
5. **Answer:** 3. `db.countries.replaceOne({ "name": "Andorra" }, { "name": "Andorra", "capital": "Andorra la Vella", "demonym": "Andorran" })`

### 2.3: Updating Documents with `$set`

1. **Updating a Single Field:**

   - **Question:** You need to update the `capital` of "Bahamas" to "Nassau City" without altering any other fields. Which command will accomplish this?

     - **Original Document:**

       ```json
       {
         "name": "Bahamas",
         "capital": "Nassau",
         "population": 393248
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Bahamas" }, { "capital": "Nassau City" })`
     2. `db.countries.updateOne({ "name": "Bahamas" }, { $set: { "capital": "Nassau City" } })`
     3. `db.countries.updateOne({ "name": "Bahamas" }, { $update: { "capital": "Nassau City" } })`
     4. `db.countries.updateOne({ "name": "Bahamas" }, { "capital": "Nassau City", "population": 393248 })`

2. **Adding a New Field with `$set`:**

   - **Question:** The document for "Belize" is missing a `gini` field. Which command correctly adds the `gini` field with a value of 53.3?

     - **Original Document:**

       ```json
       {
         "name": "Belize",
         "capital": "Belmopan",
         "population": 397621
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Belize" }, { "gini": 53.3 })`
     2. `db.countries.updateOne({ "name": "Belize" }, { $set: { "gini": 53.3 } })`
     3. `db.countries.updateOne({ "name": "Belize" }, { $add: { "gini": 53.3 } })`
     4. `db.countries.updateOne({ "name": "Belize" }, { $set: { "capital": "Belmopan", "gini": 53.3 } })`

3. **Updating Multiple Fields:**

   - **Question:** Update the `capital` and `population` fields for "Benin" using the `$set` operator. The `capital` should be "Cotonou" and the `population` should be 12 million.

     - **Original Document:**

       ```json
       {
         "name": "Benin",
         "capital": "Porto-Novo",
         "population": 12123198
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Benin" }, { "capital": "Cotonou", "population": 12000000 })`
     2. `db.countries.updateOne({ "name": "Benin" }, { $set: { "capital": "Cotonou", "population": 12000000 } })`
     3. `db.countries.updateOne({ "name": "Benin" }, { $set: { "capital": "Cotonou" }, "population": 12000000 })`
     4. `db.countries.updateOne({ "name": "Benin" }, { $update: { "capital": "Cotonou", "population": 12000000 } })`

4. **Using `$set` to Replace a Value in an Array:**

   - **Question:** The document for "Bermuda" needs to update the `timezones` field to a new array with a single value `["UTC-03:00"]`. Which command is correct?

     - **Original Document:**

       ```json
       {
         "name": "Bermuda",
         "timezones": ["UTC-04:00"]
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Bermuda" }, { $set: { "timezones": ["UTC-03:00"] } })`
     2. `db.countries.updateOne({ "name": "Bermuda" }, { $set: { "timezones": "UTC-03:00" } })`
     3. `db.countries.updateOne({ "name": "Bermuda" }, { $addToSet: { "timezones": "UTC-03:00" } })`
     4. `db.countries.updateOne({ "name": "Bermuda" }, { "timezones": ["UTC-03:00"] })`

5. **Combining `$set` with Other Fields:**

   - **Question:** You want to update "Bolivia" to set the `capital` to "La Paz" and the `area` to 1,098,581 square kilometers. Which command should you use?

     - **Original Document:**

       ```json
       {
         "name": "Bolivia (Plurinational State of)",
         "capital": "Sucre",
         "area": 1098581
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Bolivia (Plurinational State of)" }, { "capital": "La Paz", "area": 1098581 })`
     2. `db.countries.updateOne({ "name": "Bolivia (Plurinational State of)" }, { $set: { "capital": "La Paz", "area": 1098581 } })`
     3. `db.countries.updateOne({ "name": "Bolivia (Plurinational State of)" }, { $set: { "capital": "La Paz" }, "area": 1098581 })`
     4. `db.countries.updateOne({ "name": "Bolivia (Plurinational State of)" }, { $set: { "capital": "La Paz" } })`

---

### **Answers for Section 2.3:**

1. **Answer:** _2._ `db.countries.updateOne({ "name": "Bahamas" }, { $set: { "capital": "Nassau City" } })`
2. **Answer:** _2._ `db.countries.updateOne({ "name": "Belize" }, { $set: { "gini": 53.3 } })`
3. **Answer:** _2._ `db.countries.updateOne({ "name": "Benin" }, { $set: { "capital": "Cotonou", "population": 12000000 } })`
4. **Answer:** _1._ `db.countries.updateOne({ "name": "Bermuda" }, { $set: { "timezones": ["UTC-03:00"] } })`
5. **Answer:** _2._ `db.countries.updateOne({ "name": "Bolivia (Plurinational State of)" }, { $set: { "capital": "La Paz", "area": 1098581 } })`

### 2.4: Using Upserts

1. **Upserting a Document:**

   - **Question:** You want to insert a new document for "Bosnia and Herzegovina" if it doesn't already exist, or update the existing document to set the `capital` to "Sarajevo" and the `population` to 3.3 million. Which command correctly performs this upsert operation?

     - **Original Document (if exists):**

       ```json
       {
         "name": "Bosnia and Herzegovina",
         "capital": "Sarajevo"
       }
       ```

     - **Options:**
       1. `db.countries.updateOne({ "name": "Bosnia and Herzegovina" }, { $set: { "capital": "Sarajevo", "population": 3300000 } })`
       2. `db.countries.updateOne({ "name": "Bosnia and Herzegovina" }, { $set: { "capital": "Sarajevo", "population": 3300000 } }, { upsert: true })`
       3. `db.countries.replaceOne({ "name": "Bosnia and Herzegovina" }, { "capital": "Sarajevo", "population": 3300000 }, { upsert: true })`
       4. `db.countries.updateOne({ "name": "Bosnia and Herzegovina" }, { $setOnInsert: { "capital": "Sarajevo", "population": 3300000 } }, { upsert: true })`

2. **Upsert with New Fields:**

   - **Question:** For the country "Botswana," you want to upsert a document that sets `capital` to "Gaborone" and adds a new field `gini` with a value of 53.3. Which command is correct?

     - **Original Document (if exists):**

       ```json
       {
         "name": "Botswana",
         "capital": "Gaborone"
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Botswana" }, { $set: { "capital": "Gaborone", "gini": 53.3 } }, { upsert: true })`
     2. `db.countries.updateOne({ "name": "Botswana" }, { $set: { "capital": "Gaborone" }, $setOnInsert: { "gini": 53.3 } }, { upsert: true })`
     3. `db.countries.updateOne({ "name": "Botswana" }, { $setOnInsert: { "capital": "Gaborone", "gini": 53.3 } }, { upsert: true })`
     4. `db.countries.replaceOne({ "name": "Botswana" }, { "capital": "Gaborone", "gini": 53.3 }, { upsert: true })`

3. **Upsert with Replacement:**

   - **Question:** You want to upsert a document for "Brazil" that completely replaces the document if it exists, with the following structure:

     ```json
     {
       "name": "Brazil",
       "capital": "Brasília",
       "area": 8515767
     }
     ```

     - **Original Document (if exists):**

       ```json
       {
         "name": "Brazil",
         "capital": "Brasília"
       }
       ```

     **Options:**

     1. `db.countries.updateOne({ "name": "Brazil" }, { $set: { "capital": "Brasília", "area": 8515767 } }, { upsert: true })`
     2. `db.countries.replaceOne({ "name": "Brazil" }, { "name": "Brazil", "capital": "Brasília", "area": 8515767 }, { upsert: true })`
     3. `db.countries.updateOne({ "name": "Brazil" }, { $set: { "capital": "Brasília", "area": 8515767 } }, { upsert: true })`
     4. `db.countries.replaceOne({ "name": "Brazil" }, { "capital": "Brasília", "area": 8515767 }, { upsert: true })`

4. **Conditional Upsert with Array Fields:**

   - **Question:** For the country "Bulgaria," you want to upsert a document that sets the `capital` to "Sofia" and adds a `languages` array field only if the document does not already exist. Which command will accomplish this?

     - **Original Document (if exists):**

       ```json
       {
         "name": "Bulgaria",
         "capital": "Sofia"
       }
       ```

     - **Options:**
       1. `db.countries.updateOne({ "name": "Bulgaria" }, { $set: { "capital": "Sofia", "languages": ["Bulgarian"] } }, { upsert: true })`
       2. `db.countries.updateOne({ "name": "Bulgaria" }, { $setOnInsert: { "languages": ["Bulgarian"] } }, { upsert: true })`
       3. `db.countries.updateOne({ "name": "Bulgaria" }, { $set: { "capital": "Sofia" }, $setOnInsert: { "languages": ["Bulgarian"] } }, { upsert: true })`
       4. `db.countries.replaceOne({ "name": "Bulgaria" }, { "capital": "Sofia", "languages": ["Bulgarian"] }, { upsert: true })`

5. **Upsert with Matching Field:**

   - **Question:** For "Canada," perform an upsert that sets the `area` to 9,984,670 square kilometers and ensures the `capital` remains "Ottawa." What is the correct command?

     - **Original Document (if exists):**

       ```json
       {
         "name": "Canada",
         "capital": "Ottawa"
       }
       ```

     - **Options:**
       1. `db.countries.updateOne({ "name": "Canada" }, { $set: { "capital": "Ottawa", "area": 9984670 } }, { upsert: true })`
       2. `db.countries.updateOne({ "name": "Canada" }, { $set: { "area": 9984670 }, $setOnInsert: { "capital": "Ottawa" } }, { upsert: true })`
       3. `db.countries.updateOne({ "name": "Canada" }, { $setOnInsert: { "capital": "Ottawa", "area": 9984670 } }, { upsert: true })`
       4. `db.countries.updateOne({ "name": "Canada" }, { $set: { "area": 9984670 }, $setOnInsert: { "capital": "Ottawa" } }, { upsert: true })`

---

### **Answers for Section 2.4:**

1. **Answer:** _2._ `db.countries.updateOne({ "name": "Bosnia and Herzegovina" }, { $set: { "capital": "Sarajevo", "population": 3300000 } }, { upsert: true })`
2. **Answer:** _1._ `db.countries.updateOne({ "name": "Botswana" }, { $set: { "capital": "Gaborone", "gini": 53.3 } }, { upsert: true })`
3. **Answer:** _2._ `db.countries.replaceOne({ "name": "Brazil" }, { "name": "Brazil", "capital": "Brasília", "area": 8515767 }, { upsert: true })`
4. **Answer:** _3._ `db.countries.updateOne({ "name": "Bulgaria" }, { $set: { "capital": "Sofia" }, $setOnInsert: { "languages": ["Bulgarian"] } }, { upsert: true })`
5. **Answer:** _1._ `db.countries.updateOne({ "name": "Canada" }, { $set: { "capital": "Ottawa", "area": 9984670 } }, { upsert: true })`

### 2.5: Updating Multiple Documents

1. **Updating Multiple Documents Using `$set`:**

   - **Question:** You need to update the `region` of all countries in "South America" to "Latin America." Which command should you use?

     - **Sample Document:**

       ```json
       {
         "name": "Argentina",
         "region": "South America"
       }
       ```

     **Options:**

     1. `db.countries.updateMany({ "region": "South America" }, { "region": "Latin America" })`
     2. `db.countries.updateMany({ "region": "South America" }, { $set: { "region": "Latin America" } })`
     3. `db.countries.updateMany({ "region": "South America" }, { $update: { "region": "Latin America" } })`
     4. `db.countries.updateMany({ "region": "South America" }, { $set: { "name": "Latin America" } })`

2. **Updating Multiple Documents with Multiple Fields:**

   - **Question:** Update the `subregion` to "Northern America" and `timezones` to `["UTC-05:00"]` for all countries in the "Americas" region. Which command is correct?

     - **Sample Document:**

       ```json
       {
         "name": "Canada",
         "region": "Americas",
         "subregion": "North America",
         "timezones": ["UTC-05:00"]
       }
       ```

     **Options:**

     1. `db.countries.updateMany({ "region": "Americas" }, { $set: { "subregion": "Northern America", "timezones": ["UTC-05:00"] } })`
     2. `db.countries.updateMany({ "region": "Americas" }, { $set: { "subregion": "Northern America", "timezones": "UTC-05:00" } })`
     3. `db.countries.updateMany({ "region": "Americas" }, { "subregion": "Northern America", "timezones": ["UTC-05:00"] })`
     4. `db.countries.updateMany({ "region": "Americas" }, { $set: { "subregion": "Northern America", "timezones": ["UTC-04:00"] } })`

3. **Conditional Update for Multiple Documents:**

   - **Question:** Update all countries where `population` is greater than 100 million to set `status` as "Highly Populated." Which command would you use?

     - **Sample Document:**

       ```json
       {
         "name": "Bangladesh",
         "population": 164689383
       }
       ```

     **Options:**

     1. `db.countries.updateMany({ "population": { $gt: 100000000 } }, { $set: { "status": "Highly Populated" } })`
     2. `db.countries.updateMany({ "population": { $gte: 100000000 } }, { $set: { "status": "Highly Populated" } })`
     3. `db.countries.updateMany({ "population": { $gt: 100000000 } }, { "status": "Highly Populated" })`
     4. `db.countries.updateMany({ "population": { $gte: 100000000 } }, { $update: { "status": "Highly Populated" } })`

4. **Updating Array Fields for Multiple Documents:**

   - **Question:** You want to add "English" to the `languages` array of all countries in the "Europe" region that do not already have it. Which command will correctly update these documents?

     - **Sample Document:**

       ```json
       {
         "name": "Austria",
         "region": "Europe",
         "languages": ["German"]
       }
       ```

     **Options:**

     1. `db.countries.updateMany({ "region": "Europe", "languages": { $ne: "English" } }, { $addToSet: { "languages": "English" } })`
     2. `db.countries.updateMany({ "region": "Europe", "languages": { $exists: false } }, { $set: { "languages": ["English"] } })`
     3. `db.countries.updateMany({ "region": "Europe", "languages": { $nin: ["English"] } }, { $push: { "languages": "English" } })`
     4. `db.countries.updateMany({ "region": "Europe" }, { $addToSet: { "languages": "English" } })`

5. **Removing a Field from Multiple Documents:**

   - **Question:** You need to remove the `gini` field from all countries in "Africa." Which command will achieve this?

     - **Sample Document:**

       ```json
       {
         "name": "Algeria",
         "region": "Africa",
         "gini": 27.6
       }
       ```

     **Options:**

     1. `db.countries.updateMany({ "region": "Africa" }, { $unset: { "gini": "" } })`
     2. `db.countries.updateMany({ "region": "Africa" }, { $unset: { "gini": null } })`
     3. `db.countries.updateMany({ "region": "Africa" }, { $unset: { "gini": 1 } })`
     4. `db.countries.updateMany({ "region": "Africa" }, { $remove: { "gini": "" } })`

---

### **Answers for Section 2.5:**

1. **Answer:** _2._ `db.countries.updateMany({ "region": "South America" }, { $set: { "region": "Latin America" } })`
2. **Answer:** _1._ `db.countries.updateMany({ "region": "Americas" }, { $set: { "subregion": "Northern America", "timezones": ["UTC-05:00"] } })`
3. **Answer:** _1._ `db.countries.updateMany({ "population": { $gt: 100000000 } }, { $set: { "status": "Highly Populated" } })`
4. **Answer:** _1._ `db.countries.updateMany({ "region": "Europe", "languages": { $ne: "English" } }, { $addToSet: { "languages": "English" } })`
5. **Answer:** _1._ `db.countries.updateMany({ "region": "Africa" }, { $unset: { "gini": "" } })`

### 2.6: Deleting Documents

1. **Deleting a Single Document:**
   - **Question:** You want to delete the document for "Armenia" from the database. Which command should you use?
     - **Sample Document:**
       ```json
       {
         "name": "Armenia",
         "capital": "Yerevan"
       }
       ```
     **Options:**
     1. `db.countries.deleteOne({ "name": "Armenia" })`
     2. `db.countries.remove({ "name": "Armenia" })`
     3. `db.countries.delete({ "name": "Armenia" })`
     4. `db.countries.deleteOne({ "capital": "Yerevan" })`

2. **Deleting Multiple Documents:**
   - **Question:** You need to delete all documents where the `region` is "Oceania." Which command will delete all such documents?
     - **Sample Document:**
       ```json
       {
         "name": "Australia",
         "region": "Oceania"
       }
       ```
     **Options:**
     1. `db.countries.deleteMany({ "region": "Oceania" })`
     2. `db.countries.remove({ "region": "Oceania" })`
     3. `db.countries.delete({ "region": "Oceania" })`
     4. `db.countries.removeMany({ "region": "Oceania" })`

3. **Conditional Deletion:**
   - **Question:** Delete all documents for countries that have a `population` of less than 50,000. Which command should be used?
     - **Sample Document:**
       ```json
       {
         "name": "Andorra",
         "population": 77265
       }
       ```
     **Options:**
     1. `db.countries.deleteMany({ "population": { $lt: 50000 } })`
     2. `db.countries.delete({ "population": { $lt: 50000 } })`
     3. `db.countries.deleteMany({ "population": { $lte: 50000 } })`
     4. `db.countries.deleteMany({ "population": { $lt: 50000 } })`

4. **Deleting Based on Array Field:**
   - **Question:** Delete all documents for countries that have "Spanish" listed in their `languages` array. Which command is correct?
     - **Sample Document:**
       ```json
       {
         "name": "Argentina",
         "languages": ["Spanish"]
       }
       ```
     **Options:**
     1. `db.countries.deleteMany({ "languages": "Spanish" })`
     2. `db.countries.deleteMany({ "languages": { $in: ["Spanish"] } })`
     3. `db.countries.delete({ "languages": "Spanish" })`
     4. `db.countries.deleteMany({ "languages": { $all: ["Spanish"] } })`

5. **Deleting All Documents in a Collection:**
   - **Question:** You want to delete all documents in the `countries` collection while keeping the collection itself. Which command should you use?
     - **Sample Document:** (Applies to all documents in the collection)
     **Options:**
     1. `db.countries.deleteMany({})`
     2. `db.countries.delete({})`
     3. `db.countries.remove({})`
     4. `db.countries.drop()`

---

### **Answers for Section 2.6:**
1. **Answer:** 1. `db.countries.deleteOne({ "name": "Armenia" })`
2. **Answer:** 1. `db.countries.deleteMany({ "region": "Oceania" })`
3. **Answer:** 1. `db.countries.deleteMany({ "population": { $lt: 50000 } })`
4. **Answer:** 1. `db.countries.deleteMany({ "languages": "Spanish" })`
5. **Answer:** 1. `db.countries.deleteMany({})`

### 2.7: Querying Documents

1. **Simple Equality Query:**
   - **Question:** Which command would you use to find the document for "Austria"?
     - **Sample Document:**
       ```json
       {
         "name": "Austria",
         "capital": "Vienna"
       }
       ```
     **Options:**
     1. `db.countries.find({ "name": "Austria" })`
     2. `db.countries.findOne({ "name": "Austria" })`
     3. `db.countries.query({ "name": "Austria" })`
     4. `db.countries.get({ "name": "Austria" })`

2. **Querying with Logical Operators:**
   - **Question:** You need to find all documents where the `population` is greater than 50 million and the `region` is "Asia." Which command will retrieve these documents?
     - **Sample Document:**
       ```json
       {
         "name": "Bangladesh",
         "population": 164689383,
         "region": "Asia"
       }
       ```
     **Options:**
     1. `db.countries.find({ "population": { $gt: 50000000 }, "region": "Asia" })`
     2. `db.countries.find({ $and: [{ "population": { $gt: 50000000 } }, { "region": "Asia" }] })`
     3. `db.countries.find({ $or: [{ "population": { $gt: 50000000 } }, { "region": "Asia" }] })`
     4. `db.countries.find({ "population": { $gte: 50000000 }, "region": "Asia" })`

3. **Querying with Array Fields:**
   - **Question:** Which query will find all documents where "English" is one of the languages spoken?
     - **Sample Document:**
       ```json
       {
         "name": "Australia",
         "languages": ["English"]
       }
       ```
     **Options:**
     1. `db.countries.find({ "languages": "English" })`
     2. `db.countries.find({ "languages": { $in: ["English"] } })`
     3. `db.countries.find({ "languages": ["English"] })`
     4. `db.countries.find({ "languages": { $all: ["English"] } })`

4. **Querying with Regular Expressions:**
   - **Question:** How would you find all documents where the `name` field starts with the letter "B"?
     - **Sample Document:**
       ```json
       {
         "name": "Brazil",
         "capital": "Brasília"
       }
       ```
     **Options:**
     1. `db.countries.find({ "name": { $regex: "^B" } })`
     2. `db.countries.find({ "name": { $regex: "B" } })`
     3. `db.countries.find({ "name": { $regex: "B*" } })`
     4. `db.countries.find({ "name": { $regex: "^B", $options: "i" } })`

5. **Querying Nested Documents:**
   - **Question:** Which command would you use to find all documents where the currency code is "USD"?
     - **Sample Document:**
       ```json
       {
         "name": "Bahamas",
         "currencies": [
           {
             "code": "BSD",
             "name": "Bahamian dollar",
             "symbol": "$"
           },
           {
             "code": "USD",
             "name": "United States dollar",
             "symbol": "$"
           }
         ]
       }
       ```
     **Options:**
     1. `db.countries.find({ "currencies.code": "USD" })`
     2. `db.countries.find({ "currencies": { "code": "USD" } })`
     3. `db.countries.find({ "currencies": { $elemMatch: { "code": "USD" } } })`
     4. `db.countries.find({ "currencies.code": { $eq: "USD" } })`

---

### **Answers for Section 2.7:**
1. **Answer:** 1. `db.countries.find({ "name": "Austria" })`
2. **Answer:** 1. `db.countries.find({ "population": { $gt: 50000000 }, "region": "Asia" })`
3. **Answer:** 1. `db.countries.find({ "languages": "English" })`
4. **Answer:** 1. `db.countries.find({ "name": { $regex: "^B" } })`
5. **Answer:** 1. `db.countries.find({ "currencies.code": "USD" })`
