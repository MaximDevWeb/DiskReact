import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queries/baseQuery";
import { Statistic } from "../../types/stores";

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
    deleteFile: builder.mutation<any, number>({
      query: (id) => ({
        url: "files/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["File"],
    }),
    updateFile: builder.mutation<any, any>({
      query: ({ id, name }) => ({
        url: "files/" + id,
        method: "PUT",
        body: { name },
      }),
      invalidatesTags: ["File"],
    }),
    generateHashLink: builder.mutation<any, void>({
      query: () => ({
        url: "hash/generate",
        method: "POST",
      }),
    }),
    generatePublicLink: builder.mutation<any, number>({
      query: (id) => ({
        url: "files/generate-public-link",
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["File"],
    }),
    deletePublicLink: builder.mutation<any, number>({
      query: (id) => ({
        url: "files/delete-public-link",
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["File"],
    }),
    loadPublicLinkFile: builder.mutation<any, string>({
      query: (hash) => ({
        url: "files/public-file",
        method: "POST",
        body: { hash },
      }),
    }),
    loadStatistic: builder.query<any, void>({
      query: () => ({
        url: "/statistic",
      }),
      providesTags: ["File"],
    }),
  }),
});

export const {
  useLoadFilesListQuery,
  useLoadFileMutation,
  useDeleteFileMutation,
  useUpdateFileMutation,
  useGenerateHashLinkMutation,
  useGeneratePublicLinkMutation,
  useDeletePublicLinkMutation,
  useLoadPublicLinkFileMutation,
  useLoadStatisticQuery,
} = filesApi;
