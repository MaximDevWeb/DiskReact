type fileExtType = {
  type: string;
  icon?: string;
};

const fileExtArray: Array<fileExtType> = [
  { type: "ai" },
  { type: "avi" },
  { type: "doc" },
  { type: "docx", icon: "doc" },
  { type: "esp" },
  { type: "file" },
  { type: "flv" },
  { type: "gif" },
  { type: "html" },
  { type: "jpg" },
  { type: "jpeg", icon: "jpg" },
  { type: "js" },
  { type: "mov" },
  { type: "mp3" },
  { type: "html" },
  { type: "mpg" },
  { type: "mpeg", icon: "mpg" },
  { type: "pdf" },
  { type: "php" },
  { type: "ppt" },
  { type: "pptx", icon: "ppt" },
  { type: "ps" },
  { type: "psd" },
  { type: "rar" },
  { type: "raw" },
  { type: "sql" },
  { type: "svg" },
  { type: "tif" },
  { type: "txt" },
  { type: "xls" },
  { type: "xlsx", icon: "xls" },
  { type: "zip" },
];

const getFileExt = (fileExt: string) => {
  const ext = fileExtArray.find((item) => item.type === fileExt);

  if (ext) {
    return (ext.icon ? ext.icon : ext.type) + ".svg";
  } else {
    return "file.svg";
  }
};

export default getFileExt;
