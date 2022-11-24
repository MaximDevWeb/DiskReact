import { useParams } from "react-router-dom";
import _ from "lodash";
import { useGetFoldersQuery } from "../store/services/Folders";
import ContentSkeleton from "./ContentSkeleton";
import { Folder } from "../types/app";
import ContentFolder from "./ContentFolder";

/**
 * This is the ContentFolders component.
 */

const ContentFolders = () => {
  const params = useParams();

  /**
   * We monitor the url change and upload the updated data
   */
  const slug = _.last(params["*"]?.split("/"));
  const { data, isLoading: load } = useGetFoldersQuery(slug ?? "");

  /**
   * Function render folders items
   *
   * @param folders
   */
  const renderFolders = (folders: Array<Folder>) => {
    if (folders.length) {
      return (
        <div className="folders">
          {folders.map((folder) => (
            <ContentFolder item={folder} key={folder.id} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="alert">
          <span>The folder</span> does not contain sub folders!
        </div>
      );
    }
  };

  return (
    <>
      {load ? (
        <div className="folders">
          <ContentSkeleton type="folder" items={4} />
        </div>
      ) : (
        renderFolders(data.folders)
      )}
    </>
  );
};

export default ContentFolders;
