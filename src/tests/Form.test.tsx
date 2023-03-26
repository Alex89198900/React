import { test } from 'vitest';
import { render } from '@testing-library/react';
import Listform from '../components/Listforms';
import React from 'react';

describe('Form', () => {
  test('Form', () => {
    // render(<Listform />);
    const input = document.querySelector('#name') as HTMLInputElement | null;
    //expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');
    }
  });
});
