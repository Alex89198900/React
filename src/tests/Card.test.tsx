import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../components/Card';
import React from 'react';
import { cardTest } from './datatest';
import { Provider } from 'react-redux';
import setupStore from '../store/store';
const store = setupStore({});

describe('Aboutus', () => {
  it('Renders Card', () => {
    render(
      <Provider store={store}>
        <Card num={cardTest} />
      </Provider>
    );
  });
});
