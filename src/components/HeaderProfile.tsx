import avatar from "../assets/images/avatar.jpeg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useLogoutMutation } from "../store/services/Auth";
import { addToast } from "../store/reducers/ToastsSlice";
import { useNavigate } from "react-router-dom";
import { cleanAuth } from "../store/reducers/AuthSlice";
import { ToastType } from "../types/toasts";

/**
 * This is the HeaderProfile component.
 */

const HeaderProfile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState<boolean>(false);

  /**
   * Function change show menu
   */
  const changeShow = () => {
    setShow(!show);
  };

  /**
   * Function hide menu
   */
  const hideShow = () => {
    setShow(false);
  };

  /**
   * Logout auth user
   */
  const logOut = async (e: any) => {
    e.preventDefault();

    try {
      await logout().unwrap();
      dispatch(cleanAuth());
      navigate("/auth");
    } catch (err: any) {
      dispatch(
        addToast({
          message: "Something went wrong! Try again later!",
          type: ToastType.danger,
        })
      );
    }
  };
  return (
    <div
      className={(show ? "user__profile_active " : "") + "user__profile"}
      onBlur={hideShow}
      tabIndex={1}
    >
      <div
        className="user__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
        onClick={changeShow}
      ></div>

      <div className="user__menu">
        <p>{user ? user.name : "user"}</p>
        <a href="#" onClick={logOut}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default HeaderProfile;
