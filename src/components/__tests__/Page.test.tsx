import { render, screen } from "@testing-library/react";
import Page from "../Page";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("components.Page", () => {
  function Test() {
    return <h1>Hello Test</h1>;
  }

  const routes = [
    {
      path: "/dashboard",
      element: <Page element={Test} />,
      loader: () => ({
        title: "All files",
      }),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard"],
  });

  render(<RouterProvider router={router} />);

  test("render inner component", () => {
    const innerElement = screen.getByText("Hello Test");
    expect(innerElement).toBeInTheDocument();
  });
});
