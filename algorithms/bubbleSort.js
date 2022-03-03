function bubbleSort(list) {
  let len = list.length;
  for (let j = 0; j < len - 1; j++) {
    for (let i = 0; i < len - 1; i++) {
      if (list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }
  }

  return list;
}
module.exports = bubbleSort;
