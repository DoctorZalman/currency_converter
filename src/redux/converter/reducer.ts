import CurrencyTypes from './types';

const initialState = {
  currency: {},
  latest: {},
  isLoading: false,
  error: null,
};

const currencyRateReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case CurrencyTypes.GET_CURRENCY:
      return {...state, isLoading: true};

    case CurrencyTypes.GET_CURRENCY_SUCCESS:
      return {...state, isLoading: false, currency: payload};

    case CurrencyTypes.GET_CURRENCY_ERROR:
      return {...state, isLoading: false, error: payload};

    case CurrencyTypes.GET_LATEST_RATE:
      return {...state, isLoading: true};

    case CurrencyTypes.GET_LATEST_RATE_SUCCESS:
      return {...state, isLoading: false, latest: payload};

    case CurrencyTypes.GET_LATEST_RATE_ERROR:
      return {...state, isLoading: false, error: payload};

    default:
      return state;
  }
};

export default currencyRateReducer;
