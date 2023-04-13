import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardType } from 'model';

// Define a service using a base URL and expected endpoints
export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products/' }),
  endpoints: (builder) => ({
    getStoreData: builder.query<CardType, string>({
      query: (name) => `/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStoreDataQuery } = storeApi;
