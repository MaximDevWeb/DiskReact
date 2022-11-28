import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * App state manager
 */

export interface AppState {
  search: string;
}

const initialState: AppState = {
  search: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    /**
     * Change search string
     */
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = appSlice.actions;
export default appSlice.reducer;
