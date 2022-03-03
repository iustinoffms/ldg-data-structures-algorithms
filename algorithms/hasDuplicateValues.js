function hasDuplicateValues(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i !== j && list[i] === list[j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = hasDuplicateValues;
