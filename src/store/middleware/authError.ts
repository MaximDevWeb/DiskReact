import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { store } from "../store";
import { cleanAuth } from "../reducers/AuthSlice";
import router from "../../router";
import { addToast } from "../reducers/ToastsSlice";
import { ToastType } from "../../types/toasts";

/**
 * Forwarding with a 401 error
 * @param api
 */

export const authError: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (action.error && action.payload && action.payload.status === 401) {
      store.dispatch(cleanAuth());
      store.dispatch(
        addToast({
          message: "Authorization error! Log in again!",
          type: ToastType.danger,
        })
      );

      router.navigate("/auth");
    } else {
      return next(action);
    }
  };
