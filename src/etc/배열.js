// const arr = [
//   {name: '배열1', path: '/array'},
//   {name: '배열2', path: '/array2'},
//   {name: '배열3', path: '/array3'},
// ];
//
// arr.forEach((obj, idx) => {
//   arr[idx] = {
//     ...obj,
//     path2: obj.path.replace('/', ''),
//   };
// });

// console.log(arr);


// const arr = [
//   {name: '배열1', path: '/array'},
//   {name: '배열2', path: '/array2'},
//   {name: '배열3', path: '/array3'},
// ];
//
// arr.forEach((obj, idx) => {
//   obj.path2 = obj.path.replace('/', '');
// });
//
// console.log(arr);
const arr = [
  {name: '배열1', path: '/array'},
  {name: '배열2', path: '/array2'},
  {name: '배열3', path: '/array3'},
];

arr.forEach((obj, idx) => {
  obj = {
    ...obj,
    path2: obj.path.replace('/', ''),
  };
});

console.log(arr);