import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authApi } from "./services/Auth";
import { foldersApi } from "./services/Folders";
import { uploadApi } from "./services/Upload";
import { authError } from "./middleware/authError";

import AppReducer from "./reducers/AppSlice";
import AuthReducer from "../store/reducers/AuthSlice";
import ToastsReducer from "./reducers/ToastsSlice";
import UploadReducer from "./reducers/UploadSlice";
import FoldersReducer from "./reducers/FoldersSlice";
import FilesReducer from "./reducers/FilesSlice";

const rootReducer = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  toasts: ToastsReducer,
  upload: UploadReducer,
  folders: FoldersReducer,
  files: FilesReducer,
  [authApi.reducerPath]: authApi.reducer,
  [foldersApi.reducerPath]: foldersApi.reducer,
  [uploadApi.reducerPath]: uploadApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      foldersApi.middleware,
      uploadApi.middleware,
      authError
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
