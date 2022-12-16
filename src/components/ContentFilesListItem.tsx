import { FileType } from "../types/stores";
import { DateTime } from "luxon";
import getFileExt from "../models/fileExt";
import { numToSize } from "../helpers/numbers";
import Icon from "./icon/Icon";

/**
 * This is the ContentFilesListItem component.
 *
 * @property item - The item file
 */

type Props = {
  item: FileType;
};

const ContentFilesListItem = ({ item }: Props) => {
  /**
   * Parse the file creation date
   *
   * @param date
   */
  const parseDate = (date: string): string => {
    return DateTime.fromISO(date).setLocale("ru").toLocaleString();
  };

  return (
    <div className="file">
      <img
        className="file__icon"
        src={"/images/files/" + getFileExt(item.type)}
        alt={item.name}
      />
      <div className="file__name">{item.name}</div>
      <div className="file__date">{parseDate(item.created_at)}</div>
      <div className="file__size">{numToSize(item.size)}</div>
      <div className="file__link">
        <Icon type="link" />
      </div>
    </div>
  );
};

export default ContentFilesListItem;
