import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../components/Card';
import React from 'react';
import { cardTest } from './datatest';

describe('Aboutus', () => {
  it('Renders Card', () => {
    render(<Card num={cardTest} />);
  });
});
