import { CardType } from 'model';

import * as toolkitRaw from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { storeApi } from './apireduser';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

interface QweryTypeInit {
  search: string | undefined;
  initProd: {
    products: CardType[];
  };
}
const initialState: QweryTypeInit = {
  search: undefined,
  initProd: {
    products: [],
  },
};

export const sliceApissr = createSlice({
  name: 'inputmemory',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(storeApi.endpoints.getStoreData.matchFulfilled, (state, { payload }) => {
      state.initProd = payload;
    });
  },
});

export const { setSearch } = sliceApissr.actions;
export default sliceApissr.reducer;
