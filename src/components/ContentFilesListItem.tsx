import { FileType } from "../types/stores";
import { DateTime } from "luxon";
import getFileExt from "../models/fileExt";
import { numToSize } from "../helpers/numbers";
import Icon from "./icon/Icon";
import { useAppDispatch } from "../store/store";
import { setEditFile } from "../store/reducers/FilesSlice";
import { MouseEvent } from "react";
import { copyFileLink, generatePublicPageLink } from "../helpers/fileLink";

/**
 * This is the ContentFilesListItem component.
 *
 * @property item - The item file
 */

type Props = {
  item: FileType;
};

const ContentFilesListItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  /**
   * Parse the file creation date
   *
   * @param date
   */
  const parseDate = (date: string): string => {
    return DateTime.fromISO(date).setLocale("ru").toLocaleString();
  };

  /**
   * Set edit file
   */
  const setFile = () => {
    dispatch(setEditFile(item));
  };

  /**
   * The function copy public link
   */
  const copyLink = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const link = generatePublicPageLink(item.public_hash as string);
    copyFileLink(link);
  };

  return (
    <div className="file" onClick={setFile}>
      <img
        className="file__icon"
        src={"/images/files/" + getFileExt(item.type)}
        alt={item.name}
      />
      <div className="file__name">{item.name}</div>
      <div className="file__date">{parseDate(item.created_at)}</div>
      <div className="file__size">{numToSize(item.size)}</div>

      <div className="file__share">
        {item.public_link && (
          <div className="file__link" onClick={copyLink}>
            <Icon type="link" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentFilesListItem;
