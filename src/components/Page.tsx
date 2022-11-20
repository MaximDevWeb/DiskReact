import { ComponentType, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../types/app";

/**
 * This is the Page render component.
 */

type Props = {
  element: ComponentType;
};

const Page = ({ element: Element }: Props) => {
  const { title } = useLoaderData() as LoaderData;

  /**
   * Set Title for Page
   */
  useEffect(() => {
    document.title = (title ?? "") + process.env.REACT_APP_TITLE_PREFIX;
  }, [title]);

  return <Element />;
};

export default Page;
