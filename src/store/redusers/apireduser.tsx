import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardType } from 'model';

interface QweryType {
  products: CardType[];
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
});

export const { useLazyGetStoreDataQuery } = storeApi;
