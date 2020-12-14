
// input: array, func
// output: array 


// callback
// input: number (el), number (index - option), array (optional)
// output: number 

// algo:
// 1. iterated array
// 2. apply callback func for every element
// 3. return the changed element of the array
const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
  }
  return result;
};

const testArr = [5, 6, 10, -2, 44, 5];
const testCallback = (el, index, arr) => el * 5;

const res = mapArrayElements(testArr, testCallback);
console.log(res);