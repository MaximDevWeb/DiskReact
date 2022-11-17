import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import {
  ForgotData,
  LoginData,
  PasswordData,
  RegisterData,
} from "../../types/auth";

/**
 * Auth api requests
 */

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<any, RegisterData>({
      query: (data) => ({
        url: "auth/create",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation<any, LoginData>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation<any, void>({
      query: (data) => ({
        url: "auth/logout",
        method: "POST",
        body: data,
      }),
    }),
    forgot: builder.mutation<any, ForgotData>({
      query: (data) => ({
        url: "auth/forgot",
        method: "POST",
        body: data,
      }),
    }),
    password: builder.mutation<any, PasswordData>({
      query: (data) => ({
        url: "auth/password",
        method: "POST",
        body: data,
      }),
    }),
    get: builder.query<any, void>({
      query: () => ({
        url: "auth/user",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgotMutation,
  usePasswordMutation,
  useGetQuery,
} = authApi;
