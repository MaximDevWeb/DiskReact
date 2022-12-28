/**
 * This is the ContentFilesNav component.
 */
import Icon from "./icon/Icon";
import { useAppDispatch, useAppSelector } from "../store/store";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { setPage } from "../store/reducers/FilesSlice";

type Props = {
  files: number;
};

const ContentFilesNav = ({ files }: Props) => {
  const dispatch = useAppDispatch();
  const { currentPage, filePerPage } = useAppSelector((state) => state.files);
  const [pages, setPages] = useState(1);

  /**
   * Reset current page and set pages count when changing props
   */
  useEffect(() => {
    setPages(Math.ceil(files / filePerPage));
    dispatch(setPage(1));
  }, [files]);

  /**
   * The function set first/prev/next/last page
   */
  const changePage = (e: MouseEvent<HTMLButtonElement>) => {
    const direction = e.currentTarget.dataset.direction;
    let page = currentPage;

    switch (direction) {
      case "next":
        page++;
        break;
      case "prev":
        page--;
        break;
      case "first":
        page = 1;
        break;
      case "last":
        page = pages;
        break;
    }

    if (page < 1) page = 1;
    if (page > pages) page = pages;

    dispatch(setPage(page));
  };

  /**
   * The function set current page
   */
  const changePageInput = (e: ChangeEvent<HTMLInputElement>) => {
    let page = Number(e.currentTarget.value);

    if (page < 1) page = 1;
    if (page > pages) page = pages;

    dispatch(setPage(page));
  };

  if (pages > 1) {
    return (
      <div className="files-nav">
        <button
          className={
            "files-nav__btn" + (currentPage === 1 ? " btn_inactive" : "")
          }
          data-direction="first"
          onClick={changePage}
        >
          <Icon type="double_left_arrow" />
        </button>

        <button
          className={
            "files-nav__btn" + (currentPage === 1 ? " btn_inactive" : "")
          }
          data-direction="prev"
          onClick={changePage}
        >
          <Icon type="left_arrow" />
        </button>

        <div className="files-nav__counter">
          <input
            type="text"
            className="files-nav__input"
            value={currentPage}
            onChange={changePageInput}
          />

          <span>out of {pages}</span>
        </div>

        <button
          className={
            "files-nav__btn" + (currentPage === pages ? " btn_inactive" : "")
          }
          data-direction="next"
          onClick={changePage}
        >
          <Icon type="right_arrow" />
        </button>

        <button
          className={
            "files-nav__btn" + (currentPage === pages ? " btn_inactive" : "")
          }
          data-direction="last"
          onClick={changePage}
        >
          <Icon type="double_right_arrow" />
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ContentFilesNav;
