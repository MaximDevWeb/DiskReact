import { render, screen } from "@testing-library/react";
import Icon from "../icon/Icon";

describe("components.icon.Icon", () => {
  const { container } = render(<Icon type="lock" />);
  const use = container.querySelector("use");

  test("icon style render", () => {
    expect(screen.getByRole("img")).toHaveClass("icon");
  });

  test("icon link attribute", () => {
    expect(use).toHaveAttribute("xlink:href", "sprite.svg#lock");
  });
});
