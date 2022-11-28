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

            <nav className="mobile-menu">
              <ul className="mobile-menu__list">
                <li>
                  <a href="#" className="mobile-menu__item mobile-menu_active">
                    <svg className="icon">
                      <use xlinkHref="#files"></use>
                    </svg>
                    Files
                  </a>
                </li>

                <li>
                  <a href="#" className="mobile-menu__item">
                    <svg className="icon">
                      <use xlinkHref="#photo"></use>
                    </svg>
                    Photos
                  </a>
                </li>

                <li>
                  <a href="#" className="mobile-menu__item">
                    <svg className="icon">
                      <use xlinkHref="#album"></use>
                    </svg>
                    Albums
                  </a>
                </li>

                <li>
                  <a href="#" className="mobile-menu__item">
                    <svg className="icon">
                      <use xlinkHref="#shared"></use>
                    </svg>
                    Shared access
                  </a>
                </li>

                <li>
                  <a href="#" className="mobile-menu__item">
                    <svg className="icon">
                      <use xlinkHref="#archive"></use>
                    </svg>
                    Archives
                  </a>
                </li>

                <li>
                  <a href="#" className="mobile-menu__item">
                    <svg className="icon">
                      <use xlinkHref="#delete"></use>
                    </svg>
                    Trash
                  </a>
                </li>
              </ul>
            </nav>

            <div className="content__wrapper">
              <Outlet />

              <aside className="statistic">
                <h2 className="statistic__header">Statistic</h2>

                <div className="chart">
                  <canvas id="chart"></canvas>
                  <div className="chart__legend">
                    <div className="chart__percent">85%</div>
                    <div className="chart__used">Used storage</div>
                  </div>
                </div>

                <div className="labels">
                  <div className="labels__item">
                    <div
                      className="labels__color"
                      // style="background-color: #0f8ce9"
                    ></div>
                    <div>
                      <div className="labels__name">Photo</div>
                      <div className="labels__percent">29%</div>
                    </div>
                  </div>

                  <div className="labels__item">
                    <div
                      className="labels__color"
                      // style="background-color: #1c35b4"
                    ></div>
                    <div>
                      <div className="labels__name">File</div>
                      <div className="labels__percent">9%</div>
                    </div>
                  </div>

                  <div className="labels__item">
                    <div
                      className="labels__color"
                      // style="background-color: #feb101"
                    ></div>
                    <div>
                      <div className="labels__name">Album</div>
                      <div className="labels__percent">62%</div>
                    </div>
                  </div>

                  <div className="labels__item">
                    <div
                      className="labels__color"
                      // style="background-color: #fa3f6c"
                    ></div>
                    <div>
                      <div className="labels__name">Space</div>
                      <div className="labels__percent">12%</div>
                    </div>
                  </div>
                </div>

                <div className="store">
                  <p>Free space: 420.2 GB of 500 GB used</p>

                  <div className="timeline">
                    <div className="timeline__path"></div>
                    {/*<div className="timeline__line" style="width: 80%"></div>*/}
                  </div>
                </div>

                <a href="#" className="btn">
                  +1 TB for 50$
                </a>
              </aside>
            </div>
          </div>

          <ModalFolder />
          <Toasts />
        </div>
      )}
    </>
  );
};

export default Dashboard;
