let var1 = "22";
let var2 = "22abc";
let var3 = true;
let var4 = null;
let var5 = undefined;

// console.table([
//   typeof var1,
//   typeof var2,
//   typeof var3,
//   typeof var4,
//   typeof var5,
// ]);

// console.table([
//   Number(var1),
//   Number(var2),
//   Number(var3),
//   Number(var4),
//   Number(var5),
// ]);

//"33"=>33
//"33abc"=>NaN
//null =>0
//true/false =>1/0
//undefined => NaN

let num = -787;
let string = "scaasd";
let numToBooleanVal = Boolean(num);
let stringToBooleanVal = Boolean(string);

// console.log(numToBooleanVal); //All Numbers except 0 is true
// console.log(stringToBooleanVal); // empty string is false

let numToString = String(num);
console.log(typeof numToString);
