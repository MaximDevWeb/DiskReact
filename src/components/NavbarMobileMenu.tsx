import menuList from "../models/menu";
import { NavLink } from "react-router-dom";
import Icon from "./icon/Icon";

/**
 * This is the NavbarMobileMenu component.
 */

const NavbarMobileMenu = () => {
  /**
   * Function generate link className
   *
   * @param active
   */
  const getLinkClass = (active: boolean) => {
    return (active ? "mobile-menu_active" : "") + " mobile-menu__item";
  };

  return (
    <nav className="mobile-menu">
      <ul className="mobile-menu__list">
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
    </nav>
  );
};

export default NavbarMobileMenu;
