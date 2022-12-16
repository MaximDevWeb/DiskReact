import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queries/baseQuery";
/**
 * Files api requests
 */

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery,
  endpoints: (builder) => ({
    LoadFilesList: builder.query<any, string>({
      query: (folder) => ({
        url: "files?folder=" + folder,
      }),
    }),
  }),
});

export const { useLoadFilesListQuery } = filesApi;
