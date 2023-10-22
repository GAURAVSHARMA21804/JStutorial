//truthy falsy value

//falsy values
/* 
   false
   0
   -0
   BigInt 0n
   ""
   null
   undefined
   NAN


*/

//truthy values
/*
  true
  "0"
  'false'
  " "
  []
  {}
  function(){}

*/

//example 1
const userEmail = []
if(userEmail){
    console.log("array is empty")
}
else{
    console.log("array is not empty")
}
//output   array is empty

//example 2
const userEmail2 =""
if(userEmail2){
    console.log("array is empty")
}
else{
    console.log("array is not empty")
}
//output   array is not empty


//example 3
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}
else{
    console.log("object is not empty")
}

//output object is empty

/*
  false == 0  =>true
  false == "" =>true
  0 == ""     =>true
*/


//Nullish Coalescing operator (??): null undefined

let val1;
val1= 5 ?? 10

console.log(val1);  //5

val1 = null ?? 10
console.log(val1);   //10

val1 = undefined ?? 50
console.log(val1);     //50

val1 = null ?? 10 ?? 50
console.log(val1)    // 10 first value lega null undefined ke baad

//ternory operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("less than 80"): console.log("more than 80")
//output   less than 80