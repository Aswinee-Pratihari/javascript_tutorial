// //func declaration
// function name(parameters) {
//     return //write what is to be returned
// }

// //func calling
// name(arguments)
let sum = 0;
function calculateCartPrice(...num) {
  //num=>[ 100, 200, 300 ]
  num.forEach((price) => {
    sum = sum + price;
  });
  return sum;
}

// console.log(calculateCartPrice(100, 200, 300));

const arr = [100, 200, 300, 400];

function returnSecondValue(anArr) {
  return anArr[1];
}

console.log(returnSecondValue(arr));
