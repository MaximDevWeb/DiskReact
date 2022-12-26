const groups = {
  images: ["jpeg", "jpg", "png", "svg", "webp", "bmp", "tiff", "raw"],
  documents: ["doc", "docx", "pdf", "xls", "xlsx", "txt", "rtf", "odt", "ods"],
  archives: ["zip", "rar", "tar"],
  designs: ["ai", "eps", "ps", "psd", "fig"],
};

export const isFileGroup = (ext: string, group: string): boolean => {
  return groups[
    group as "images" | "documents" | "archives" | "designs"
  ].includes(ext);
};
