import React from 'react';
import CurrencyConverter from "../index";
import {render} from "@testing-library/react";

describe('Currency Converter', () => {
  test('Currency Converter should be in the document', () => {
    const { getByText } = render(<CurrencyConverter />);
    const linkElement = getByText(/Currency Converter/i);
    expect(linkElement).toBeInTheDocument();
  });
});
