const parseData = (input) => {
  const data = [ ...input.data ]
  const column = [ ...input.column ]
  const result = []
  for (const dataItem of data) {
    let expectObiect = {}
    let index = 0
    for (const columnItem of column) {
      expectObiect[columnItem.name] = dataItem[index]
      index++
    }
    result.push(expectObiect)
  }
  return result;
}
export { parseData };
