//falsy (values that are assumed to be false)

//false, 0, -0, "", BigInt, 0n, null, undefined, NaN;

//truthy
//"0", "false", true, " ", [], {}, function () {};

//Nullish Coalescing Operator (??) : null/undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? undefined ?? 15;
console.log(val1);
