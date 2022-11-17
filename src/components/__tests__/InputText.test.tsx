import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import InputText from "../InputText";
import { EventData } from "../../types/auth";
import { fireEvent } from "@testing-library/react";

afterAll(() => {
  cleanup();
});

describe("components.InputText", () => {
  let value = "Hello";

  render(
    <InputText
      name="email"
      type="email"
      value={value}
      placeholder={"Email"}
      errors={["Email error"]}
      change={(e: EventData) => (value = e.value)}
    />
  );

  const input = screen.getByPlaceholderText("Email");
  const error = screen.getByText("Email error");

  test("input placeholder attribute", () => {
    expect(input).toBeInTheDocument();
  });

  test("input error text", () => {
    expect(error).toBeInTheDocument();
  });

  test("input type attribute", () => {
    expect(input).toHaveAttribute("type", "email");
  });

  test("input change value", () => {
    expect(value).toBe("Hello");
    fireEvent.input(input, { target: { value: "Hello World" } });
    expect(value).toBe("Hello World");
  });
});
