import { RootState } from "../store";
import { addProgress } from "../reducers/UploadSlice";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const baseQuery = axiosBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL as string,
  setToken: (api) => (api.getState() as RootState).auth.token,
  setProgress: (progress, body, api) => {
    /**
     * Getting the file from the request,
     * if there is a file call the function
     */
    const file = body.get("file") as File;

    if (file) {
      api.dispatch(
        addProgress({
          fileName: file.name,
          progress: progress ?? 0,
        })
      );
    }
  },
});
