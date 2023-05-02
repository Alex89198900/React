//import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

interface inputState {
  value: string;
}

const initialState: inputState = {
  value: '',
};

export const inputSliceM = createSlice({
  name: 'inputmemory',
  initialState,
  reducers: {
    incrementByAmountM: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { incrementByAmountM } = inputSliceM.actions;

export const selectCount = (state: RootState) => state.input.value;

export default inputSliceM.reducer;
