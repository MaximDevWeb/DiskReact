import { render, screen } from "@testing-library/react";
import Page from "../Page";

describe("components.Page", () => {
  function Test() {
    return <h1>Hello Test</h1>;
  }

  render(<Page element={Test} title={"Test Element"} />);

  test("render inner component", () => {
    const innerElement = screen.getByText("Hello Test");
    expect(innerElement).toBeInTheDocument();
  });
});
