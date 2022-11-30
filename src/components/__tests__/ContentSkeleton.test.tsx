import { render, screen } from "@testing-library/react";
import ContentSkeleton from "../ContentSkeleton";

describe("components.ContentSkeleton", () => {
  render(<ContentSkeleton type="folder" items={4} />);

  const elements = screen.getAllByRole("listitem");

  test("skeleton count render", () => {
    expect(elements.length).toBe(4);
  });

  test("skeleton item class", () => {
    expect(elements[0]).toHaveClass("skeleton__folder");
  });
});
