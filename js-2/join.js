function join(array) {
  let arreglo = "";
  for (var i = 0; i < array.length; i++) {
    arreglo = arreglo + " " + array[i];
  }
  return arreglo;
}

console.log(join([1, 3, 2])); // 1
console.log(join([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(join([])); // -1
