import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface inputState {
  value: string;
}

const initialState: inputState = {
  value: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { incrementByAmount } = inputSlice.actions;

export const selectCount = (state: RootState) => state.input.value;

export default inputSlice.reducer;
