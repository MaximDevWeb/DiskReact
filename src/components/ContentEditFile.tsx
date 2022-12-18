import { useAppDispatch, useAppSelector } from "../store/store";
import Icon from "./icon/Icon";
import { setEditFile, setModalFileVisible } from "../store/reducers/FilesSlice";
import { useDeleteFileMutation } from "../store/services/Files";
import { setConfirm } from "../store/reducers/AppSlice";
import { useEffect } from "react";
import { addToast } from "../store/reducers/ToastsSlice";
import { ToastType } from "../types/toasts";

/**
 * This is the ContentEditFile component.
 */
const ContentEditFile = () => {
  const dispatch = useAppDispatch();
  const { editFile: file } = useAppSelector((state) => state.files);
  const [deleteFile, { isSuccess: deleted, isError: notDeleted }] =
    useDeleteFileMutation();

  /**
   * Monitor delete file
   */
  useEffect(() => {
    if (deleted) {
      dispatch(setEditFile(null));
      dispatch(
        addToast({
          message: "File deleted",
        })
      );
    }
  }, [deleted]);

  useEffect(() => {
    if (notDeleted) {
      dispatch(
        addToast({
          message: "File Deletion error",
          type: ToastType.danger,
        })
      );
    }
  }, [notDeleted]);

  /**
   * The function clean edit file
   */
  const cleanEditFile = () => {
    dispatch(setEditFile(null));
  };

  /**
   * The function open rename file modal
   */
  const renameFile = () => {
    dispatch(setModalFileVisible(true));
  };

  /**
   * The function delete file
   */
  const deleteFileItem = () => {
    dispatch(
      setConfirm({
        message: `Delete a file ${file?.name}?`,
        callback: deleteFile,
        callbackArgs: file?.id,
      })
    );
  };

  return (
    <div className={"footer" + (file ? " footer_active" : "")}>
      <div className="footer__name">{file?.name}</div>

      <div className="footer__button">
        <a href={file?.link} className="btn btn_sm" target="_blank">
          <Icon type="download" />
          Download
        </a>
        <button className="btn btn_sm">
          <Icon type="upload" />
          Share
        </button>
      </div>

      <div className="footer__option">
        <button onClick={renameFile}>
          <Icon type="edit" />
          Rename
        </button>

        <button onClick={deleteFileItem}>
          <Icon type="delete" />
          Delete
        </button>

        <button>
          <Icon type="unlink" />
          Delete link
        </button>

        <button className="footer__close" onClick={cleanEditFile}>
          <Icon type="close" />
        </button>
      </div>
    </div>
  );
};

export default ContentEditFile;
