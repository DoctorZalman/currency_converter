import { takeEvery } from 'typed-redux-saga';
import {workerGetCurrencyRate, workerGetLatestRate} from "./index";
import CurrencyTypes from "../../redux/converter/types";

const currencyWatchers = [
// @ts-ignore
  takeEvery(CurrencyTypes.GET_CURRENCY, workerGetCurrencyRate),
  // @ts-ignore
  takeEvery(CurrencyTypes.GET_LATEST_RATE, workerGetLatestRate),
]

export default currencyWatchers;