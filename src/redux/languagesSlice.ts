import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface LanguagesState {
  value: string;
}

const initialState: LanguagesState = {
  value: "ru",
};

export const languagesSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    english: state => {
      state.value = "en";
    },
    russian: state => {
      state.value = "ru";
    },
    ukrainian: state => {
      state.value = "ua";
    },
  },
});

export const { english, russian, ukrainian } = languagesSlice.actions;
export const selectLanguage = (state: RootState) => state.language.value;

export default languagesSlice.reducer;
