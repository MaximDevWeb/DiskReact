import "@testing-library/react/dont-cleanup-after-each";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import HeaderButtons from "../HeaderButtons";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";

afterAll(() => {
  cleanup();
});

describe('components.HeaderButtons', () => {
  render(
    <Provider store={store}>
      <HeaderButtons />
    </Provider>
  )

  test('change visible state modal create folder', () => {
    const btn = screen.getByRole('button');

    expect(store.getState().app.modalFolderVisible).toBe(false);

    fireEvent.click(btn);
    expect(store.getState().app.modalFolderVisible).toBe(true);
  });

  test('the presence of the file upload button component', async () => {
    expect(await screen.findByText('Upload')).toBeInTheDocument();
  });
})