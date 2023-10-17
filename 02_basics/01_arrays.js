 //array is non premitive datatype collection of multiple items
 //in js arrays are resizable
 // 0 based indexing
 // copy operations create shallow copy and deep copy
 // shallow copy:- A shallow copy of an object is a copy whose properties share the same refrences
 // Deep copy:- A Deep copy of an object is a copy whose properties do not share the same refrences

const myArr = [0,1,2,3,4]
const myHeros = ["shaktiman","krish"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2)  // [1,2,3,4]
console.log(myArr2[2])

//arrays methods
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9) //value insert in first index
console.log(myArr)

let firstElement  = myArr.shift() //it remove first element of an array and return element
console.log(myArr);
console.log(firstElement)

console.log(myArr.includes(9)); // check 9 is present in array or not
console.log(myArr.indexOf(3)) //give the index of element if element is present in array then give the index or other wise element is not present in array give -1
console.log(myArr.indexOf(19)) //give -1 beacuse 19 is not present in array

// bind a array and convert into a string
const newArr =myArr.join()
console.log(myArr);  // [0,1,2,3,4]
console.log(newArr) //0,1,2,3,4
console.log(typeof newArr) // string


//differnce in slice and splice
console.log("A",myArr) // [0,1,2,3,4]
const myn1 =myArr.slice(1,3) // slice basis on index include first start and not include third
console.log(myn1) // [1,2]
console.log("B",myArr); //[0,1,2,3,4]

/* so slice and splice work differently 
slice:-The slice() method of Array instances returns a shallow copy of a portion of an array into a new array 
       object selected from start to end (end not included) where start and end represent the index of items in that array. 
       The original array will not be modified.

splice:- The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding
          new elements.
          

*/

const myn2 = myArr.splice(1,3) // splice include first strat and also end then it remove all element basis on index and original array also changed
console.log(myn2) //[1,2,3]
console.log(myArr) // [0,4]