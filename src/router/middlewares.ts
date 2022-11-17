import { MiddlewareType } from "../types/middleware";
import { store } from "../store/store";
import router from "./index";

export const auth: MiddlewareType = {
  rule() {
    const { token } = store.getState().auth;
    if (!token) this.action();
  },

  action() {
    router.navigate("/auth");
  },
};

export const guest: MiddlewareType = {
  rule() {
    const { token } = store.getState().auth;
    if (token) this.action();
  },

  action() {
    const { target } = store.getState().auth;
    router.navigate(target);
  },
};
