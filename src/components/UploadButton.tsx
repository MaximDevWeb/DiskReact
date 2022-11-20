/**
 * This is the UploadButton component.
 */
import Icon from "./icon/Icon";
import {ChangeEvent, MouseEvent, useRef} from "react";
import {useAppDispatch} from "../store/store";
import {addFiles} from "../store/reducers/UploadSlice";

const UploadButton = () => {
  const uploadInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  /**
   * Function for adding new files to upload
   *
   * @param e {ChangeEvent<HTMLInputElement>}
   */
  const setUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length) {
      dispatch(addFiles(files));
    }
  }

  /**
   * The function of launching the file selection window
   *
   * @param e {MouseEvent<HTMLAnchorElement>}
   */
  const selectUploadFiles = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    uploadInput.current?.click();
  };

  return (
    <>
      <input
        type="file"
        multiple
        className="hidden"
        onChange={setUploadFiles}
        ref={uploadInput}
      />

      <a href="#" className="btn btn_default" onClick={selectUploadFiles}>
        <Icon type="upload" />
        <span>Upload</span>
      </a>
    </>
  );
}

export default UploadButton;