function sum(num) {
  let x = 0;

  while (num > 0) {
    x = x + num;
    num--;
  }

  return x;
}
console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120
