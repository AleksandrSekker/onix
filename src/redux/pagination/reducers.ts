import { createSlice } from '@reduxjs/toolkit';
import PAGINATE from './types';

interface PaginateState {
  value: any;
}

const initialState: PaginateState = {
  value: []
};
export const paginateSlice = createSlice({
  name: PAGINATE,
  initialState,
  reducers: {
    currentPosts: (state, actions) => {
      state.value = actions.payload;
    }
  }
});
export default paginateSlice.reducer;
