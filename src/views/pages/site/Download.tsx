import logo from "../../../assets/images/logo.svg";
import loader from "../../../assets/images/loader.svg";
import { useLoadPublicLinkFileMutation } from "../../../store/services/Files";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getFileExt from "../../../models/fileExt";
import {
  copyFileLink,
  generatePublicPageLink,
} from "../../../helpers/fileLink";

const Download = () => {
  const { hash } = useParams();
  const [loadPublicLinkFile, { data, isLoading: load }] =
    useLoadPublicLinkFileMutation();

  useEffect(() => {
    loadPublicLinkFile(hash as string);
  }, []);

  const copyLink = () => {
    const link = generatePublicPageLink(hash as string);
    copyFileLink(link);
  };

  const loadRender = () => (
    <div className="download__preload">
      <img src={loader} alt="loader" />

      <div className="download__name">File loading</div>
    </div>
  );

  const dataRender = () =>
    data ? (
      <div className="download__file">
        <img
          src={`/images/files/${getFileExt(data.file.type)}`}
          alt="file.name"
          className="download__icon"
        />

        <div className="download__name">{data.file.name}</div>

        <div className="download__button">
          <a href="#" className="btn btn_black" onClick={copyLink}>
            Copy link
          </a>

          <a href={data.file.public_link} className="btn btn_default">
            Download
          </a>
        </div>
      </div>
    ) : (
      <div className="download__file">
        <img
          src="/images/files/file_not_found.svg"
          alt="Not file"
          className="download__icon"
        />

        <div className="download__name">File not found</div>

        <div className="download__button">
          <Link to="/" className="btn btn_black">
            Home
          </Link>
        </div>
      </div>
    );

  return (
    <div className="download">
      <div>
        <img src={logo} alt="Yandex Logo" className="download__logo" />
      </div>

      <>{load ? loadRender() : dataRender()}</>
    </div>
  );
};

export default Download;
