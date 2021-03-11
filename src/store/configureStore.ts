import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { countSlice } from './slices/index';
export const store = configureStore({
  reducer: {
    counter: countSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
