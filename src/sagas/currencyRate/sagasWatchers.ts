import { takeEvery } from 'typed-redux-saga';
import {workerGetCurrencyRate} from "./index";
import CurrencyTypes from "../../redux/converter/types";

const currencyWatchers = [
// @ts-ignore
  takeEvery(CurrencyTypes.GET_CURRENCY, workerGetCurrencyRate)
]

export default currencyWatchers;