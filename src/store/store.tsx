import { configureStore } from '@reduxjs/toolkit';
import { storeApi } from './redusers/apireduser';
import { setupListeners } from '@reduxjs/toolkit/query';
import inputSlice from './redusers/searchreduser';
import inputSliceM from './redusers/searchmemory';
import formReducer from './redusers/reduserform';

export const store = configureStore({
  reducer: {
    form: formReducer,
    [storeApi.reducerPath]: storeApi.reducer,
    input: inputSlice,
    inputm: inputSliceM,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
