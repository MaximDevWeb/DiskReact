import { Toast, ToastType } from "../../types/toasts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { randString } from "../../helpers/random";

/**
 * Toasts state manager
 */

export interface ToastsState {
  toasts: Array<Toast>;
}

/**
 * Add action props
 */
interface addPayload {
  message: string;
  type?: ToastType;
}

const initialState: ToastsState = {
  toasts: [],
};

export const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    /**
     * Add toast action
     */
    addToast: (state, action: PayloadAction<addPayload>) => {
      const { message, type = ToastType.default } = action.payload;

      const toast: Toast = {
        id: randString(),
        message: message,
        type: type,
      };

      state.toasts.unshift(toast);
    },
    /**
     * Remove toast action
     */
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastsSlice.actions;
export default toastsSlice.reducer;
