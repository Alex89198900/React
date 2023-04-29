import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from '../pages/Aboutus';

describe('About', () => {
  it('should have "about us" text', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent(/About page/i);
  });
});
