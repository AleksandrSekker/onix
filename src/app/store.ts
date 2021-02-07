import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import checkedReducer from '../redux/checked/checkedSlice';

export const store = configureStore({
  reducer: {
    checked: checkedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
