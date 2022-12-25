import { FileType } from "../types/stores";
import Icon from "./icon/Icon";
import { useGeneratePublicLinkMutation } from "../store/services/Files";
import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { setEditFile } from "../store/reducers/FilesSlice";
import { addToast } from "../store/reducers/ToastsSlice";
import { ToastType } from "../types/toasts";
import { copyFileLink, generatePublicPageLink } from "../helpers/fileLink";

/**
 * This is the ContentEditFileShare component.
 *
 * @property file - The item file
 */
type Props = {
  file: FileType | null;
};

const ContentEditFileShare = ({ file }: Props) => {
  const dispatch = useAppDispatch();
  const [generatePublicLink, { data, isSuccess, isError }] =
    useGeneratePublicLinkMutation();

  /**
   * Monitor generate link
   */
  useEffect(() => {
    if (isSuccess) {
      dispatch(setEditFile(data.file));
      dispatch(
        addToast({
          message: "Public link generated",
        })
      );
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(
        addToast({
          message: "Error generating a public link",
          type: ToastType.danger,
        })
      );
    }
  }, [isError]);

  /**
   * The function generate public link
   */
  const generateLink = () => {
    if (file) generatePublicLink(file.id);
  };

  /**
   * The function copy public link
   */
  const copyLink = async () => {
    if (file) {
      const link = generatePublicPageLink(file.public_hash as string);
      copyFileLink(link);
    }
  };

  return (
    <>
      {file?.public_link ? (
        <button className="btn btn_sm" onClick={copyLink}>
          <Icon type="link" />
          Copy Link
        </button>
      ) : (
        <button className="btn btn_sm" onClick={generateLink}>
          <Icon type="upload" />
          Share
        </button>
      )}
    </>
  );
};

export default ContentEditFileShare;
