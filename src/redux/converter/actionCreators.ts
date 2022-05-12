import CurrencyTypes from "./types";
import {ICurrencyRate} from "../../interfaces";

export interface IConvertPayload {
  amount: string,
  from: string,
  to: string
}

export const getCurrency = (payload: IConvertPayload) => ({ type: CurrencyTypes.GET_CURRENCY, payload });
export const getCurrencySuccess = (payload: ICurrencyRate[]) => ({ type: CurrencyTypes.GET_CURRENCY_SUCCESS, payload });
export const getCurrencyError = (payload: string) => ({ type: CurrencyTypes.GET_CURRENCY_ERROR, payload });