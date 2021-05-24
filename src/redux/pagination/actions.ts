import { RootState } from '../store';
import { paginateSlice } from './reducers';

export const { currentPosts } = paginateSlice.actions;
export const selectPagination = (state: RootState) => state.paginate.value;
export const selectError = (state: RootState) => state.paginate.error;

export default paginateSlice.reducer;
