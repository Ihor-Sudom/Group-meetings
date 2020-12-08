'user strict'

function getSenseOfLife() {
  console.log(42);
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

function sum(a, b) {
  return a + b;
}

console.log(sum(10));
console.log(-1 , 10, 1);

function sum(a) {
  console.log('I am ' + a + ' years old');
}

const square = num => num * num;

console.log(square(10));
console.log(square(6));

const getMagicNumber = () => 17;

console.log(getMagicNumber());