//singleton
//Object.create()

//object litrerals

const mySym = Symbol("key1");
const JSUser = {
  name: "Aswinee",
  age: 23,
  location: "BBSR",
  [mySym]: "my symbol",
};

// console.log(JSUser["name"]);
console.log(JSUser.name);

//JSUser.location = "PURI"; //overwrites original obj
// console.log(JSUser);

JSUser.greeting = function () {
  console.log(`hello ${this.name}`); //this refers to the object on which we are working
  return null;
};

console.log(JSUser);
JSUser["greeting"]();
