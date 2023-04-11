import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import List from '../components/List';
import React from 'react';
import { elem } from './datatest';
describe('Aboutus', () => {
  it('Renders List', () => {
    render(<List elem={elem} />);
  });
});
