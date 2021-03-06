// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// input: callback, object (option)
// output: number or undefind

// input: number
// output: boolean
const numbersList = [5, 0, 8, 10, -4, 50, 220];
const findRes = numbersList(el => el % 2 === 1);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// input: callback, object (option)
// output: undefind

// input: number
// output: undefind
const forEachRes = numbersList.forEach(el => { if (el > 0) console.log(el);});
console.log(forEachRes(5, -2, 6, -7));

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, number (option), object (option)
// output: number
// option 1
/* const sum = transactions.reduce((acc, el) => {
  if (el > 100) {
   return acc + el;
  } else {
    return acc;
  }
}, 0);
console.log(sum); */

/* option 2
const sum = transactions.reduce((acc, el) => {
  return el > 100 ? acc + el : acc;
}, 0); */

const sum = transactions.reduce((acc, el) => (el > 100 ? acc + el : acc), 0);
/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// input: callback
// output: array
numbersList1.sort((a, b) => b - a);


// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];
numbersList2.slice().sort((a, b) => b - a);

//put your code here