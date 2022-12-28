import "@testing-library/react/dont-cleanup-after-each";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ModalFile from "../ModalFile";
import { setEditFile } from "../../store/reducers/FilesSlice";

afterAll(() => {
  cleanup();
});

describe("components.ModalFile", () => {
  const { container } = render(
    <Provider store={store}>
      <ModalFile />
    </Provider>
  );

  store.dispatch(
    setEditFile({
      id: 234,
      name: "Test.php",
      size: 1233422333,
      type: "php",
      private_link: "/test/test/test.php",
      public_link: "/test/test/test.php",
      public_hash: "ghf56h5h6hh",
      created_at: "2022-12-07T19:34:39",
    })
  );

  test("test input value", async () => {
    const input = screen.getByPlaceholderText("File name");
    await waitFor(() => {
      expect(input).toHaveValue("Test");
    });
  });
});
