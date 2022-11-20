import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/**
 * App state manager
 */

export interface AppState {
  search: string,
  modalFolderVisible: boolean
}

const initialState: AppState = {
  search: '',
  modalFolderVisible: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    /**
     * Change search string
     */
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    /**
     * Change modalFolderVisible value
     */
    setModalFolderVisible: (state, action: PayloadAction<boolean>) => {
      state.modalFolderVisible = action.payload;
    }
  }
})

export const { setSearch, setModalFolderVisible } = appSlice.actions;
export default appSlice.reducer;