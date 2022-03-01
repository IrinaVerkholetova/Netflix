import React from 'react';
import { render, screen } from '@testing-library/react';

import { Netflix } from './../logo/logo';

const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => mockedNavigator,
}));

describe('Netflix', () => {
  it('should be display footer by text', () => {
    const { container } = render(<Netflix />);
    screen.debug();
    // const element = getByText('/netflix/i');
    // screen.debug();
    expect(container.querySelector('.titleContainer')).toBeInTheDocument();
  });
});
