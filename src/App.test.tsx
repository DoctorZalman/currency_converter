import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('render App component', () => {
    const screen = render(<App />);
    expect(screen).toBeTruthy();
  });
});
