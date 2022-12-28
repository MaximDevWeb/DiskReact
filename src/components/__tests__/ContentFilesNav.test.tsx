import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ContentFilesNav from "../ContentFilesNav";
import { store } from "../../store/store";

afterAll(() => {
  cleanup();
});

describe("components.ContentFilesNav", () => {
  const { container } = render(
    <Provider store={store}>
      <ContentFilesNav files={300} />
    </Provider>
  );

  test("test count page render", () => {
    expect(screen.getByText("out of 6")).toBeInTheDocument();
  });

  test("test go to last page", () => {
    const btn = container.querySelector('[data-direction="last"]');
    if (btn) fireEvent.click(btn);

    expect(store.getState().files.currentPage).toBe(6);
  });

  test("test go to first page", () => {
    const btn = container.querySelector('[data-direction="first"]');
    if (btn) fireEvent.click(btn);

    expect(store.getState().files.currentPage).toBe(1);
  });

  test("test go to next page", () => {
    const btn = container.querySelector('[data-direction="next"]');

    if (btn) fireEvent.click(btn);
    if (btn) fireEvent.click(btn);

    expect(store.getState().files.currentPage).toBe(3);
  });

  test("test go to prev page", () => {
    const btnPrev = container.querySelector('[data-direction="prev"]');
    if (btnPrev) fireEvent.click(btnPrev);

    expect(store.getState().files.currentPage).toBe(2);
  });
});
