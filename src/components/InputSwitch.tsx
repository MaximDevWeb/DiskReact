import { InputSwitchItem } from "../types/app";
import { useEffect } from "react";
import { randString } from "../helpers/random";
import Icon from "./icon/Icon";

/**
 * This is the InputSwitch component.
 *
 * @property name - The name for the switch.
 * @property items - The values for the switch.
 * @property value - The value for the switch.
 * @property change - The change event for the switch.
 */

type Props = {
  name: string;
  items: Array<InputSwitchItem>;
  value: string;
  change: Function;
};

const InputSwitch = ({ name, items, value, change }: Props) => {
  /**
   * Create random id for items switch
   */
  useEffect(() => {
    items.map((item) => item.id ?? randString());
  }, [items]);

  return (
    <div className="radio-switch">
      {items.map((item) => (
        <div className="radio-switch__item" key={item.id}>
          <input
            id={item.id}
            type="radio"
            name={name}
            value={item.value}
            checked={value === item.value}
            onChange={() => change(item.value)}
          />
          <label htmlFor={item.id}>
            <Icon type={item.icon} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default InputSwitch;
