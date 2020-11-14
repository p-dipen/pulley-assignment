export const isFileTypeXlsx = (file) => {
  let validExts = ['.xlsx', '.xls'];
  let fileExt = file.substring(file.lastIndexOf('.'));
  if (validExts.indexOf(fileExt) < 0) {
    return false;
  }
  return true;
};
