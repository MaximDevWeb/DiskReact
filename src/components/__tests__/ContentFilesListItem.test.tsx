import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import ContentFilesListItem from "../ContentFilesListItem";
import { FileType } from "../../types/stores";
import { Provider } from "react-redux";
import { store } from "../../store/store";

afterAll(() => {
  cleanup();
});

describe("components.ContentFilesListItem", () => {
  const item: FileType = {
    id: 234,
    name: "Test.php",
    size: 1233422333,
    type: "php",
    private_link: "/test/test/test.php",
    public_link: "/test/test/test.php",
    created_at: "2022-12-07T19:34:39",
  };

  const { container } = render(
    <Provider store={store}>
      <ContentFilesListItem item={item} />
    </Provider>
  );

  test("test icon render", () => {
    const img = screen.getByAltText("Test.php");
    expect(img).toHaveAttribute("src", "/images/files/php.svg");
  });

  test("test name render", () => {
    expect(screen.getByText("Test.php")).toBeInTheDocument();
  });

  test("test test date render render", () => {
    expect(screen.getByText("07.12.2022")).toBeInTheDocument();
  });

  test("test size render", () => {
    expect(screen.getByText("1.2 GB")).toBeInTheDocument();
  });
});
