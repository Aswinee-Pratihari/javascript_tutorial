const marvel = ["captainAmerica", "THOR", "HULK"];
const dc = ["SuperMan", "Batman", "Flash"];

//marvel.push(dc); //[ 'captainAmerica', 'THOR', 'HULK', [ 'SuperMan', 'Batman', 'Flash' ] ] (changes original marvel array)
//console.log(marvel.flat(1)); //[ 'captainAmerica', 'THOR', 'HULK', 'SuperMan', 'Batman', 'Flash' ]

const newArr = marvel.concat(dc); //[ 'captainAmerica', 'THOR', 'HULK', 'SuperMan', 'Batman', 'Flash' ]

//spread operator
const newHeros = [...marvel, ...dc]; //[ 'captainAmerica', 'THOR', 'HULK', 'SuperMan', 'Batman', 'Flash' ]
//console.log(newHeros);

const string = "ASWINEE";

console.log(Array.isArray(string)); //FALSE
console.log(Array.from(string)); //[A,S,W,I,N,E,E]
