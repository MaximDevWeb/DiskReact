/**
 * Folders state manager
 */
import { createSlice } from "@reduxjs/toolkit";

export interface FoldersState {}

const initialState: FoldersState = {};

export const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {},
});

export const {} = folderSlice.actions;
export default folderSlice.reducer;
