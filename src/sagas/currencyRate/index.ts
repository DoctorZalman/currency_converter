import {call, put} from "typed-redux-saga";
import {currencyAPI} from "../../api";
import {
  getCurrencyError,
  getCurrencySuccess,
  getLatestRateError,
  getLatestRateSuccess
} from "../../redux/converter/actionCreators";
import {IConvertPayload} from "../../interfaces";

// @ts-ignore
export function* workerGetCurrencyRate({payload}: IConvertPayload) {

  try {
    const { data } = yield call(currencyAPI.getCurrencyRate, payload);

    yield put(getCurrencySuccess(data));
  } catch ({ message }) {
    // @ts-ignore
    yield put(getCurrencyError(message));
  }
}

// @ts-ignore
export function* workerGetLatestRate() {

  try {
    const { data } = yield call(currencyAPI.getLatestRate);

    yield put(getLatestRateSuccess(data));
  } catch ({ message }) {
    // @ts-ignore
    yield put(getLatestRateError(message));
  }
}