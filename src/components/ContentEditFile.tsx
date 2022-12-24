import { useAppDispatch, useAppSelector } from "../store/store";
import Icon from "./icon/Icon";
import { setEditFile, setModalFileVisible } from "../store/reducers/FilesSlice";
import {
  useDeleteFileMutation,
  useGenerateHashLinkMutation,
} from "../store/services/Files";
import { setConfirm } from "../store/reducers/AppSlice";
import { useEffect } from "react";
import { addToast } from "../store/reducers/ToastsSlice";
import { ToastType } from "../types/toasts";
import ContentEditFileShare from "./ContentEditFileShare";
import ContentEditFileShareDelete from "./ContentEditFileShareDelete";

/**
 * This is the ContentEditFile component.
 */
const ContentEditFile = () => {
  const dispatch = useAppDispatch();
  const { editFile: file } = useAppSelector((state) => state.files);
  const [deleteFile, { isSuccess: deleted, isError: notDeleted }] =
    useDeleteFileMutation();
  const [
    generateHashLink,
    { data, isSuccess: generated, isError: notGenerated },
  ] = useGenerateHashLinkMutation();

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
   * Monitor generate hash link
   */
  useEffect(() => {
    if (generated) {
      window.open(`${file?.private_link}/${data.hash}`, "_blank");
    }
  }, [generated]);

  useEffect(() => {
    if (notGenerated) {
      dispatch(
        addToast({
          message: "Link generate error",
          type: ToastType.danger,
        })
      );
    }
  }, [notGenerated]);

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

  /**
   * The function generate and open download link
   */
  const getLinkAndOpen = () => {
    generateHashLink();
  };

  return (
    <div className={"footer" + (file ? " footer_active" : "")}>
      <div className="footer__name">{file?.name}</div>

      <div className="footer__button">
        <button className="btn btn_sm" onClick={getLinkAndOpen}>
          <Icon type="download" />
          Download
        </button>

        <ContentEditFileShare file={file} />
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

        <ContentEditFileShareDelete file={file} />

        <button className="footer__close" onClick={cleanEditFile}>
          <Icon type="close" />
        </button>
      </div>
    </div>
  );
};

export default ContentEditFile;
