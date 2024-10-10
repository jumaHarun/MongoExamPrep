# Transactions

## sample_analytics database

### **Level 1: Beginner**

1. **Creating a New Transaction**

   - Scenario: You need to insert a new `buy` transaction for the account with `account_id: 371138`.
   - **Task**: Write a transaction that adds a new transaction for the symbol `tsla` with the amount of 1500 shares at a price of $25.50 and a total of $38,250.

2. **Updating an Account’s Limit**

   - Scenario: The account with `account_id: 371138` needs its credit limit updated from $9000 to $10,500.
   - **Task**: Create a transaction that updates the `limit` field of the specified account and ensure it’s part of an atomic operation.

3. **Adding a Product to an Account**
   - Scenario: The account with `account_id: 371138` should be updated to include a new product, “CurrencyExchange,” alongside its current products.
   - **Task**: Use a transaction to update the `products` array by adding “CurrencyExchange” without modifying the other products.

---

### **Level 2: Intermediate**

1. **Transfer Funds Between Accounts**

   - Scenario: You want to transfer $2,500 from the account `account_id: 371138` to the account `account_id: 443178`.
   - **Task**: Write a MongoDB transaction that deducts $2,500 from one account’s balance and adds $2,500 to the other account, while also creating a new transaction entry for both.

2. **Batch Insert Transactions**

   - Scenario: You need to insert multiple transactions for an account with `account_id: 443178` in one go.
   - **Task**: Write a transaction that inserts two new transactions: one `buy` for 500 shares of `aapl` at $135, and one `sell` for 300 shares of `msft` at $240. Ensure both are part of a single transaction.

3. **Revert Changes if Insertion Fails**
   - Scenario: You are attempting to insert a new account document and a new transaction in two separate collections.
   - **Task**: Write a transaction that inserts a new document into the `accounts` collection and creates a new transaction in the `transactions` collection. If the transaction creation fails, roll back the new account insertion.

---

### **Level 3: Advanced**

1. **Customer Account Closure**

   - Scenario: A customer with `username: "fmiller"` has requested to close two of their accounts, `account_id: 276528` and `account_id: 332179`.
   - **Task**: Write a transaction that removes these two accounts from the customer’s `accounts` array and deletes the corresponding account documents from the `accounts` collection. Ensure that both actions are rolled back if either one fails.

2. **Consolidate Transactions into a Summary**

   - Scenario: You want to calculate the total value of all the transactions (both `buy` and `sell`) for the account `account_id: 443178` within the year 2014.
   - **Task**: Write a transaction that first retrieves and sums the `total` field for all transactions in the year 2014, then updates the `transactions_summary` field for that account with the calculated value.

3. **Update Multiple Documents Based on Criteria**
   - Scenario: You need to deactivate all customers born before 1980.
   - **Task**: Write a transaction that updates the `active` field to `false` for all customers born before 1980. Roll back if any one of the updates fails.

---

### **Level 4: Expert**

1. **Simulate a Failed Stock Purchase**

   - Scenario: A customer attempts to purchase shares, but if the price of the stock goes above a certain limit during the transaction, it should abort.
   - **Task**: Write a transaction that inserts a new `buy` transaction for `symbol: "goog"` with 1000 shares at a price of $1,000. However, if the price exceeds $1,050 during the transaction process, the entire operation should abort.

2. **Revert Changes Based on Transaction Type**

   - Scenario: If a customer sells stocks for a certain symbol (e.g., `msft`), you need to reduce their holding in that symbol. But if they later attempt to buy the same stock, you need to increase their holdings. If any error occurs during the update process, the entire operation should be rolled back.
   - **Task**: Write a transaction that adjusts the holdings for the customer `fmiller` based on the stock symbol for both `buy` and `sell` transactions.

3. **Complex Transaction Across Multiple Accounts**
   - Scenario: You want to credit one account and debit another in a series of steps. If any one step fails, you must roll back all changes.
   - **Task**: Write a transaction that deducts $10,000 from `account_id: 371138`, adds $5,000 to `account_id: 443178`, and moves $5,000 into a holding account. Ensure all steps occur atomically.

---

### **Level 5: Aggregation (Special Level)**

1. **Calculate Total Transactions by Symbol**

   - Scenario: You want to get an overview of all transactions grouped by stock symbol.
   - **Task**: Use the aggregation framework to group all transactions by `symbol` and calculate the total value of `buy` and `sell` transactions for each stock.

2. **Find the Highest Transaction Value per Customer**

   - Scenario: You need to find the highest value transaction for each customer in the `transactions` collection.
   - **Task**: Write an aggregation query to group transactions by `account_id` and find the maximum `total` for each customer.

3. **Average Transaction Amount per Account**
   - Scenario: You want to calculate the average transaction amount for each account.
   - **Task**: Write an aggregation query to group transactions by `account_id` and calculate the average `amount` for each account.

---
