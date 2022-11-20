import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/**
 * Upload state manager
 */

export interface UploadState {
  files: Array<File>
}

const initialState: UploadState = {
  files: []
}

export const UploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    /**
     * The function of add FileList in current Files
     */
    addFiles: (state, action: PayloadAction<FileList>) => {
      for (const file of action.payload) {
        state.files.push(file);
      }
    }
  }
});

export const { addFiles } = UploadSlice.actions;
export default UploadSlice.reducer;