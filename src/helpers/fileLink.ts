import { store } from "../store/store";
import { addToast } from "../store/reducers/ToastsSlice";

/**
 * The function generate public page link
 *
 * @param hash
 */
export const generatePublicPageLink = (hash: string): string => {
  return hash ? `${window.location.origin}/link/${hash}` : "";
};

/**
 * The function copy file link
 *
 * @param link
 */
export const copyFileLink = async (link: string): Promise<void> => {
  await navigator.clipboard.writeText(link);
  store.dispatch(addToast({ message: "Link copied" }));
};
