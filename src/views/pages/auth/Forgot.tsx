import React, { useState } from "react";
import { ErrorsData, EventData, ForgotData } from "../../../types/auth";
import InputText from "../../../components/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useForgotMutation } from "../../../store/services/Auth";
import { addToast } from "../../../store/reducers/ToastsSlice";
import { ToastType } from "../../../types/toasts";
import { useAppDispatch } from "../../../store/store";

const Forgot = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [forgot, { isLoading: load }] = useForgotMutation();

  const [data, setData] = useState<ForgotData>({
    email: "",
  });
  const [error, setError] = useState<ErrorsData>({});

  /**
   * Async forgot api request
   */
  const send = async () => {
    try {
      await forgot(data).unwrap();

      dispatch(
        addToast({
          message:
            "An email with a request to change the password has been sent to the specified email.",
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
      <h2 className="auth__header">Forgot Password</h2>
      <div className="auth__subheader">Enter your recovery email</div>

      <InputText
        name="email"
        value={data.email}
        placeholder="Email"
        errors={error.email || []}
        change={changeHandler}
      />

      <div className="input__btn">
        <button
          type="submit"
          className={(load ? "btn_inactive" : "") + " btn btn_default"}
          onClick={send}
        >
          Forgot
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

export default Forgot;
