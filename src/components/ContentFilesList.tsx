import ContentSkeleton from "./ContentSkeleton";
import ContentFilesListItem from "./ContentFilesListItem";
import { useParams } from "react-router-dom";
import { useLoadFilesListQuery } from "../store/services/Files";
import { FileType } from "../types/stores";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import { isFileGroup } from "../models/fileGroup";

/**
 * This is the ContentFilesList component.
 */

const ContentFilesList = () => {
  const params = useParams();
  const { style, filter } = useAppSelector((state) => state.files);
  const [files, setFiles] = useState([]);

  /**
   * We monitor the url change and upload the updated data
   */
  const folder = params["*"];
  const { data, isLoading: load } = useLoadFilesListQuery(folder || "");

  /**
   * Files filter to store
   */
  useEffect(() => {
    if (data) {
      if (filter) {
        setFiles(
          data.files.filter((item: FileType) => isFileGroup(item.type, filter))
        );
      } else {
        setFiles(data.files);
      }
    }
  }, [data, filter]);

  /**
   * Function render files items
   */
  const renderFiles = () => {
    if (files.length) {
      return files.map((file: FileType) => (
        <ContentFilesListItem item={file} key={file.id} />
      ));
    } else {
      return (
        <div className="alert">
          <span>The folder</span> does not contain files! Click
          <span>upload button</span> to add files
        </div>
      );
    }
  };

  return (
    <div
      className={"files__list" + (style === "grid" ? " files__list_grid" : "")}
    >
      {load ? <ContentSkeleton type="files_list" items={6} /> : renderFiles()}
    </div>
  );
};

export default ContentFilesList;
