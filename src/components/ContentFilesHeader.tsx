/**
 * This is the ContentFilesHeader component.
 */
import InputSelect from "./InputSelect";
import InputSwitch from "./InputSwitch";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setFilter, setStyle } from "../store/reducers/FilesSlice";
import { randString } from "../helpers/random";

const ContentFilesHeader = () => {
  const { style, filter } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();

  /**
   * The switch values
   */
  const styleSwitch = [
    { value: "list", icon: "list", id: randString() },
    { value: "grid", icon: "grid", id: randString() },
  ];

  /**
   * The filter values
   */
  const fileFilters = [
    { value: "", name: "All files" },
    { value: "images", name: "Images" },
    { value: "documents", name: "Documents" },
    { value: "archives", name: "Archives" },
    { value: "designs", name: "Designs" },
  ];

  /**
   * Function for handling the change event
   *
   * @param value
   */
  const changeSwitchHandler = (value: string) => {
    dispatch(setStyle(value));
  };

  /**
   * Function for handling the change event
   *
   * @param value
   */
  const changeSelectHandler = (value: string) => {
    dispatch(setFilter(value));
  };

  return (
    <div className="files__header">
      <InputSelect
        items={fileFilters}
        value={filter}
        change={changeSelectHandler}
      />

      <InputSwitch
        name="style"
        items={styleSwitch}
        value={style}
        change={changeSwitchHandler}
      />
    </div>
  );
};

export default ContentFilesHeader;
