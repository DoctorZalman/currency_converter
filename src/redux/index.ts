import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import currencyRateReducer from "./converter/reducer";

const rootReducer = combineReducers({
  currencyRate: currencyRateReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
