import {fireEvent, render, screen} from "@testing-library/react";
import HeaderSearch from "../HeaderSearch";
import {store} from "../../store/store";
import {Provider} from "react-redux";

describe('components.HeaderSearch', () => {
  render(
    <Provider store={store}>
      <HeaderSearch/>
    </Provider>
  );

  test('change state search value', () => {
    const input = screen.getByPlaceholderText('search...');

    let search: string = store.getState().app.search;
    expect(search).toBe('');

    fireEvent.input(input, {target: {value: 'hello'}});

    search = store.getState().app.search;
    expect(search).toBe('hello');
  })
})