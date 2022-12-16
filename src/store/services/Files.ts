import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queries/baseQuery";
/**
 * Files api requests
 */

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery,
  tagTypes: ["File"],
  endpoints: (builder) => ({
    loadFilesList: builder.query<any, string>({
      query: (folder) => ({
        url: "files?folder=" + folder,
      }),
      providesTags: ["File"],
    }),
    loadFile: builder.mutation<any, FormData>({
      query: (data) => ({
        url: "files",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["File"],
    }),
  }),
});

export const { useLoadFilesListQuery, useLoadFileMutation } = filesApi;
