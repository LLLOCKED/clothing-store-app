import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './clothes.type';

export const clothesApi = createApi({
  reducerPath: 'clothes/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/clothes'
  }),
  endpoints: (build) => {
    return {
      getList: build.query<Product[], number>({
        query: (limit = 5) => {
          return `?_limit=${limit}`;
        }
      }),
      getNew: build.query<Product, any>({
        query: () => {
          return '/1';
        }
      })
    };
  }
});

export const { useGetListQuery, useGetNewQuery } = clothesApi;
