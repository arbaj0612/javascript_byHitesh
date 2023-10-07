const accountId = 199299;
let accountEmail = "junaid.mulani@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

//  accountId = 2; not allowed

accountEmail = "aj@gmail.com"
accountPassword = 12456;
accountCity = "up"

/*
prefer not to use var
beczuse of issues in block scope and functional scope
*/

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
