import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import { FileType } from "../../types/stores";
import ContentEditFileShareDelete from "../ContentEditFileShareDelete";
import { Provider } from "react-redux";
import { store } from "../../store/store";

afterAll(() => {
  cleanup();
});

describe("components.ContentEditFileShareDelete", () => {
  const file: FileType = {
    id: 234,
    name: "Test.php",
    size: 1233422333,
    type: "php",
    private_link: "/test/test/test.php",
    public_hash: "fdghdfgdfgdfgdfg",
    public_link: "/test/test/test.php",
    created_at: "2022-12-07T19:34:39",
  };

  render(
    <Provider store={store}>
      <ContentEditFileShareDelete file={file} />
    </Provider>
  );

  test("render button", () => {
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("btn_inactive");
  });
});
