import React, { useEffect, useState } from "react";
import { ErrorsData, EventData, PasswordData } from "../../../types/auth";
import InputText from "../../../components/InputText";
import InputPassword from "../../../components/InputPassword";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { usePasswordMutation } from "../../../store/services/Auth";
import { addToast } from "../../../store/reducers/ToastsSlice";
import { ToastType } from "../../../types/toasts";
import { useAppDispatch } from "../../../store/store";

const Password = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [password, { isLoading: load }] = usePasswordMutation();

  const [data, setData] = useState<PasswordData>({
    email: "",
    password: "",
    confirm: "",
    token: "",
  });
  const [error, setError] = useState<ErrorsData>({});

  /**
   * Setting the data token when loading
   */
  useEffect(() => {
    const token = searchParams.get("token") as string;
    setData({ ...data, token: token });
  }, []);

  /**
   * Async change password api request
   */
  const send = async () => {
    try {
      await password(data).unwrap();

      dispatch(
        addToast({
          message: "Your password has been changed, log in to continue.",
          type: ToastType.success,
        })
      );

      navigate("/auth");
    } catch (err: any) {
      setError(err.data.errors as ErrorsData);
    }
  };

  /**
   * Change data value handler
   * @param e
   */
  const changeHandler = (e: EventData) => {
    setError({ ...error, [e.name]: [] });
    setData({ ...data, [e.name]: e.value });
  };
  return (
    <div className="auth__form">
      <h2 className="auth__header">New Password</h2>
      <div className="auth__subheader">Enter a new password</div>

      <InputText
        name="email"
        value={data.email}
        placeholder="Email"
        errors={error.email || []}
        change={changeHandler}
      />

      <InputPassword
        name="password"
        value={data.password}
        placeholder="Password"
        errors={error.password || []}
        change={changeHandler}
      />

      <InputPassword
        name="confirm"
        value={data.confirm}
        placeholder="Confirm password"
        errors={error.confirm || []}
        change={changeHandler}
      />

      <div className="input__btn">
        <button
          type="submit"
          className={(load ? "btn_inactive" : "") + " btn btn_default"}
          onClick={send}
        >
          Change password
        </button>
      </div>

      <div className="auth__separator">
        <div className="separator__line"></div>
        <span>remembered the password?</span>
      </div>

      <div className="input__btn">
        <Link to="/auth" className="btn btn_outline_cusses">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Password;
