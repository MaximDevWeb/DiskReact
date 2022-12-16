import ContentSkeleton from "./ContentSkeleton";
import ContentFilesListItem from "./ContentFilesListItem";
import { useParams } from "react-router-dom";
import { useLoadFilesListQuery } from "../store/services/Files";
import { FileType } from "../types/stores";
import { useEffect } from "react";

/**
 * This is the ContentFilesList component.
 */

const ContentFilesList = () => {
  const params = useParams();

  /**
   * We monitor the url change and upload the updated data
   */
  const folder = params["*"];
  const { data, isLoading: load, error } = useLoadFilesListQuery(folder || "");


  /**
   * Function render files items
   *
   * @param files
   */
  const renderFiles = (files: Array<FileType>) => {
    if (files.length) {
      return files.map((file) => (
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
    <div className="files__list">
      {load ? (
        <ContentSkeleton type="files_list" items={6} />
      ) : (
        renderFiles(data.files)
      )}
    </div>
  );
};

export default ContentFilesList;
