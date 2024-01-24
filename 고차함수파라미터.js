// function Counter() {
//   let num = 0;
//   Counter.prototype.increase = () => ++num;
//   Counter.prototype.decrease = () => --num;
// }
//
// const Counter = (function () {
//   let num = 0;
//   function Counter() {
//
//   }
//
//   Counter.prototype.increase = () => ++num;
//   Counter.prototype.decrease = () => --num;
//
//   return Counter;
// })();


const counter = (() => {
  let num = 0;
  return (aux) => num = aux(num);
})();

const increase = num => ++num;
const decrease = num => --num;

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));


