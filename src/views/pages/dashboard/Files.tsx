import ContentBreadcrumbs from "../../../components/ContentBreadcrumbs";
import ContentFolders from "../../../components/ContentFolders";
import ContentFiles from "../../../components/ContentFiles";

/**
 * This is the Files component.
 */
const Files = () => {
  return (
    <main className="main">
      <ContentBreadcrumbs />

      <ContentFolders />

      <ContentFiles />
    </main>
  );
};

export default Files;
