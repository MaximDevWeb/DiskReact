import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ContentBreadcrumbs from "../ContentBreadcrumbs";

describe("components.ContentBreadcrumbs", () => {
  const routes = [
    {
      path: "/dashboard/files/*",
      element: <ContentBreadcrumbs />,
      loader: () => ({
        title: "All files",
      }),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard/files/cities-world-cup/moscow-city"],
  });

  render(<RouterProvider router={router} />);

  test("breadcrumbs render", async () => {
    const links = await screen.findAllByRole("link");
    expect(links.length).toBe(2);

    const endPoint = screen.getByText("moscow city");
    expect(endPoint).toBeInTheDocument();
  });
});
