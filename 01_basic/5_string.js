const name = "Aswinee_Kumar";
const repoCount = 72;
const string = "      hello      ";
const url = "http://akp.com/aswinee%20kumar%20pratihari";
//string interpolation
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//accessing the key value pair
// console.log(name[0]);

//methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf("s"));
console.log(name.includes("e"));

const arrOfString = name.split("_"); //[ 'Aswinee', 'Kumar' ]
const newString = name.substring(0, 7);
const anotherString = name.slice(-4, 3);
const trimmedString = string.trim();
const replaceOnceUrl = url.replace("%20", " "); //http://akp.com/aswinee kumar%20pratihari
const actualUrl = url.replaceAll("%20", " "); //http://akp.com/aswinee kumar pratihari

// console.log(actualUrl);

//extra methods
// console.log(name.at(8)); //get value according to index
// console.log(name.endsWith("k")); //if the string ends with a charecter or not
