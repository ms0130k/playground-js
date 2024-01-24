// function Person(name, age) {
//   this.name = name;
//   let _age = age;
//   this.hello = () => console.log(`${name}은 ${_age}살`);
// }
//
// let person = new Person('영호', 10);
// let person1 = new Person('영', 101);
//
// person.hello();
// person1.hello();
// console.log(person1._age);


function Person(name, age) {
  this.name = name;
  let _age = age;

  Person.prototype.hello = function () {
    console.log(`${this.name}은 ${_age}살`);
  }
}

let person = new Person('영호', 10);
let person1 = new Person('영', 101);

person1.hello();
person.hello();
// console.log(person1._age);


