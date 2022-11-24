import { Folder } from "../types/app";
import { Link, useLocation } from "react-router-dom";
import folderImg from "../assets/images/files/folder.svg";
import Icon from "./icon/Icon";
import { numToSize } from "../helpers/numbers";
import { MouseEvent, useState } from "react";

/**
 * This is the ContentFolder component.
 *
 * @property item - The item folder type
 */

type Props = {
  item: Folder;
};

const ContentFolder = ({ item }: Props) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * Function change visible context menu
   */
  const changeVisibleContext = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setVisible(!visible);
  };

  /**
   * Function hide context menu
   */
  const focusOutContext = () => {
    setVisible(false);
  };

  return (
    <Link to={`${pathname}/${item.slug}`} className="folder-item" role="link">
      <div className="folder-item__header">
        <img src={folderImg} alt="Folder" className="folder-item__image" />

        <div className="folder-item__title">
          {item.name}

          <span>
            {item.sub_folders_count ?? 0} Folders | {item.files_count ?? 0}{" "}
            Files
          </span>
        </div>

        <div
          className="folder-item__option"
          tabIndex={1}
          onClick={changeVisibleContext}
          onBlur={focusOutContext}
        >
          <Icon type="menu_dotes" />

          <div className={"context" + (visible ? " context_active" : "")}>
            <div className="context__item">Delete</div>
            <div className="context__item">Rename</div>
          </div>
        </div>
      </div>

      <div className="folder-item__bottom">
        <div className="folder-item__size">
          <span>Files size</span>
          {numToSize(item.files_size)}
        </div>
      </div>
    </Link>
  );
};

export default ContentFolder;
