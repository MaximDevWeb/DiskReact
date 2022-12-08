import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadProgress } from "../../types/stores";

/**
 * Upload state manager
 */

export interface UploadState {
  files: Array<File>;
  progress: Array<UploadProgress>;
}

const initialState: UploadState = {
  files: [],
  progress: [],
};

export const UploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    /**
     * The function of add FileList in current Files
     */
    addFiles: (state, action: PayloadAction<FileList>) => {
      for (const file of action.payload) {
        state.files.push(file);
      }
    },
    /**
     * The function of remove File from current FileList
     */
    removeFile: (state, action: PayloadAction<File>) => {
      state.files = state.files.filter(
        (item) => item.name !== action.payload.name
      );
    },
    /**
     * The function of clean FileList
     */
    cleanFiles: (state) => {
      state.files = [];
    },
    /**
     * The function add progress by filename
     */
    addProgress: (state, action: PayloadAction<UploadProgress>) => {
      const progressItem = state.progress.find(
        (item: UploadProgress) => item.fileName === action.payload.fileName
      );

      if (progressItem) {
        progressItem.progress = action.payload.progress;
      } else {
        state.progress.push(action.payload);
      }
    },
  },
});

export const { addFiles, removeFile, cleanFiles, addProgress } =
  UploadSlice.actions;
export default UploadSlice.reducer;
