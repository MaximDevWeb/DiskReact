import { render, screen } from "@testing-library/react";
import NavbarBanner from "../NavbarBanner";

describe("components.NavbarBanner", () => {
  render(<NavbarBanner />);

  test("render button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
