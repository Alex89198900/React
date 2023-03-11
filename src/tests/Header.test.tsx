import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';

describe('renders learn react link', () => {
  it('Renders header', () => {
    render(<App />);
  });
  it('Route about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About page');
  });
  it('Route not found', () => {
    render(
      <MemoryRouter initialEntries={['/jjjjfjfj']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ops 404');
  });
});
