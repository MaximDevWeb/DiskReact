import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Toasts from "../../components/Toasts";

const Auth = () => {
  return (
    <div className="container_center container_bg">
      <div className="auth">
        <div className="auth__logo">
          <img src={logo} alt="Yandex Disk" />
        </div>

        <Outlet />
      </div>

      <Toasts />
    </div>
  );
};

export default Auth;
