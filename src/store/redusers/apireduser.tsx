//import { createApi } from '@reduxjs/toolkit/query/react';
import createApi from './createApi';
import { CardType } from 'model';
import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';
import { REHYDRATE } from 'redux-persist';
type TypeRtkQuery = typeof rtkQuery & { default?: unknown };
const { fetchBaseQuery } = ((rtkQuery as TypeRtkQuery).default ?? rtkQuery) as typeof rtkQuery;

export interface QweryType {
  products: CardType[];
  initProd: CardType[];
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products/' }),

  endpoints: (builder) => ({
    getStoreData: builder.query<QweryType, string>({
      query: (name) => `/${name}`,
    }),
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
});

export const { useLazyGetStoreDataQuery } = storeApi;
