import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from '../pages/Aboutus';

describe('input', () => {
  test('The input field and its props', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const input = document.querySelector('.input') as HTMLInputElement;

    expect(input?.textContent).toBe(undefined);

    if (input) {
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');
    }
  });
});
