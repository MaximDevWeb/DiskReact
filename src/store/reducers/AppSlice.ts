import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Confirm, ConfirmProps } from "../../types/app";

/**
 * App state manager
 */

export interface AppState {
  search: string;
  confirm: Confirm;
}

const initialState: AppState = {
  search: "",
  confirm: {
    message: "Confirm",
    callback: null,
    callbackArgs: null,
    visible: false,
  },
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
    /**
     * The function set confirm data
     */
    setConfirm: (state, action: PayloadAction<ConfirmProps>) => {
      state.confirm.message = action.payload.message;
      state.confirm.callback = action.payload.callback;
      state.confirm.callbackArgs = action.payload.callbackArgs;

      state.confirm.visible = true;
    },
    /**
     * The function clean confirm data
     */
    closeConfirm: (state) => {
      state.confirm.callback = null;
      state.confirm.callbackArgs = null;
      state.confirm.visible = false;
    },
  },
});

export const { setSearch, setConfirm, closeConfirm } = appSlice.actions;
export default appSlice.reducer;
