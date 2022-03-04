function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let min = list[i];
    let index;
    for (let j = i + 1; j < list.length; j++) {
      if (min > list[j]) {
        min = list[j];
        index = j;
      }
    }
    let currentNumber = list[i];
    if (currentNumber > min) {
      list[i] = min;
      list[index] = currentNumber;
    }
  }
  return list;
}

module.exports = selectionSort;

//VARIANTA NUMARUL 2 - SIMPLIFICATA
// function selectionSort(list) {
//   for (let i = 0; i < list.length; i++) {
//     for (let j = i + 1; j < list.length; j++) {
//       if (list[i] > list[j]) {
//         temp = list[i];
//         list[i] = list[j];
//         list[j] = temp;
//          [list[i], list[j]] = [list[j], list[i]]
//       }
//     }
//   }
//   return list;
// }
