import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import List from '../components/List';
import React from 'react';
import { elem } from './datatest';
import { Provider } from 'react-redux';
import setupStore from '../store/store';
const store = setupStore({});

describe('Aboutus', () => {
  it('Renders List', () => {
    render(
      <Provider store={store}>
        <List elem={elem} />
      </Provider>
    );
  });
});
