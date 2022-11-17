import React, { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";

/**
 * This is the input component.
 *
 * @property name - The name for the input.
 * @property value - The value for the input.
 * @property type - The type for the input.
 * @property placeholder - The placeholder for the input.
 * @property errors - The Errors for the input.
 * @property change - The change event for the input.
 */

type Props = {
  name: string;
  value: string;
  type?: "text" | "email";
  placeholder: string;
  errors: Array<string>;
  change: Function;
};

const InputText = ({
  name,
  value,
  type = "text",
  placeholder,
  errors = [],
  change,
}: Props) => {
  const [error, setError] = useState<string>("");

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
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default InputText;
