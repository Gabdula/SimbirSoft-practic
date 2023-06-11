// let arr = [3, -5, -2, 4, -8, 0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0 && arr[i] < 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -120 -9, -8, -7, -6, -5, -4, -3, -2, -1, -10];
// let abs = Math.max.apply(Math,numbers.map(Math.abs));

// let num = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3]
// let pos = 0
// let neg = 0
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0) {
//     pos++
//   } else if (num[i] < 0) {
//     neg++
//   }
// }
// console.log('pos - ' + pos + ', ' + 'neg - ' + neg)

// let num = [ 3, -5, -2, 4, -8, 0, -2]
// console.log((new Set(num)).size !== num.length);

// let num = [3, 5, 3, 6, 5, 7];
// console.log([...new Set(num)]);

let num1 = [6, 8, 9, 11, 3];
let num2 = [6, 8, 9, 11, 3];
console.log(isEqual(num1, num2));
function isEqual(num1, num2) {
  let equal;
  num1.length == num1.length &&
    num2.every(function (element, index) {
      equal = element === num2[index];
    });
  return equal;
}
