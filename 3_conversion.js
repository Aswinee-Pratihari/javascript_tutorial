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
// console.log(typeof numToString);

/********** operations*********** */

let str1 = "hello";
let str2 = " world";
// console.log(str1 + str2); //hello world
// console.log(1 + "2"); //12
// console.log("1" + 2); //12
// console.log("1" + true); //1true
// console.log(true + 1); //2
// console.log(true + "1"); //true1
// console.log(1 + 1 + "1"); //21
// console.log("2" + 2 + "1"); //221
// console.log("2" + 2 + 1); //221

//increment operator (prefix and postfix)
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/
