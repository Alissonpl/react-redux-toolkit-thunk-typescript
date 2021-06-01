import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { getSearch } from "../../services/index";
import SearchState from "../../@types/searchState";
import Search from "../../@types/search";

const initialState: SearchState = {
  value: { collection: null, status: "" },
};

export const searchAsync = createAsyncThunk(
  "search/getSearch",
  async (amount: string) => {
    const { collection } = await getSearch(amount);
    const status = await "ativo";
    return { collection, status };
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      searchAsync.fulfilled,
      (state, action: PayloadAction<Search>) => {
        state.value = action.payload;
      }
    );
  },
});

export const selectSearch = (state: RootState) => state.dataSearch.value;

export default searchSlice.reducer;
