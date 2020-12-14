
// input: number ....
// output: number

function multiply() {
  return Object.values(arguments).reduce((acc, el) => acc * el);
}
console.log(multiply(5, 8, 9, 10, 23));

const multiply = (...args) => {
  return args.reduce((acc, el) => acc * el);
};

console.log(multiply(5));
console.log(multiply(5, 10));
console.log(multiply(5, 10, 15));
console.log(multiply(5, 10, 15, 20, 48, 3, 4));


// spread
const testArr = [3, 4, 32, 2, 6];
console.log(...testArr);

const testArrCopy = [...testArr];

function sum(a, b) {
  return a + b;
}

sum(testArr[0], testArr[1]);
sum(...testArr);

let example = 1111;

