import Icon from "./icon/Icon";
import { useAppDispatch, useAppSelector } from "../store/store";
import UploadLoaderItem from "./UploadLoaderItem";
import { useState } from "react";
import { cleanFiles } from "../store/reducers/UploadSlice";

/**
 * This is the UploadLoader component.
 */

const UploadLoader = () => {
  const dispatch = useAppDispatch();
  const { files } = useAppSelector((state) => state.upload);
  const [minimize, setMinimize] = useState(false);

  /**
   * The function for minimize handler
   */
  const minimizeHandler = () => {
    setMinimize(!minimize);
  };

  /**
   * The function for clean load list
   */
  const cleanHandler = () => {
    dispatch(cleanFiles());
  };

  return (
    <div
      className={
        "uploader" +
        (files.length ? " uploader_active" : "") +
        (minimize ? " uploader_min" : "")
      }
    >
      <div className="uploader__header">
        <p>Upload files</p>

        <div>
          <button onClick={minimizeHandler}>
            <Icon type="down_angle" className="icon__min" />
          </button>

          <button onClick={cleanHandler}>
            <Icon type="close" />
          </button>
        </div>
      </div>

      <div className="uploader__list">
        {files.map((item: File) => (
          <UploadLoaderItem file={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default UploadLoader;
