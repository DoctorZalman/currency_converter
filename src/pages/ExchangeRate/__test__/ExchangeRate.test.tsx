import { render } from '@testing-library/react';
import React from 'react';
import ExchangeRate from "../index";

describe('Exchange Rate page', () => {
  test('Exchange Rate page should be in the document', () => {
    const { getByText } = render(<ExchangeRate />);
    const linkElement = getByText(/Exchange Rate page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
