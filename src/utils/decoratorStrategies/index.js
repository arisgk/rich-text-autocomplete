export function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;

  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
