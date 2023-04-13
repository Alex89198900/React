import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomElementType } from '../../pages/Form';

const initialState = [] as CustomElementType[];

const formSlice = createSlice({
  name: 'formArr',
  initialState,
  reducers: {
    addForm: {
      reducer: (state, action: PayloadAction<CustomElementType>) => {
        state.push(action.payload);
      },
      prepare: (data: CustomElementType) => ({
        payload: data as CustomElementType,
      }),
    },
  },
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;
