const accountId = 43256
let accountEmail = "hvasavada@gmail"
var accountPassword = "12345"
accountCity = "Rajkot"
let accountState;


// accountId = 32456    not allowed

accountEmail = "hv@hv.com"
accountPassword = "2542233"
accountCity = "Bangalore"  //not an appropriate way to declare variables

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/* Prefer not to use var bcz of block scope and functional scope
(earlier there was no concept of scope in js when var keyword was being used, later they solved this by giving let keyword)
*/
