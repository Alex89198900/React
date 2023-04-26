import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routeses from '../components/Router';
import { Provider } from 'react-redux';
import setupStore from '../store/store';
const store = setupStore({});

describe('Header', () => {
  it('Route about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Provider store={store}>
          <Routeses />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About page');
  });
  it('Route not found', () => {
    render(
      <MemoryRouter initialEntries={['/jjjjfjfj']}>
        <Provider store={store}>
          <Routeses />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ops 404');
  });
});
