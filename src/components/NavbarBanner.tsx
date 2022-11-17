import upgradeImg from "../assets/images/upgrade.svg";
/**
 * This is the NavbarBanner component.
 */

const NavbarBanner = () => {
  return (
    <div className="banner">
      <div className="banner__header">Upgrade your account!</div>

      <img src={upgradeImg} alt="Upgrade your account" />

      <a href="#" role="button" className="mt_lg btn btn_black">
        Upgrade now
      </a>
    </div>
  );
};

export default NavbarBanner;
