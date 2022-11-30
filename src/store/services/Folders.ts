import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { Folder, FolderData } from "../../types/stores";

/**
 * Folders api requests
 */

export const foldersApi = createApi({
  reducerPath: "folderApi",
  baseQuery,
  tagTypes: ["Folder"],
  endpoints: (builder) => ({
    getFolders: builder.query<any, string>({
      query: (prefix) => ({
        url: "folders?prefix=" + prefix,
      }),
      providesTags: ["Folder"],
    }),
    createFolder: builder.mutation<any, FolderData>({
      query: (data) => ({
        url: "folders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Folder"],
    }),
    updateFolder: builder.mutation<any, FolderData>({
      query: (data) => ({
        url: `folders/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Folder"],
    }),
    deleteFolder: builder.mutation<any, number>({
      query: (id) => ({
        url: `folders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Folder"],
    }),
  }),
});

export const {
  useGetFoldersQuery,
  useCreateFolderMutation,
  useUpdateFolderMutation,
  useDeleteFolderMutation,
} = foldersApi;
