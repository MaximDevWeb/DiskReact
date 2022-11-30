/**
 * Folders state manager
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FolderData } from "../../types/stores";

export interface FoldersState {
  modalFolderVisible: boolean;
  data: FolderData;
}

const initialState: FoldersState = {
  modalFolderVisible: false,
  data: {
    name: "",
    id: null,
  },
};

export const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    /**
     * The function set visible folder modal
     */
    setModalFolderVisible: (state, action: PayloadAction<boolean>) => {
      state.modalFolderVisible = action.payload;
    },

    /**
     * The function set data folder
     */
    setDataFolder: (state, action: PayloadAction<FolderData>) => {
      state.data = action.payload;
    },
    /**
     * The function clean data folder
     */
    cleanDataFolder: (state) => {
      state.data = {
        name: "",
        id: null,
      };
    },
  },
});

export const { setModalFolderVisible, setDataFolder, cleanDataFolder } =
  folderSlice.actions;
export default folderSlice.reducer;
