//import { createSlice } from '@reduxjs/toolkit';
import { CustomElementType } from '../../pages/Form';
import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

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
