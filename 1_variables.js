const accountId = 12364;
let accountName = "Aswinee";
var accountPassword = "12543";
accountCity = "BBSR";
let accountState;
// accountId = 2222; //TypeError: Assignment to constant variable.  cant change value of constant

/*
Var should not be used in most of the cases as it donot have block or functional scope
Instead use let
*/
console.table([
  accountId,
  accountName,
  accountPassword,
  accountCity,
  accountState,
]);
