import {call, put} from "typed-redux-saga";
import {currencyAPI} from "../../api";
import {getCurrencyError, getCurrencySuccess, IConvertPayload} from "../../redux/converter/actionCreators";

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