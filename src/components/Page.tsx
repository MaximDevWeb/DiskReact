import { ComponentType, useEffect } from "react";

/**
 * This is the Page render component.
 */

type Props = {
  element: ComponentType;
  title: string;
};

const Page = ({ element: Element, title }: Props) => {
  /**
   * Set Title for Page
   */
  useEffect(() => {
    document.title = title + process.env.REACT_APP_TITLE_PREFIX;
  }, [title]);

  return <Element />;
};

export default Page;
