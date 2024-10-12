import { ACCOUNT_NUMBERS, TTxn } from "./data";

export function getRandom<T>(arr: T[]): T {
  const idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
}

export function getRandomTwo<T>(arr: T[]): [T, T] {
  const res = [null, null] as [T, T];

  const idx1 = Math.floor(Math.random() * arr.length);
  const idx2 = Math.floor(Math.random() * arr.length);

  if (idx1 === idx2) {
    getRandomTwo(arr);
  } else {
    res[0] = arr[idx1];
    res[1] = arr[idx2];
  }
  return res;
}

export function buildTxn(
  amount: number,
  code: "buy" | "sell",
  symbol: string,
  price: number
): TTxn {
  return {
    date: new Date(),
    amount,
    transaction_code: code,
    symbol,
    price: price.toString(),
    total: (amount * price).toString(),
  };
}

export function createAccountID(): number {
  let res: number;
  const d1 = Math.floor(Math.random() * 10) * 100000;
  if (d1 < 500000) {
    return createAccountID();
  }
  const d2 = Math.floor(Math.random() * 10) * 10000;
  const d3 = Math.floor(Math.random() * 10) * 1000;
  const d4 = Math.floor(Math.random() * 10) * 100;
  const d5 = Math.floor(Math.random() * 10) * 10;
  const d6 = Math.floor(Math.random() * 10);

  const temp = d1 + d2 + d3 + d4 + d5 + d6;

  const isInUse = ACCOUNT_NUMBERS.find((id) => id === temp);
  if (isInUse) {
    return createAccountID();
  } else {
    res = temp;
  }

  return res;
}
