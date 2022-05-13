export const currencySelectors = ({currencyRate}: any) => currencyRate.currency.result || '';

export const latestRateSelectors = ({currencyRate}: any) => currencyRate.latest.rates || '';
