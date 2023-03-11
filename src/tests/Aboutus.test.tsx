import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Aboutus from '../pages/Aboutus';
import React from 'react';

describe('Aboutus', () => {
  it('Renders hello', () => {
    render(<Aboutus />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About page');
  });
});
