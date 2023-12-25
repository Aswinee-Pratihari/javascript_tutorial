const user = {
  userName: "Aswinee",
  age: 22,
  greeting: function () {
    console.log(`Hello ${this.userName}`); //this keyword help in grabing the parent context
  },
};
// console.log(user.greeting());
// user.userName = "SAM";
// user.greeting(); //here the context/value changes to sam

//console.log(this); //the global context is empty in node environment but it gives window obj in browser

function run() {
  console.log(this); //here 'this' will consist of functions like setTimeout,setinterval etc as it is inside a function
}
//run();

//console.log(globalThis); //globalthis also consist of lot of functions just like the 'this' present inside a function.

//console.log(arrFunc(1, 2)); //Cannot access 'arrFunc' before initialization  No hoisting possible
const arrFunc = (n1, n2) => {
  console.log(this); //'this' over here is empty
  return n1 + n2;
};
console.log(arrFunc(1, 2));
