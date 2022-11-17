import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ToastType } from "../../types/toasts";
import { addToast } from "../../store/reducers/ToastsSlice";
import { store } from "../../store/store";
import ToastsItem from "../ToastsItem";
import { Provider } from "react-redux";

afterAll(() => {
  cleanup();
});

describe("components.ToastsItem", () => {
  store.dispatch(
    addToast({
      message: "Hello Toast",
      type: ToastType.success,
    })
  );

  let state = store.getState().toasts;

  const { container } = render(
    <Provider store={store}>
      <ToastsItem toast={state.toasts[0]} />
    </Provider>
  );

  const message = screen.getByText("Hello Toast");
  const button = screen.getByRole("button");

  test("toast message render", () => {
    expect(message).toBeInTheDocument();
  });

  test("remove toasts item", () => {
    expect(state.toasts.length).toBe(1);
    fireEvent.click(button);

    state = store.getState().toasts;
    expect(state.toasts.length).toBe(0);
  });

  test("toast type render", () => {
    const wrapper = container.querySelector(".toast");
    expect(wrapper).toHaveClass("toast_success");
  });
});
