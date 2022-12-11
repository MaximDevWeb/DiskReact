import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import InputSelect from "../InputSelect";
import { InputSelectItem } from "../../types/app";

afterAll(() => {
  cleanup();
});

describe("components.InputSelect", () => {
  let value = "";
  const items: Array<InputSelectItem> = [
    { value: "", name: "All files" },
    { value: "archives", name: "Archives" },
  ];

  render(
    <InputSelect
      items={items}
      value={value}
      change={(val: string) => (value = val)}
    />
  );

  const select = screen.getByRole("combobox");

  test("test change value", () => {
    expect(value).toBe("");
    fireEvent.change(select, { target: items[1] });
    expect(value).toBe(items[1].value);
  });

  test("test option length", () => {
    expect(screen.getAllByRole("option").length).toBe(items.length);
  });
});
