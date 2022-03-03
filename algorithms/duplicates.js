function duplicates(list) {
  let newArr = [];
  for (let i = 0; i < list.length; i++) {
    if (newArr[list[i]] === 1) {
      return true;
    } else {
      newArr[list[i]] = 1;
    }
  }
  return false;
}

module.exports = duplicates;
