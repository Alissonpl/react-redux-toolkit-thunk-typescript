import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { getSearch } from "../../services/index";
import SearchState from "../../@types/searchState";
import Search from "../../@types/search";
// export default interface MetaData {
//   total_hits: number;
// }
// export default interface LinksItems {
//   rel: string;
//   href: string;
//   render: string;
// }

// export default interface Items {
//   links: LinksItems;
//   data: any[];
//   href: string;
// }

// export default interface LinksCollection {
//   href: string;
//   prompt: string;
//   rel: string;
// }

// export default interface Collection {
//   href: string;
//   items: Items[];
//   links: LinksCollection[];
//   metadata: MetaData;
//   version: string;
// }
// export default interface Search {
//   collection: Collection;
//   status: string;
// }

// export default interface SearchState {
//   value: Search;
// }

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
