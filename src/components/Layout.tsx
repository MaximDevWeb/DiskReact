import { MiddlewareType } from "../types/middleware";
import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * This is the Layout component.
 */

type Props = {
  element: ComponentType;
  middleware: MiddlewareType;
};

const Layout = ({ element: Element, middleware }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    middleware.rule(navigate);
  }, []);

  return <Element />;
};

export default Layout;
