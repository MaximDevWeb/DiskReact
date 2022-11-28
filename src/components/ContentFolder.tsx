import { Link, useLocation } from "react-router-dom";
import folderImg from "../assets/images/files/folder.svg";
import Icon from "./icon/Icon";
import { numToSize } from "../helpers/numbers";
import { MouseEvent, useState } from "react";
import { Folder } from "../types/stores";
import { useAppDispatch } from "../store/store";
import {
  setDataFolder,
  setModalFolderVisible,
} from "../store/reducers/FoldersSlice";
import { useDeleteFolderMutation } from "../store/services/Folders";

/**
 * This is the ContentFolder component.
 *
 * @property item - The item folder type
 */

type Props = {
  item: Folder;
};

const ContentFolder = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState<boolean>(false);
  const [deleteFolder] = useDeleteFolderMutation();

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

  /**
   * Function set editable folder
   */
  const setEditFolder = () => {
    dispatch(setModalFolderVisible(true));
    dispatch(
      setDataFolder({
        name: item.name,
        id: item.id,
      })
    );
  };

  /**
   * Function delete folder
   */
  const deleteFolderItem = () => {
    deleteFolder(item);
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
            <div className="context__item" onClick={deleteFolderItem}>
              Delete
            </div>
            <div className="context__item" onClick={setEditFolder}>
              Rename
            </div>
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
