import React, { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";
import Icon from "./icon/Icon";

/**
 * This is the InputPassword component.
 *
 * @property name - The name for the input.
 * @property value - The value for the input.
 * @property placeholder - The placeholder for the input.
 * @property errors - The Errors for the input.
 * @property onchange - The change event for the input.
 */

type Props = {
  name: string;
  value: string;
  placeholder: string;
  errors: Array<string>;
  change: Function;
};

const InputPassword = ({
  name,
  value,
  placeholder,
  errors = [],
  change,
}: Props) => {
  const [error, setError] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * The first error value
   */
  useEffect(() => {
    setError(_.head(errors) as string);
  }, [errors]);

  /**
   * Function for handling the change event
   *
   * @param e {ChangeEvent<HTMLInputElement>}
   */
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    change({
      value: e.target.value,
      name: e.target.name,
    });
  };

  return (
    <div className={(error ? "input__block_error" : "") + " input__block"}>
      <div className="input__error">{error}</div>

      <input
        name={name}
        type={visible ? "text" : "password"}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />

      <div
        role="button"
        className="input__visible"
        onClick={() => setVisible(!visible)}
      >
        {visible ? <Icon type="unlock" /> : <Icon type="lock" />}
      </div>
    </div>
  );
};

export default InputPassword;
