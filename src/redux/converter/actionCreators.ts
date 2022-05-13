import CurrencyTypes from "./types";
import {IConvertPayload, ICurrencyRate, ILatestRate} from "../../interfaces";

export const getCurrency = (payload: IConvertPayload) => ({ type: CurrencyTypes.GET_CURRENCY, payload });
export const getCurrencySuccess = (payload: ICurrencyRate[]) => ({ type: CurrencyTypes.GET_CURRENCY_SUCCESS, payload });
export const getCurrencyError = (payload: string) => ({ type: CurrencyTypes.GET_CURRENCY_ERROR, payload });

export const getLatest = () => ({ type: CurrencyTypes.GET_LATEST_RATE});
export const getLatestRateSuccess = (payload: ILatestRate[]) => ({ type: CurrencyTypes.GET_LATEST_RATE_SUCCESS, payload });
export const getLatestRateError = (payload: string) => ({ type: CurrencyTypes.GET_LATEST_RATE_ERROR, payload });