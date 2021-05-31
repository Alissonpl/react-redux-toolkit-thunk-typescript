import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { getSearch } from "../../services/index";

interface MetaData {
  total_hits: number;
}
interface LinksItems {
  rel: string;
  href: string;
  render: string;
}

interface Items {
  links: LinksItems;
  data: any[];
  href: string;
}

interface LinksCollection {
  href: string;
  prompt: string;
  rel: string;
}

interface Collection {
  href: string;
  items: Items[];
  links: LinksCollection[];
  metadata: MetaData;
  version: string;
}
interface Search {
  collection: Collection;
  status: string;
}

interface SearchState {
  value: Search;
}

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
