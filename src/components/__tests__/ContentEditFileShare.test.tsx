import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ContentEditFileShare from "../ContentEditFileShare";
import { FileType } from "../../types/stores";
import { store } from "../../store/store";

afterAll(() => {
  cleanup();
});

describe("components.ContentEditFileShare", () => {
  test("Test copy link render", () => {
    const file: FileType = {
      id: 234,
      name: "Test.php",
      size: 1233422333,
      type: "php",
      private_link: "/test/test/test.php",
      public_link: "/test/test/test.php",
      created_at: "2022-12-07T19:34:39",
    };

    render(
      <Provider store={store}>
        <ContentEditFileShare file={file} />
      </Provider>
    );

    expect(screen.getByText("Copy Link")).toBeInTheDocument();
  });

  test("Test generate link render", () => {
    const file: FileType = {
      id: 234,
      name: "Test.php",
      size: 1233422333,
      type: "php",
      private_link: "/test/test/test.php",
      public_link: null,
      created_at: "2022-12-07T19:34:39",
    };

    render(
      <Provider store={store}>
        <ContentEditFileShare file={file} />
      </Provider>
    );

    expect(screen.getByText("Share")).toBeInTheDocument();
  });
});
