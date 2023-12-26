//for of
const arr = [1, 2, 3, 4, 5, 6, 7];

// for (const i of arr) {
//   console.log(i);
// }

const str = "hello";
// for (const letter of str) {
//   console.log(letter);
// }

//forin

const myObj = {
  in: "India",
  us: "USA",
  jp: "Japan",
};
// for (const key in myObj) {
//   console.log(`${key} :- ${myObj[key]}`);
// }

//works on array as well
// for (const key in arr) {
//   console.log(`${key} :- ${arr[key]}`);
// }

//foreach
arr.forEach((element, index, arr) => {
  // console.log(element, index, arr);
});

//donot work on object
// myObj.forEach((element) => {
//   console.log(element);
// });

let cars = [
  {
    color: "purple",
    type: "minivan",
  },
  {
    color: "red",
    type: "station wagon",
  },
  {
    color: "pink",
    type: "cabrio",
  },
];

cars.forEach((car) => {
  console.log(`I have a ${car.type} car which is ${car.color} in color`);
});
