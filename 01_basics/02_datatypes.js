// js is dynamically typen language when we declare a variable we do not need to specify what type this varibale //

/*Data types in JS
 in the js 7 are premitive data types  (call by values {chnages in copy})
 1. number => 2 to power 53
 2. string => ""
 3. boolean => true/false
 4. undefined
 5. null =>standalone value 
 6. symbol => unique
 7. bigint

 and 3 are the non premitive datatypes   (call by refrence  {changes in original data})
 1. obejct
 2. functions
 3. arrays
*/


"use strict"//treat all JS code as newer version    
// alert (3+3) we are using node not browser

console.log(3 +
    3 )//code readbility should be high {ni krna ese}

//number ,string ,boolean ,symbol ,null ,undefined, bigint
  let age=21
  let myName = "Gaurav"
  let state
  let isLogged = true  

console.table([age,myName,state,isLogged])
console.log(typeof null)// it gives output  object
console.log(typeof undefined)//it gives output undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //false


const bigNumber = 33434554545n;
console.log(typeof bigNumber)  // bigint
//bigint //

// Arrays objects functions
 const myArray = ['gaurav','mohan','ram'];  //array
  let myObj =
 {
  name:'gaurav',
  rollNumber: 12233,               //object
 }

 let myFunction = function(){
  console.log("hello world")     //functions
 }

 console.log(typeof myArray)   //it gives object
 console.log(typeof myObj)     //it gives object
 console.log(typeof myFunction) // it gives function but we called function object
 console.table([myArray,myObj,myFunction]) 
                                                 
 /*┌─────────┬──────────┬─────────┬───────┬──────────┬────────────┐
   │ (index) │    0     │    1    │   2   │   name   │ rollNumber │
   ├─────────┼──────────┼─────────┼───────┼──────────┼────────────┤
   │    0    │ 'gaurav' │ 'mohan' │ 'ram' │          │            │
   │    1    │          │         │       │ 'gaurav' │   12233    │
   │    2    │          │         │       │          │            │
   └─────────┴──────────┴─────────┴───────┴──────────┴────────────┘  */