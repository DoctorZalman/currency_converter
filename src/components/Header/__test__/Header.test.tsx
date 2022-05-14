import { render } from '@testing-library/react';
import React from "react";
import Header from "../index";

describe('Header component', () => {
  test('render Header component', () => {
    const screen = render(<Header />);
    expect(screen).toBeTruthy();
  });
});

