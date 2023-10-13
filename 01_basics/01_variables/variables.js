const accountId = 133335;
let accountEmail = "mygmail.com";
var accountPassword = "12345";
accountCity = "jaipur"
let accountState; /* here its give undefine value  */


// accountId = 12333 {here we can not chnage this variable because of const keyword}
// but we can chnage the all other variables which are declare by the var and let keyword

/*
in modern ES6 js we use the let keyword for declare the variables name not var because of issue with block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
