import {useAppDispatch, useAppSelector} from "../store/store";
import Icon from "./icon/Icon";
import {ChangeEvent} from "react";
import {setSearch} from "../store/reducers/AppSlice";

/**
 * This is the HeaderSearch component.
 */

const HeaderSearch = () => {
  const {search} = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  /**
   * Function for handling the change input
   *
   * @param e {ChangeEvent<HTMLInputElement>}
   */
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  }

  return (
    <aside className="search">
      <div className="input__block">
        <Icon type='search' className="input__prefix" />

        <input
          type="text"
          className="input"
          placeholder="search..."
          value={search}
          onChange={searchHandler}
        />
      </div>
    </aside>
  );
}

export default HeaderSearch;