import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import UploadLoaderItem from "../UploadLoaderItem";

afterAll(() => {
  cleanup();
});

describe("components.UploadLoaderItem", () => {
  const file = new File(["Hello"], "sample.txt", {
    type: "text/html",
  });

  const { container } = render(
    <Provider store={store}>
      <UploadLoaderItem file={file} />
    </Provider>
  );

  test("test file name", () => {
    expect(screen.getByText("sample.txt")).toBeInTheDocument();
  });

  test("test image icon", () => {
    const icon = container.querySelector(".uploader__icon");
    expect(icon).toHaveAttribute("src", "/images/files/txt.svg");
  });
});
