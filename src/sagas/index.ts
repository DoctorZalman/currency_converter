import { all } from 'typed-redux-saga';
import currencyWatchers from "./currencyRate/sagasWatchers";

export default function* rootSaga() {
  yield all([...currencyWatchers]);
}
