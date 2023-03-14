import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Cards from '../components/Cards';
import React from 'react';

describe('Aboutus', () => {
  it('Renders hello', () => {
    render(<Cards />);
  });
});
