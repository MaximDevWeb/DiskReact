import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import NavbarMenu from "../NavbarMenu";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

afterAll(() => {
  cleanup();
});

describe("components.NavbarMenu", () => {
  const route = "/dashboard/photos";
  render(
    <MemoryRouter initialEntries={[route]}>
      <NavbarMenu />
    </MemoryRouter>
  );

  test("the component must contain link", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).not.toBe(0);
  });

  test("active link", () => {
    const link = screen.getByText("Photos");
    expect(link).toHaveClass("navbar__item_active");
  });
});
