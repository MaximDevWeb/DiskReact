import { InputSelectItem } from "../types/app";
import Icon from "./icon/Icon";

/**
 * This is the InputSelect component.
 *
 * @property items - The values for the select.
 * @property value - The value for the select.
 * @property change - The change event for the switch.
 */

type Props = {
  items: Array<InputSelectItem>;
  value: string;
  change: Function;
};

const InputSelect = ({ items, value, change }: Props) => {
  return (
    <div className="select">
      <select
        className="select"
        onChange={(e) => change(e.target.value)}
        value={value}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <Icon type="down_arrow" />
    </div>
  );
};

export default InputSelect;
