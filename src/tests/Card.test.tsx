import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../components/Card';
import React from 'react';
import { data } from '../data';

describe('Aboutus', () => {
  it('Renders hello', () => {
    render(<Card num={data[0]} />);
  });
});
