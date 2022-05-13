export interface ICurrencyRate {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

export interface IConvertPayload {
  amount: string,
  from: string,
  to: string
}

export interface ILatestRatePayload {
  base: string
}

export interface ILatestRate {
  motd: IMotd;
  success: boolean;
  base: string;
  date: string;
  rates: IRates;
}

export interface IMotd {
  msg: string;
  url: string;
}

export interface IRates {
  [key: string]: number;
}

