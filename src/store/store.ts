import { configureStore } from '@reduxjs/toolkit';
import { clothesApi } from './clothes/clothes.api';


export const store = configureStore({
  reducer: {
    [clothesApi.reducerPath]: clothesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(clothesApi.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
