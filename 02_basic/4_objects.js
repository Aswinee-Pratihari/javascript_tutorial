const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// console.log(obj1, obj2); //{ '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' }

const obj3 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// console.log(Object.values(obj4)); //[ 'a', 'b', 'c', 'd' ]
// console.log(Object.keys(obj4)); //[ '1', '2', '3', '4' ]

// console.log(obj1.hasOwnProperty(1)); //true

const user = {
  name: "Aswinee",
  age: 23,
  email: "akp@akp.com",
  workPlace: "Google",
};

const { name, age, email, workPlace: place } = user;
console.table([name, age, email, place]);
