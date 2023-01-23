import developer from "../assets/images/developer.svg";

/**
 * This is the ContentDevelopment component.
 */

const ContentDevelopment = () => {
  return (
    <main className="main">
      <div className="development">
        <img src={developer} alt="Developer" />
        <h2>The page is under development</h2>
        <div className="alert">
          <span>Visit</span> the page later
        </div>
      </div>
    </main>
  );
};

export default ContentDevelopment;
