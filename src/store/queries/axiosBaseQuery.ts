import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/react";
import axios, { AxiosError } from "axios";

interface axiosBaseQueryOption {
  /**
   * Request base url
   */
  baseUrl: string;

  /**
   * Function set token for request
   *
   * @param api
   */
  setToken?(api: BaseQueryApi): string;

  /**
   * Function set progress file upload
   *
   * @param progress
   * @param body
   * @param api
   */
  setProgress?(
    progress: number | undefined,
    body: FormData,
    api: BaseQueryApi
  ): void;
}

export const axiosBaseQuery =
  ({ baseUrl = "", setToken, setProgress }: axiosBaseQueryOption) =>
  async (
    {
      url,
      method = "get",
      body,
      params,
    }: {
      url: string;
      method?: string;
      body?: any;
      params?: any;
    },
    api: BaseQueryApi
  ) => {
    try {
      const token = setToken ? setToken(api) : "";
      const { signal } = api;

      /**
       * Create basic axios instance
       */
      const http = axios.create({
        baseURL: baseUrl,
        headers: {
          common: {
            Authorization: token ? "Bearer " + token : "",
          },
        },
        /**
         * If a function setProgress is specified, we execute it
         */
        onUploadProgress: ({ progress }) => {
          if (setProgress && body instanceof FormData) {
            setProgress(progress, body, api);
          }
        },
      });

      /**
       * Executing the request
       */
      const result = await http({
        url,
        method,
        data: body,
        params,
        signal,
      });

      /**
       * Return result or errors
       */
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
