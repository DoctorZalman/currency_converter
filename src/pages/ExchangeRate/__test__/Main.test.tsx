import { render } from '@testing-library/react';
import Main from '../index';
import React from 'react';

describe('Main page', () => {
  test('Main page should be in the document', () => {
    const { getByText } = render(<Main />);
    const linkElement = getByText(/Main page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
