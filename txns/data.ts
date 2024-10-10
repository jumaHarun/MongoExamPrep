import { Document } from "mongodb";
export const accountNumbers = [
  371138, 557378, 198100, 674364, 278603, 383777, 794875, 328304, 487188,
  910579, 260499, 668949, 976027, 135185, 370583, 870466, 692278, 864905,
  299072, 137994, 572981, 977982, 616040, 775273, 212024, 433811, 353465,
  464470, 324287, 403363, 276528, 383701, 423171, 491860, 463155, 729049,
  209363, 895735, 996263,
];
export const symbols = [
  "fb",
  "goog",
  "adbe",
  "amzn",
  "amd",
  "sap",
  "ebay",
  "csco",
  "nvda",
  "aapl",
  "ibm",
  "crm",
  "bb",
  "intc",
  "team",
  "msft",
  "nflx",
  "znga",
];

type TTxn = {
  date: Date;
  amount: number;
  transaction_code: "buy" | "sell";
  symbol: string;
  price: string;
  total: string;
};
export interface DBTxn extends Document {
  account_id: number;
  transaction_count: number;
  bucket_start_date: Date;
  bucket_end_date: Date;
  transactions: TTxn[];
}

type TTierAndDetails = {
  [key: string]: {
    tier: string;
    id: string;
    active: boolean;
    benefits: string[];
  };
};
export interface DBCustomer extends Document {
  username: string;
  name: string;
  address: string;
  birthdate: Date;
  email: string;
  active: boolean;
  accounts: number[];
  tier_and_details: TTierAndDetails;
}

export interface DBAccount extends Document {
  account_id: number;
  limit: number;
  products: string[];
}
