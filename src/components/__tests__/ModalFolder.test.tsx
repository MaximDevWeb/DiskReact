import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ModalFolder from "../ModalFolder";
import { setDataFolder } from "../../store/reducers/FoldersSlice";

afterAll(() => {
  cleanup();
});

describe("components.ModalFolder", () => {
  store.dispatch(
    setDataFolder({
      id: 34,
      name: "Folder",
    })
  );

  const { container } = render(
    <Provider store={store}>
      <ModalFolder />
    </Provider>
  );

  test("title rename render", () => {
    const title = container.querySelector(".modal__header h2");
    expect(title).toHaveTextContent("Rename Folder");
  });
});
