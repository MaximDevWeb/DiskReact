import ContentSkeleton from "./ContentSkeleton";
import ContentFilesListItem from "./ContentFilesListItem";
import { useParams } from "react-router-dom";
import { useLoadFilesListQuery } from "../store/services/Files";
import { FileType } from "../types/stores";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import { isFileGroup } from "../models/fileGroup";
import ContentFilesNav from "./ContentFilesNav";
import _ from "lodash";

/**
 * This is the ContentFilesList component.
 */

const ContentFilesList = () => {
  const params = useParams();
  const { style, filter, currentPage, filePerPage } = useAppSelector(
    (state) => state.files
  );
  const [files, setFiles] = useState([]);
  const [filesInPage, setFilesInPage] = useState([]);

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
   * Files render to page
   */
  useEffect(() => {
    if (files.length) {
      setFilesInPage(_.chunk(files, filePerPage)[currentPage - 1]);
    } else {
      setFilesInPage([]);
    }
  }, [files, currentPage]);

  /**
   * Function render files items
   */
  const renderFiles = () => {
    if (filesInPage.length) {
      return (
        <>
          <div
            className={
              "files__list" + (style === "grid" ? " files__list_grid" : "")
            }
          >
            {filesInPage.map((file: FileType) => (
              <ContentFilesListItem item={file} key={file.id} />
            ))}
          </div>

          <ContentFilesNav files={files.length} />
        </>
      );
    } else {
      return (
        <div className="alert">
          <span>The folder</span> does not contain files! Click
          <span>upload button</span> to add files
        </div>
      );
    }
  };

  /**
   * Function render preload items
   */
  const renderPreload = () => {
    return (
      <div
        className={
          "files__list" + (style === "grid" ? " files__list_grid" : "")
        }
      >
        <ContentSkeleton type="files_list" items={6} />
      </div>
    );
  };

  return <>{load ? renderPreload() : renderFiles()}</>;
};

export default ContentFilesList;
