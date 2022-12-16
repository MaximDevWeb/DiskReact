/**
 * This is the ContentFiles component.
 */
import ContentFilesHeader from "./ContentFilesHeader";
import ContentFilesList from "./ContentFilesList";

const ContentFiles = () => {
  return (
    <div className="files">
      <ContentFilesHeader />

      <ContentFilesList />
    </div>
  );
};

export default ContentFiles;
