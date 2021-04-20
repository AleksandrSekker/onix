import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import checkedReducer from '../redux/checkedSlice';
import languageReducer from '../redux/languagesSlice';

export const store = configureStore({
  reducer: {
    checked: checkedReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
