let regExp = new RegExp('^(?=[a-zA-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-_,.])[a-zA-Z\\d-_,.]{6,15}$');
console.log(regExp);

console.log(regExp.test('a123Z.'));

