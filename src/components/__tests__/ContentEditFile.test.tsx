import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ContentEditFile from "../ContentEditFile";
import { setEditFile } from "../../store/reducers/FilesSlice";

afterAll(() => {
  cleanup();
});

describe("components.ContentEditFile", () => {
  const { container } = render(
    <Provider store={store}>
      <ContentEditFile />
    </Provider>
  );

  store.dispatch(
    setEditFile({
      id: 234,
      name: "Test.php",
      size: 1233422333,
      type: "php",
      private_link: "/test/test/test.php",
      public_hash: "fdghdfgdfgdfgdfg",
      public_link: "/test/test/test.php",
      created_at: "2022-12-07T19:34:39",
    })
  );

  test("test file name", () => {
    expect(screen.getByText("Test.php")).toBeInTheDocument();
  });

  test("test close editor", async () => {
    const close = container.querySelector(
      ".footer__close"
    ) as HTMLButtonElement;

    fireEvent.click(close);

    expect(store.getState().files.editFile).toBeFalsy();
  });
});
