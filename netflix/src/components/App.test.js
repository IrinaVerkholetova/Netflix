import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should be display app', () => {
    // const { getByText } =
    render(<App />);
    screen.debug();
    // const element = getByText('/loading/i');
    // expect(element).toBeInTheDocument();
  });
});
