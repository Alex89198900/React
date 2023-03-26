import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Form from '../pages/Form';

describe('<ProjectForm />', () => {
  const setup = () => {
    render(
      <HashRouter>
        <Form />
      </HashRouter>
    );
  };
  test('should accept input', async () => {
    setup();
    const input = document.querySelector('#name') as HTMLInputElement | null;
    expect(input).toBeTruthy();

    expect(input?.textContent).toBe('');

    if (input) {
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');
    }
  });
});
