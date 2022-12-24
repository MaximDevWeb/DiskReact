import Icon from "./icon/Icon";
import { FileType } from "../types/stores";
import { useDeletePublicLinkMutation } from "../store/services/Files";
import { useEffect } from "react";
import { setEditFile } from "../store/reducers/FilesSlice";
import { useAppDispatch } from "../store/store";
import { addToast } from "../store/reducers/ToastsSlice";
import { ToastType } from "../types/toasts";

/**
 * This is the ContentEditFileShareDelete component.
 *
 * @property file - The item file
 */

type Props = {
  file: FileType | null;
};

const ContentEditFileShareDelete = ({ file }: Props) => {
  const dispatch = useAppDispatch();
  const [deletePublicLink, { data, isSuccess, isError }] =
    useDeletePublicLinkMutation();

  /**
   * Monitor delete link
   */
  useEffect(() => {
    if (isSuccess) {
      dispatch(setEditFile(data.file));
      dispatch(addToast({ message: "Public link deleted" }));
    }
  }, [isSuccess]);

  useEffect(() => {
    addToast({
      message: "Error deleting a public link",
      type: ToastType.danger,
    });
  }, [isError]);

  /**
   * The function delete public link
   */
  const deleteLink = () => {
    if (file) deletePublicLink(file.id);
  };

  return (
    <button
      className={!file?.public_link ? "btn_inactive" : ""}
      onClick={deleteLink}
    >
      <Icon type="unlink" />
      Delete link
    </button>
  );
};

export default ContentEditFileShareDelete;
