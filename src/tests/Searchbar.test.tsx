import { test } from 'vitest';
import { render } from '@testing-library/react';
import Searchbar from '../components/Searchbar';
import React from 'react';

describe('input', () => {
  test('The input field and its props', () => {
    render(<Searchbar />);
    const input = document.querySelector('.input') as HTMLInputElement | null;
    expect(input).toBeTruthy();

    expect(input?.textContent).toBe('');

    if (input) {
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');
    }
  });
});
