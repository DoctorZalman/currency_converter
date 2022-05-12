import Header from '../index';
import { render } from '@testing-library/react';

describe('Header component', () => {
  test('Title should be in the document', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/React baseline app/i);
    expect(linkElement).toBeInTheDocument();
  });
});
