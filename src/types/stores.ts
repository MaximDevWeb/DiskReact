export type Folder = {
  id: number;
  name: string;
  slug: string;
  sub_folders_count: number;
  files_count: number;
  files_size: number;
};

export type FolderData = {
  id: null | number;
  name: string;
  prefix?: string;
};
