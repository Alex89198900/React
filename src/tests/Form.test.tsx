import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Form from '../pages/Form';
import userEvent from '@testing-library/user-event';
describe('Form', () => {
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
    const input2 = screen.getByRole('textbox');
    const user = userEvent.setup();
    await user.clear(input2);
    await user.type(input2, '2023-03-26');
    expect(input2).toHaveValue('2023-03-26');
  });
});
