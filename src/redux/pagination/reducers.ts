import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import PAGINATE from './types';

interface PaginateState {
  value: [];
  error: boolean;
}

const initialState: PaginateState = {
  value: [],
  error: false
};
export const fetchData: any = createAsyncThunk('pagination/fetchData', async (count) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await response.json();
  const newArr = json.map((x: object) => ({
    ...x,
    id: uuid()
  }));
  return newArr.slice(0, count);
});
export const paginateSlice = createSlice({
  name: PAGINATE,
  initialState,
  reducers: {
    currentPosts: (state, actions) => {
      state.value = actions.payload;
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, actions) => {
      state.value = actions.payload;
    },
    [fetchData.rejected]: (state) => {
      state.error = true;
    },
  }
});
export default paginateSlice.reducer;
