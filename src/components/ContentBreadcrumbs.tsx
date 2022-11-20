import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs, LoaderData } from "../types/app";
import { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import Icon from "./icon/Icon";

/**
 * This is the ContentBreadcrumbs component.
 */

const ContentBreadcrumbs = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const data = useLoaderData() as LoaderData;
  const [items, setItems] = useState<Array<Breadcrumbs>>([]);

  useEffect(() => {
    let parent = pathname;
    let sub: Array<string> = [];
    const list: Array<Breadcrumbs> = [];

    /**
     * Changing the parent link if there are params[*]
     */
    if (params["*"]) {
      parent = pathname.replace("/" + params["*"], "");
      sub = params["*"].split("/");
    }

    /**
     * Add parent link in items array
     */
    list.push({
      name: data.title ?? "",
      link: parent !== pathname ? parent : "",
    });

    /**
     * Add subpages link in items array
     */
    sub.forEach((item) => {
      parent = `${parent}/${item}`;
      list.push({
        name: _.capitalize(_.startCase(item)),
        link: parent !== pathname ? parent : "",
      });
    });

    setItems(list);
  }, [pathname]);

  /**
   * Function rendering item Breadcrumbs
   *
   * @param item
   */
  const itemFragment = (item: Breadcrumbs) => {
    if (item.link) {
      return (
        <Fragment key={item.name}>
          <li>
            <Link to={item.link} role="link">
              {item.name}
            </Link>
          </li>
          <li>
            <Icon type="right_arrow" />
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment key={item.name}>
          <li>{item.name}</li>
        </Fragment>
      );
    }
  };

  return (
    <ul className="breadcrumbs">{items.map((item) => itemFragment(item))}</ul>
  );
};

export default ContentBreadcrumbs;
