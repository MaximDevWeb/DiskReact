import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ContentFilesHeader from "../ContentFilesHeader";
import { setFilter, setStyle } from "../../store/reducers/FilesSlice";

afterAll(() => {
  cleanup();
});

describe("components.ContentFilesHeader", () => {
  store.dispatch(setStyle("list"));
  store.dispatch(setFilter(""));

  const { container } = render(
    <Provider store={store}>
      <ContentFilesHeader />
    </Provider>
  );

  test("test input select render", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("test switch render", () => {
    expect(screen.getAllByRole("radio").length).toBe(2);
  });
});
