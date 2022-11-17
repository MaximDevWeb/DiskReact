import { cleanup, render } from "@testing-library/react";
import { store } from "../../store/store";
import { addToast } from "../../store/reducers/ToastsSlice";
import { ToastType } from "../../types/toasts";
import { Provider } from "react-redux";
import Toasts from "../Toasts";

afterAll(() => {
  cleanup();
});

describe("component.Toasts", () => {
  store.dispatch(
    addToast({
      message: "Hello Toast",
      type: ToastType.success,
    })
  );

  store.dispatch(
    addToast({
      message: "Hello Toast 2",
      type: ToastType.danger,
    })
  );

  const { container } = render(
    <Provider store={store}>
      <Toasts />
    </Provider>
  );

  test("toasts list render", () => {
    const items = container.querySelectorAll(".toast");
    expect(items.length).toBe(2);
  });
});
