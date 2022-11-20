import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import UploadButton from "../UploadButton";

describe('components.UploadButton', () => {
  const {container} = render(
    <Provider store={store} >
      <UploadButton />
    </Provider>
  )

  test("the presence of input file element", () => {
    expect(container.querySelector('.hidden')).toBeInTheDocument();
  })
})