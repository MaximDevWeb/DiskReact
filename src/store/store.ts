import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authApi } from "./services/Auth";

import AppReducer from "./reducers/AppSlice";
import AuthReducer from "../store/reducers/AuthSlice";
import ToastsReducer from "./reducers/ToastsSlice";
import { authError } from "./middleware/authError";
import UploadReducer from "./reducers/UploadSlice";

const rootReducer = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  toasts: ToastsReducer,
  upload: UploadReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, authError),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
