import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Auth state manager
 */

export interface AuthState {
  user: null | any;
  token: string;
  target: string;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token") as string,
  target: "/dashboard",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     *Set token user auth
     */
    setToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    /**
     *Set current user auth
     */
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    /**
     * Clean auth
     */
    cleanAuth: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.token = "";
    },
  },
});

export const { setToken, setUser, cleanAuth } = authSlice.actions;
export default authSlice.reducer;
