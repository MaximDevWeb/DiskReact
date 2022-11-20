import menuList from "../models/menu";
import { NavLink } from "react-router-dom";
import Icon from "./icon/Icon";

/**
 * This is the NavbarMenu component.
 */

const NavbarMenu = () => {
  /**
   * Function generate link className
   *
   * @param active
   */
  const getLinkClass = (active: boolean) => {
    return (active ? "navbar__item_active" : "") + " navbar__item";
  };

  return (
    <ul className="mt_xl navbar__list">
      {menuList.map((item) => (
        <li key={item.icon}>
          <NavLink
            to={item.link}
            className={({ isActive }) => getLinkClass(isActive)}
            role="link"
          >
            <Icon type={item.icon} />
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
