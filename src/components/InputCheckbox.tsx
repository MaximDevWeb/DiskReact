import { randString } from "../helpers/random";
import { ChangeEvent, useEffect, useState } from "react";

/**
 * This is the checkboxCheckbox component.
 *
 * @property name - The name for the checkbox.
 * @property value - The value for the checkbox.
 * @property change - The change event for the checkbox.
 * @property children - The content for label the checkbox.
 * @property className - The css class for the checkbox.
 */

type Props = {
  name: string;
  value: boolean;
  change: Function;
  children: any;
  className?: string;
};

const InputCheckbox = ({ name, value, change, children, className }: Props) => {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    setId(randString());
  }, []);

  /**
   * Function for handling the change event
   *
   * @param e {ChangeEvent<HTMLInputElement>}
   */
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    change({
      value: e.target.checked,
      name: e.target.name,
    });
  };

  return (
    <div className={className + " input__block input__checkbox"}>
      <input
        name={name}
        id={id}
        type="checkbox"
        checked={value}
        onChange={changeHandler}
      />

      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default InputCheckbox;
