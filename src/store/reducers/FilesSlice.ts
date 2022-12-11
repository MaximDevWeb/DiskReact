import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Files state manager
 */

export interface FilesState {
  style: string;
  filter: string;
}

const initialState: FilesState = {
  style: localStorage.getItem("style") ?? "list",
  filter: "",
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    /**
     *Set style files auth
     */
    setStyle: (state, action: PayloadAction<string>) => {
      state.style = action.payload;
      localStorage.setItem("style", action.payload);
    },
    /**
     *Set style filter auth
     */
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setStyle, setFilter } = filesSlice.actions;
export default filesSlice.reducer;
