import {useAppDispatch} from "../store/store";
import Icon from "./icon/Icon";
import {MouseEvent} from "react";
import {setModalFolderVisible} from "../store/reducers/AppSlice";
import UploadButton from "./UploadButton";

/**
 * This is the HeaderButtons component.
 */

const HeaderButtons = () => {
  const dispatch = useAppDispatch();

  /**
   * Function for handling the open modal folder create
   *
   * @param e {MouseEvent<HTMLAnchorElement>}
   */
  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(setModalFolderVisible(true));
  }

  return (
    <>
      <UploadButton />

      <a href="#" className="btn btn_black" onClick={openModal} role="button">
        <Icon type="add_folder" />
        <span>Create</span>
      </a>
    </>
  );
}

export default HeaderButtons;