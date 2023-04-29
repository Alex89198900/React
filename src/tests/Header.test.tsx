import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Aboutus', () => {
  it('Renders Card', () => {
    render(
      <BrowserRouter>
        <Header title="test" />
      </BrowserRouter>
    );
  });
});
