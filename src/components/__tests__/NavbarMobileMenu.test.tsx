import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import NavbarMobileMenu from "../NavbarMobileMenu";

afterAll(() => {
  cleanup();
});

describe("components.NavbarMobileMenu", () => {
  const route = "/dashboard/photos";
  render(
    <MemoryRouter initialEntries={[route]}>
      <NavbarMobileMenu />
    </MemoryRouter>
  );

  test("the component must contain link", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).not.toBe(0);
  });

  test("active link", () => {
    const link = screen.getByText("Photos");
    expect(link).toHaveClass("mobile-menu_active");
  });
});
