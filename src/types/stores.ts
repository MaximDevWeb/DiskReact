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

export type UploadProgress = {
  fileName: string;
  progress: number;
};

export type FileType = {
  id: number;
  name: string;
  size: number;
  type: string;
  link: string;
  created_at: string;
};
