//these functions help in returing a value

const arr = ["js", "py", "cpp", "c#"];

//filter
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const numbers = num.filter((number) => {
  return number > 5;
});
// console.log(numbers);

//map
const val = num.map((num) => {
  return num * 10;
});

//console.log(val);

//chaining
const newNums = num
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 2000;
  })
  .filter((num) => {
    return num > 2060;
  });

// console.log(newNums);

//reduce
const initialValue = 0;
const sumOfNums = num.reduce((accumulator, num) => accumulator + num);

console.log(sumOfNums);

//map returns the whole array after performing a operation on top of it.
//filter returns a part of the array that stisfies the condition
//reduce performs an operation like adition and returns a result
