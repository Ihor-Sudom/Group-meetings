
//1. learn requirement
//2. create step by step (& input/output for function)
//3. write draft solution & testing 
//4. refactoring & final testing -> final solution 

// algo
// 1. iterate numbers from 1 to N
// 2. check if NUM is prime or not
//  2.1. iterate numbers from 2 to N - 1
//  2.3. 

function isPrime(nam) {
  for (let i=2; i < nam; i++) {
    if (nam % i === 0) {
      return false;
    }
  }
  return true;
}


function getPrime(n) {
  for (let i=2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

console.log(getPrime(7));
console.log(getPrime(9));