import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CheckedState {
  value: boolean;
}

const initialState: CheckedState = {
  value: false,
};

export const checkedSlice = createSlice({
  name: 'checked',
  initialState,
  reducers: {
    switching: (state) => {
      state.value = !state.value;
    },
  },
});

export const { switching } = checkedSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCheck = (state: RootState) => state.checked.value;

export default checkedSlice.reducer;
