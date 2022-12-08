import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queries/baseQuery";

/**
 * Upload api requests
 */

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery,
  endpoints: (builder) => ({
    loadFile: builder.mutation<any, FormData>({
      query: (data) => ({
        url: "files",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoadFileMutation } = uploadApi;
