import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../configureStore";
import { getSearch } from "../../services/index";

export interface SearchState {
  value: string;
}

interface GenericState<T> {
  data?: T;
}

const initialState: SearchState = {
  value: "",
};

export const searchAsync = createAsyncThunk(
  "search/getSearch",
  async (amount: string) => {
    const response = await getSearch(amount);
    console.log(response);
    return response;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const selectSearch = (state: RootState) => state.dataSearch.value;

export default searchSlice.reducer;
