import { useEffect, useState } from "react";
import getFileExt from "../models/fileExt";
import Icon from "./icon/Icon";
import { useParams } from "react-router-dom";
import { useLoadFileMutation } from "../store/services/Upload";
import { useAppDispatch, useAppSelector } from "../store/store";
import { removeFile } from "../store/reducers/UploadSlice";
import { addToast } from "../store/reducers/ToastsSlice";
import { ToastType } from "../types/toasts";

/**
 * This is the UploadLoaderItem component.
 *
 * @property file - The upload file
 */

type Props = {
  file: File;
};

const UploadLoaderItem = ({ file }: Props) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [fileExtIcon, setFileExtIcon] = useState("");
  const [loadFile, { isSuccess }] = useLoadFileMutation();
  const { progress } = useAppSelector((state) => state.upload);

  const [uploadFunc, setUploadFunc] = useState<any>(null);
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  /**
   * Prepare the file for upload and send it
   */
  useEffect(() => {
    const fileExt = file.name.split(".").pop() as string;
    setFileExtIcon(getFileExt(fileExt));

    const resp = new FormData();
    resp.append("file", file);
    resp.append("folder", params["*"] as string);

    try {
      setUploadFunc(loadFile(resp));
    } catch (e: any) {
      dispatch(
        addToast({
          message: `File ${file.name} was not uploaded`,
          type: ToastType.danger,
        })
      );
    }
  }, []);

  /**
   * Monitor the download of the file
   * and delete it after a successful download
   */
  useEffect(() => {
    if (isSuccess) {
      dispatch(removeFile(file));
      dispatch(
        addToast({
          message: `File ${file.name} uploaded`,
        })
      );
    }
  }, [isSuccess]);

  /**
   * Monitor the download of the file
   * and update the progress
   */
  useEffect(() => {
    const itemProgress = progress.find((item) => item.fileName === file.name);

    if (itemProgress) setCurrentProgress(itemProgress.progress * 100);
  }, [progress]);

  /**
   * Request cancellation function
   */
  const abortHandler = () => {
    dispatch(removeFile(file));
    uploadFunc.abort();
  };

  return (
    <div className="uploader__item">
      <img
        className="uploader__icon"
        src={`/images/files/${fileExtIcon}`}
        alt={file.name}
      />

      <div className="uploader__name">
        {file.name}

        <div className="timeline">
          <div className="timeline__path"></div>
          <div
            className="timeline__line"
            style={{ width: `${currentProgress}%` }}
          ></div>
        </div>
      </div>

      <button className="uploader__option" onClick={abortHandler}>
        <Icon type="close" />
      </button>
    </div>
  );
};

export default UploadLoaderItem;
