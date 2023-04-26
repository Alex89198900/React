import { PreloadedState } from '@reduxjs/toolkit';
import { storeApi } from './redusers/apireduser';
import { setupListeners } from '@reduxjs/toolkit/query';
import inputSlice from './redusers/searchreduser';
import inputSliceM from './redusers/searchmemory';
import formReducer from './redusers/reduserform';
import * as toolkitRaw from '@reduxjs/toolkit';
import sliceApissr from './redusers/ssr-reduser';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
const rootReducer = combineReducers({
  form: formReducer,
  [storeApi.reducerPath]: storeApi.reducer,
  input: inputSlice,
  inputm: inputSliceM,
  inputmemory: sliceApissr,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
    preloadedState,
  });
};
export default setupStore;
setupListeners(setupStore().dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
