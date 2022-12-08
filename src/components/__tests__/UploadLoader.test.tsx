import { store } from "../../store/store";
import { addFiles } from "../../store/reducers/UploadSlice";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import UploadLoader from "../UploadLoader";

describe("components.UploadLoader", () => {
  const fileOne = new File(["Hello World!"], "file_one.txt", {
    type: "text/html",
  });
  const fileTwo = new File(["Hello World!"], "file_two.txt", {
    type: "text/html",
  });

  store.dispatch(addFiles([fileOne, fileTwo]));

  const { container } = render(
    <Provider store={store}>
      <UploadLoader />
    </Provider>
  );

  test("items count", () => {
    const items = container.querySelectorAll(".uploader__item");
    expect(items.length).toBe(2);
  });
});
