import { ACCOUNT_NUMBERS, TTxn, USERNAMES, USERS_WITH_ACCOUNTS } from "./data";

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

function generateRandomNum<T>(arr: T[]) {
  return Math.floor(Math.random() * arr.length);
}
export function getRandomN<T>(data: T[], n: number): T[] {
  let res = new Array<T>(n);
  const indexes: number[] = [];

  const fillIndexes = () => {
    let temp = generateRandomNum(data);

    while (indexes.includes(temp)) {
      temp = generateRandomNum(data);
    }

    indexes.push(temp);

    if (indexes.length !== n) {
      fillIndexes();
    }
  };
  fillIndexes();

  for (let i = 0; i < res.length; i++) {
    res[i] = data[indexes[i]];
  }

  return res;
}

export function getUserAccountsToDelete(randomName: string, n: number) {
  // Filter array to match users object. Destructure the matched user object.
  const [{ accounts, username }] = USERS_WITH_ACCOUNTS.filter(
    ({ username, accounts }) => {
      return (
        randomName === username && {
          username,
          accounts,
        }
      );
    }
  );

  // If found user has accounts less than `n`, log to console and recurse with a different username.
  if (accounts.length < n) {
    console.error(
      `User has ${accounts.length} account(s)! Getting user with at least ${n} accounts...`
    );

    return getUserAccountsToDelete(getRandom(USERNAMES), n);
  }

  // Return username and array with `n` accounts for deletion.
  return {
    username,
    accountsToDelete: getRandomN(accounts, n),
  };
}
