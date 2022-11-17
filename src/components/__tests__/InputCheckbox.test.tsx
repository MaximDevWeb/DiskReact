import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import InputCheckbox from "../InputCheckbox";
import { EventData } from "../../types/auth";

afterAll(() => {
  cleanup();
});

describe("components.InputCheckbox", () => {
  let checked = false;

  render(
    <InputCheckbox
      name="remember"
      value={checked}
      change={(e: EventData) => (checked = e.value)}
    >
      Remember my
    </InputCheckbox>
  );

  const label = screen.getByText("Remember my");

  test("checkbox label text", () => {
    expect(label).toBeInTheDocument();
  });

  test("checkbox checked change", () => {
    expect(checked).toBe(false);
    fireEvent.click(label);
    expect(checked).toBe(true);
  });
});
