import React, { useState } from "react";
import { ErrorsData, EventData, LoginData } from "../../../types/auth";
import InputText from "../../../components/InputText";
import InputPassword from "../../../components/InputPassword";
import InputCheckbox from "../../../components/InputCheckbox";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useLoginMutation } from "../../../store/services/Auth";
import { setToken } from "../../../store/reducers/AuthSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { target } = useAppSelector((state) => state.auth);
  const [login, { isLoading: load }] = useLoginMutation();

  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState<ErrorsData>({});

  /**
   * Async login api request
   */
  const send = async () => {
    try {
      const response: any = await login(data).unwrap();

      dispatch(setToken(response.token));

      navigate(target);
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
      <h2 className="auth__header">Log In</h2>

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

      <div className="auth__info mb_d">
        <InputCheckbox
          name="remember"
          value={data.remember}
          change={changeHandler}
        >
          Remember My
        </InputCheckbox>

        <div>
          <Link to="/auth/forgot-password">Forgot password</Link>
        </div>
      </div>

      <div className="input__btn">
        <button
          type="submit"
          className={(load ? "btn_inactive" : "") + " btn btn_default"}
          onClick={send}
        >
          Log in
        </button>
      </div>

      <div className="auth__separator">
        <div className="separator__line"></div>
        <span>don't have an account?</span>
      </div>

      <div className="input__btn">
        <Link to="/auth/register" className="btn btn_outline_cusses">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
