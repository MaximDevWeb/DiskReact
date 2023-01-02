/**
 * Converting a number to a file size
 *
 * @param bytes
 * @param si
 * @param dp
 */
export const numToSize = (
  bytes: number,
  si: boolean = true,
  dp: number = 1
) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units: Array<String> = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
};

/**
 * Rounds the percent to fixed
 *
 * @param percent
 */
export const percentToFixed = (percent: number): string => {
  if (percent > 0.1) {
    return percent.toFixed(1);
  } else if (percent < 0.1 && percent > 0.01) {
    return percent.toFixed(2);
  } else if (percent < 0.01 && percent > 0.001) {
    return percent.toFixed(3);
  } else {
    return "-";
  }
};
