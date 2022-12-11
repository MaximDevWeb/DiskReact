import { fireEvent, render, screen } from "@testing-library/react";
import InputSwitch from "../InputSwitch";
import { InputSwitchItem } from "../../types/app";
import { randString } from "../../helpers/random";

describe("components.InputSwitch", () => {
  let value = "list";

  const items: Array<InputSwitchItem> = [
    { value: "list", icon: "list", id: randString() },
    { value: "grid", icon: "grid", id: randString() },
  ];

  render(
    <InputSwitch
      name="style"
      items={items}
      value={value}
      change={(val: string) => (value = val)}
    />
  );

  const radios = screen.getAllByRole("radio");

  test("test change value", () => {
    expect(value).toBe("list");
    fireEvent.click(radios[1]);
    expect(value).toBe("grid");
  });

  test("test items length", () => {
    expect(radios.length).toBe(2);
  });
});
