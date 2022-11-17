import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers: Headers, api) => {
    const token = (api.getState() as RootState).auth.token;

    if (token) headers.set("authorization", `Bearer ${token}`);
    headers.set("accept", "application/json");

    return headers;
  },
});
