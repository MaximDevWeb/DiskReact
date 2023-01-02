import Toasts from "../../components/Toasts";
import { Outlet } from "react-router-dom";
import HeaderProfile from "../../components/HeaderProfile";
import { useGetQuery } from "../../store/services/Auth";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { setUser } from "../../store/reducers/AuthSlice";
import logo from "../../assets/images/logo.svg";
import NavbarBanner from "../../components/NavbarBanner";
import NavbarMenu from "../../components/NavbarMenu";
import HeaderSearch from "../../components/HeaderSearch";
import HeaderButtons from "../../components/HeaderButtons";
import ModalFolder from "../../components/ModalFolder";
import AppConfirm from "../../components/AppConfirm";
import NavbarMobileMenu from "../../components/NavbarMobileMenu";
import UploadLoader from "../../components/UploadLoader";
import ContentEditFile from "../../components/ContentEditFile";
import ModalFile from "../../components/ModalFile";
import AppStatistic from "../../components/AppStatistic";

/**
 * This is the Dashboard component.
 */

const Dashboard = () => {
  const dispatch = useAppDispatch();

  /**
   * Load auth user data
   */
  const { data, isSuccess: success } = useGetQuery();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
    }
  }, [data]);

  return (
    <>
      {success && (
        <div className="container_content">
          <nav className="navbar">
            <div>
              <div className="navbar__logo">
                <img src={logo} alt="Yandex Disk" />
              </div>

              <NavbarMenu />
            </div>

            <NavbarBanner />
          </nav>

          <div className="content">
            <header className="header">
              <a href="#" className="header__logo">
                <img src={logo} alt="Yandex Disk" />
              </a>

              <HeaderSearch />

              <aside className="user">
                <HeaderButtons />

                <HeaderProfile />
              </aside>
            </header>

            <NavbarMobileMenu />

            <div className="content__wrapper">
              <Outlet />

              <AppStatistic />
            </div>
          </div>

          <ContentEditFile />
          <UploadLoader />
          <ModalFolder />
          <ModalFile />
          <AppConfirm />
          <Toasts />
        </div>
      )}
    </>
  );
};

export default Dashboard;
