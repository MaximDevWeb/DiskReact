import { MenuItem } from "../types/app";

const menuList: Array<MenuItem> = [
  {
    name: "Files",
    link: "/dashboard/files",
    icon: "files",
  },
  {
    name: "Photos",
    link: "/dashboard/photos",
    icon: "photo",
  },
  {
    name: "Albums",
    link: "/dashboard/albums",
    icon: "album",
  },
  {
    name: "Shared",
    link: "/dashboard/shares-access",
    icon: "shared",
  },
  {
    name: "Archives",
    link: "/dashboard/archives",
    icon: "archive",
  },
  {
    name: "Trash",
    link: "/dashboard/trash",
    icon: "delete",
  },
];

export default menuList;
