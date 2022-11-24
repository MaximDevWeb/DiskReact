/**
 * Folders api requests
 */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const foldersApi = createApi({
  reducerPath: "folderApi",
  baseQuery,
  endpoints: (builder) => ({
    getFolders: builder.query<any, string>({
      query: (slug) => ({
        url: "folders?slug=" + slug,
      }),
    }),
  }),
});

export const { useGetFoldersQuery } = foldersApi;
