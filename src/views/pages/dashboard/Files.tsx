import ContentBreadcrumbs from "../../../components/ContentBreadcrumbs";

/**
 * This is the Files component.
 */
const Files = () => {
  return (
    <main className="main">
      <ContentBreadcrumbs />

      <div className="folders">
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />
            <div className="folder-item__title">
              Downloads
              <span>20 Files</span>
            </div>
            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              24GB
            </div>
          </div>
        </a>
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />

            <div className="folder-item__title">
              Photos
              <span>20 Files</span>
            </div>

            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>

              <div className="context">
                <div className="context__item">Delete</div>
                <div className="context__item">Rename</div>
              </div>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              19GB
            </div>
          </div>
        </a>
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />
            <div className="folder-item__title">
              Portfolio
              <span>20 Files</span>
            </div>
            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              8GB
            </div>
          </div>
        </a>
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />
            <div className="folder-item__title">
              Portfolio
              <span>20 Files</span>
            </div>
            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              8GB
            </div>
          </div>
        </a>
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />
            <div className="folder-item__title">
              Portfolio
              <span>20 Files</span>
            </div>
            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              8GB
            </div>
          </div>
        </a>
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />
            <div className="folder-item__title">
              Portfolio
              <span>20 Files</span>
            </div>
            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              8GB
            </div>
          </div>
        </a>
        <a href="#" className="folder-item">
          <div className="folder-item__header">
            <img
              src="/images/files/folder.svg"
              alt="Folder image"
              className="folder-item__image"
            />
            <div className="folder-item__title">
              Portfolio
              <span>20 Files</span>
            </div>
            <div className="folder-item__option">
              <svg className="icon">
                <use xlinkHref="#menu_dotes"></use>
              </svg>
            </div>
          </div>

          <div className="folder-item__bottom">
            <div className="folder-item__size">
              <span>Folder size</span>
              8GB
            </div>
          </div>
        </a>
      </div>

      <div className="files">
        <div className="files__header">
          <div className="select">
            <select className="select">
              <option value="">All files</option>
              <option value="images">Images</option>
              <option value="documents">Documents</option>
              <option value="archives">Archives</option>
              <option value="designs">Designs</option>
            </select>
            <svg className="icon">
              <use xlinkHref="#down_arrow"></use>
            </svg>
          </div>

          {/*<div className="radio-switch">*/}
          {/*  <div className="radio-switch__item">*/}
          {/*    <input*/}
          {/*      id="style_list"*/}
          {/*      type="radio"*/}
          {/*      name="style"*/}
          {/*      value="list"*/}
          {/*      checked*/}
          {/*    />*/}
          {/*    <label htmlFor="style_list">*/}
          {/*      <svg className="icon">*/}
          {/*        <use xlinkHref="#list"></use>*/}
          {/*      </svg>*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*  <div className="radio-switch__item">*/}
          {/*    <input id="style_grid" type="radio" name="style" value="grid" />*/}
          {/*    <label htmlFor="style_grid">*/}
          {/*      <svg className="icon">*/}
          {/*        <use xlinkHref="#grid"></use>*/}
          {/*      </svg>*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className="files__list">
          <div className="file">
            <img className="file__icon" src="/images/files/doc.svg" />
            <div className="file__name">Lorem ipsum dolor sit.doc</div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">250.4MB</div>
            <div className="file__link"></div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/pdf.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur.pdf
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">10.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>

          <div className="file">
            <img className="file__icon" src="/images/files/zip.svg" />
            <div className="file__name">
              Lorem ipsum dolor sit amet, consectetur adipisicing.zip
            </div>
            <div className="file__date">12.10.2022</div>
            <div className="file__size">50.4MB</div>
            <div className="file__link">
              <svg className="icon">
                <use xlinkHref="#link"></use>
              </svg>
            </div>
          </div>
        </div>

        <div className="uploader">
          <div className="uploader__header">
            <p>Upload files</p>

            <div>
              <a href="#">
                <svg className="icon icon__min">
                  <use xlinkHref="#down_angle"></use>
                </svg>
              </a>

              <a href="#">
                <svg className="icon">
                  <use xlinkHref="#close"></use>
                </svg>
              </a>
            </div>
          </div>

          <div className="uploader__list">
            <div className="uploader__item">
              <img
                className="uploader__icon"
                src="/images/files/pdf.svg"
                alt="upload file"
              />
              <div className="uploader__name">
                Lorem ipsum.pdf
                <div className="timeline">
                  <div className="timeline__path"></div>
                  {/*<div className="timeline__line" style="width: 80%"></div>*/}
                </div>
              </div>
              <a href="#" className="uploader__option">
                <svg className="icon">
                  <use xlinkHref="#close"></use>
                </svg>
              </a>
            </div>

            <div className="uploader__item">
              <img
                className="uploader__icon"
                src="/images/files/ai.svg"
                alt="upload file"
              />
              <div className="uploader__name">
                Lorem ipsum.ai
                <div className="timeline">
                  <div className="timeline__path"></div>
                  {/*<div className="timeline__line" style="width: 100%"></div>*/}
                </div>
              </div>
              <div className="uploader__option">
                <svg className="icon">
                  <use xlinkHref="#success"></use>
                </svg>
              </div>
            </div>

            <div className="uploader__item">
              <img
                className="uploader__icon"
                src="/images/files/txt.svg"
                alt="upload file"
              />
              <div className="uploader__name">
                Lorem ipsum.txt
                <div className="timeline">
                  <div className="timeline__path"></div>
                  {/*<div className="timeline__line" style="width: 30%"></div>*/}
                </div>
              </div>
              <a href="#" className="uploader__option">
                <svg className="icon">
                  <use xlinkHref="#close"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer__name">
            Lorem ipsum dolor sit amet, consectetur.pdf
          </div>

          <div className="footer__button">
            <a href="#" className="btn btn_sm">
              <svg className="icon">
                <use xlinkHref="#download"></use>
              </svg>
              Download
            </a>
            <a href="#" className="btn btn_sm">
              <svg className="icon">
                <use xlinkHref="#upload"></use>
              </svg>
              Share
            </a>
          </div>

          <div className="footer__option">
            <a href="#">
              <svg className="icon">
                <use xlinkHref="#edit"></use>
              </svg>
              Rename
            </a>

            <a href="#">
              <svg className="icon">
                <use xlinkHref="#delete"></use>
              </svg>
              Delete
            </a>

            <a href="#">
              <svg className="icon">
                <use xlinkHref="#unlink"></use>
              </svg>
              Удалить ссылку
            </a>

            <a href="#" className="footer__close">
              <svg className="icon">
                <use xlinkHref="#close"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Files;
