import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FileType } from "../../types/stores";

/**
 * Files state manager
 */

export interface FilesState {
  style: string;
  filter: string;
  editFile: FileType | null;
  modalFileVisible: boolean;
  filePerPage: number;
  currentPage: number;
}

const initialState: FilesState = {
  style: localStorage.getItem("style") ?? "list",
  filter: "",
  editFile: null,
  modalFileVisible: false,
  filePerPage: 50,
  currentPage: 1,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    /**
     *Set style files
     */
    setStyle: (state, action: PayloadAction<string>) => {
      state.style = action.payload;
      localStorage.setItem("style", action.payload);
    },
    /**
     *Set style filter
     */
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    /**
     * Set current page
     */
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    /**
     * Set edit file
     */
    setEditFile: (state, action: PayloadAction<FileType | null>) => {
      state.editFile = action.payload;
    },
    /**
     *Set modal file visible
     */
    setModalFileVisible: (state, action: PayloadAction<boolean>) => {
      state.modalFileVisible = action.payload;
    },
  },
});

export const {
  setStyle,
  setFilter,
  setPage,
  setEditFile,
  setModalFileVisible,
} = filesSlice.actions;
export default filesSlice.reducer;
