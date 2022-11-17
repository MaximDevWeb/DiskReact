import menuList from "../models/menu";
import { Link, useLocation, useMatch, useMatches } from "react-router-dom";
import Icon from "./icon/Icon";
import { useEffect, useState } from "react";
/**
 * This is the NavbarMenu component.
 */
const NavbarMenu = () => {
  const location = useLocation();
  const [path, setPath] = useState<string>("");

  /**
   * Changing the path when changing the location
   */
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <ul className="mt_xl navbar__list">
      {menuList.map((item) => (
        <li key={item.icon}>
          <Link
            to={item.link}
            className={
              "navbar__item" +
              (path === item.link ? " navbar__item_active" : "")
            }
            role="link"
          >
            <Icon type={item.icon} />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
