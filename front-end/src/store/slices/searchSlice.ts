import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../configureStore';
import { getSearch } from '../../services/index';

export interface SearchState {
    value: string;
}

const initialState: SearchState = {
    value: '',
};

export const searchAsync = createAsyncThunk('search/getSearch', async (amount: string) => {
    const response = await getSearch(amount);
    return response;
});

export const searchSlice = createSlice({
    name: 'search',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder.addCase(searchAsync.fulfilled, (state, action) => {
            state.value += action.payload;
        });
    },
});

export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
