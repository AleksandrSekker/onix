import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface CheckedState {
  value: boolean;
}

const initialState: CheckedState = {
  value: false
};

export const checkedSlice = createSlice({
  name: 'checked',
  initialState,
  reducers: {
    switching: (state) => {
      state.value = !state.value;
    }
  }
});

export const { switching } = checkedSlice.actions;
export const selectCheck = (state: RootState) => state.checked.value;

export default checkedSlice.reducer;
