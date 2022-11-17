import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import InputPassword from "../InputPassword";
import { EventData } from "../../types/auth";
import { fireEvent } from "@testing-library/react";

afterAll(() => {
  cleanup();
});

describe("components.InputPassword", () => {
  let value = "password";

  render(
    <InputPassword
      name="email"
      value={value}
      placeholder={"Password"}
      errors={["Password error"]}
      change={(e: EventData) => (value = e.value)}
    />
  );

  const password = screen.getByPlaceholderText("Password");
  const error = screen.getByText("Password error");
  const showHideBtn = screen.getByRole("button");

  test("input password placeholder attribute", () => {
    expect(password).toBeInTheDocument();
  });

  test("input password error text", () => {
    expect(error).toBeInTheDocument();
  });

  test("input password change value", () => {
    expect(value).toBe("password");
    fireEvent.input(password, { target: { value: "12345678" } });
    expect(value).toBe("12345678");
  });

  test("input password hide/show", () => {
    expect(password).toHaveAttribute("type", "password");
    fireEvent.click(showHideBtn);
    expect(password).toHaveAttribute("type", "text");
  });
});
