import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render } from "@testing-library/react";
import ModalBox from "../ModalBox";

afterAll(() => {
  cleanup();
});

describe("components.ModalBox", () => {
  const { container } = render(
    <ModalBox
      title="Hello World"
      visible={true}
      bodySlot={<p>body</p>}
      footerSlot={<p>footer</p>}
      closeModal={() => {}}
    />
  );

  test("title render", () => {
    const title = container.querySelector(".modal__header h2");
    expect(title).toHaveTextContent("Hello World");
  });

  test("visible modal", () => {
    const modal = container.querySelector(".modal");
    expect(modal).toHaveClass("modal__active");
  });

  test("body slots render", () => {
    const modalBody = container.querySelector(".modal__body");
    expect(modalBody).toContainHTML("<p>body</p>");
  });

  test("footer slots render", () => {
    const modalFooter = container.querySelector(".modal__footer");
    expect(modalFooter).toContainHTML("<p>footer</p>");
  });
});
