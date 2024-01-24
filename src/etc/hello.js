// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index, arr) => {
//   arr[index] = item ** 3;
//   console.log(this);
// }, {a: 'a'});
// console.log('------------------');
// (function () {
//   arr.forEach((item, index, arr) => {
//     arr[index] = item ** 3;
//     console.log(this);
//   }, {a: 'a'});
// })();
// console.log('------------------');
// arr.forEach(function (item, index, arr) {
//   arr[index] = item ** 3;
//   console.log(this);
// }, {a: 'a'});
// console.log(arr);
//
// console.log('------------------');
//
// class Counter {
//   constructor() {
//     this.sum = 0;
//     this.count = 0;
//   }
//   add(array) {
//     // 오직 함수 표현식만 자신의 this 바인딩을 가집니다.
//     array.forEach(function countEntry(entry) {
//       this.sum += entry;
//       ++this.count;
//     }, this);
//   }
// }
//
// const obj = new Counter();
// obj.add([2, 5, 9]);
// console.log(obj.count); // 3
// console.log(obj.sum); // 16
console.log(this);

(function () {
  console.log(this);
})();