//global scope
let a = 200;
if (true) {
  //block scope
  let a = 20;
  //   console.log(a);
}

// console.log(a);

function one() {
  const name = "Aswinee";
  function two() {
    const website = "Youtube";
    // console.log(name);
  }
  // console.log(website)//cannot find website as it is in bloack scope
  two();
}

one();

// declaration after calling

// addOne(5); //ReferenceError: Cannot access 'addOne' before initialization

const addOne = function (num) {
  console.log(num + 1);
};
// addOne(5); //this works

addTwo(5); //this will work
function addTwo(num) {
  console.log(num + 2);
}

//this difference is because of hoisting(will read later)
//Hoisting happens only on normal function and var not on const and let
