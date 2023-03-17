import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import List from '../components/List';
import React from 'react';

describe('Aboutus', () => {
  it('Renders hello', () => {
    render(<List />);
  });
});
