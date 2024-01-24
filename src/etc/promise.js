Promise.resolve('resolve').then(console.log);
console.log('전');
new Promise((resolve, reject) => {
  resolve('완료');
}).then(console.log);


console.log('후');

