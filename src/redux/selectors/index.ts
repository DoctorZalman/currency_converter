const currencySelectors = ({currencyRate}: any) => currencyRate.currency.result || '';

export default currencySelectors;
