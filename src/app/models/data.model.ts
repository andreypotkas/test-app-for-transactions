export interface ITransaction {
  _id: string;
  amount: string;
  type: string;
  name: IName;
  company: string;
  email: string;
  phone: string;
  address: string;
}

interface IName {
  first: string;
  last: string;
}

export interface ITransactionList {
  total: number;
  data: ITransaction[];
}

export enum Type {
  income = 'income',
  outcome = 'outcome',
  loan = 'loan',
  investment = 'investment',
}
