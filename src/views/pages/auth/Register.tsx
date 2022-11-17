import React, { useState } from "react";
import { ErrorsData, EventData, RegisterData } from "../../../types/auth";
import InputText from "../../../components/InputText";
import InputPassword from "../../../components/InputPassword";
import InputCheckbox from "../../../components/InputCheckbox";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../store/services/Auth";
import { useAppDispatch } from "../../../store/store";
import { addToast } from "../../../store/reducers/ToastsSlice";
import { ToastType } from "../../../types/toasts";

/**
 * Registration page component
 */

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register, { isLoading: load }] = useRegisterMutation();

  const [data, setData] = useState<RegisterData>({
    email: "",
    name: "",
    password: "",
    confirm: "",
    accept: true,
  });
  const [error, setError] = useState<ErrorsData>({});

  /**
   * Async registration api request
   */
  const send = async () => {
    try {
      await register(data).unwrap();

      dispatch(
        addToast({
          message: "Account created! Log in to continue.",
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
      <h2 className="auth__header">Sign Up</h2>

      <InputText
        name="email"
        value={data.email}
        placeholder="Email"
        errors={error.email || []}
        change={changeHandler}
      />

      <InputText
        name="name"
        value={data.name}
        placeholder="Name"
        errors={error.name || []}
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

      <InputCheckbox
        name="accept"
        value={data.accept}
        change={changeHandler}
        className="mb_d"
      >
        I accept the{" "}
        <Link to="/policy" target="_blank">
          user agreement
        </Link>
      </InputCheckbox>

      <div className="input__btn">
        <button
          type="submit"
          className={(load ? "btn_inactive" : "") + " btn btn_default"}
          onClick={send}
        >
          Register
        </button>
      </div>

      <div className="auth__separator">
        <div className="separator__line"></div>
        <span>done have an account?</span>
      </div>

      <div className="input__btn">
        <Link to="/auth" className="btn btn_outline_cusses">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Register;
