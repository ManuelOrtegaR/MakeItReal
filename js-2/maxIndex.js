function maxIndex(array) {
  let maximo = 0;
  let maxindex = 0;
  for (var i = 0; i < array.length; i++) {
    if (maximo < array[i]) {
      maximo = array[i];
      maxindex = i;
    }
  }
  if (maximo === 0) {
    maxindex = -1;
  }
  return maxindex;
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
