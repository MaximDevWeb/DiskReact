import "@testing-library/react/dont-cleanup-after-each";
import { Folder } from "../../types/app";
import { cleanup, render, screen } from "@testing-library/react";
import ContentFolder from "../ContentFolder";
import { MemoryRouter } from "react-router-dom";

afterAll(() => {
  cleanup();
});

describe("components.ContentFolder", () => {
  const item: Folder = {
    id: 3,
    name: "Moscow",
    slug: "moscow",
    sub_folders_count: 2,
    files_count: 5,
    files_size: 2231434534,
  };

  const route = "/dashboard/photos";

  render(
    <MemoryRouter initialEntries={[route]}>
      <ContentFolder item={item} />
    </MemoryRouter>
  );

  test("render link attribute", () => {
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/dashboard/photos/moscow");
  });

  test("render counters", () => {
    const counter = screen.getByText("2 Folders | 5 Files");
    expect(counter).toBeInTheDocument();
  });

  test("render folder size", () => {
    const size = screen.getByText("2.2 GB");
    expect(size).toBeInTheDocument();
  });
});
