import "@testing-library/react/dont-cleanup-after-each";
import { store } from "../../store/store";
import { setConfirm } from "../../store/reducers/AppSlice";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AppConfirm from "../AppConfirm";

describe("components.AppConfirm", () => {
  let args = 45;
  const callbackFunc = (num: number) => {
    args = args * num;
  };

  store.dispatch(
    setConfirm({
      message: "Hello World",
      callback: callbackFunc,
      callbackArgs: 3,
    })
  );

  const { container } = render(
    <Provider store={store}>
      <AppConfirm />
    </Provider>
  );

  test("confirm title render", () => {
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("submit confirm", async () => {
    const submitBtn = screen.getByText("Confirm");

    expect(args).toBe(45);

    fireEvent.click(submitBtn);

    expect(args).toBe(135);

    expect(store.getState().app.confirm.visible).toBeFalsy();
  });
});
