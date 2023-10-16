const name ="gaurav"
const repocount = 50

//console.log(name + repocount + " value");

//modern day concatination
console.log(`hello my name is ${name} and my repcount is ${repocount}`);

const gameName = new String('gaurav') //another way to create string
console.log(gameName)  //  value with typeof datatype =>[String: 'gaurav']
//method of string

//here gaurav =[0:'g' | 1:'a'|  2:'u'| 3:'r'| 4:'a'| 5:'v'] and [-6:'g' | -5:'a' | -4:'u' | -3:'r' | -2:'a' |-1:'v']
//                     0 to 5                                         -1 to -6 (reverse indexing)
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());  
//here original value dose not change beacause of string is premitive datatype {stack (call by value changes in copy)}

console.log(gameName.charAt(2))  //which position which character
console.log(gameName.indexOf('u')) //which character is which position

const newString = gameName.substring(0,4)
console.log(newString); // 0 to 4 [0,1,2,3] slice substring last value dosent not include (0 to 4 [4 not include])

const anotherString = gameName.slice(-5,4)
console.log(anotherString) //-5 indexxing to postive index 3  [-5,-4,-3] => [1,2,3]

console.log(gameName.slice(-6,6)); // gaurav

const newStringone= "  gaurav   "
console.log(newStringone);
console.log(newStringone.trim());

const url ="https://gaurav.com/gaurav%20sharma"

console.log(url.replace('%20','-'))  //replace %20 to (-) =>https://gaurav.com/gaurav-sharma
console.log(url.includes('ur')) //keyword check true ur hai

const myName = "gaurav-sharma-hero"
console.log(myName.split('-',2)) //convert string into a array   => [ 'g', 'a' ]
//split method include two value first sperator,second limit how many character or substring we want to split 
console.log(myName.split(''))  
/* 
[
  'g', 'a', 'u', 'r', 'a',
  'v', '-', 's', 'h', 'a',
  'r', 'm', 'a', '-', 'h',
  'e', 'r', 'o'
]
 */
console.log(myName.split('-'))
//[ 'gaurav', 'sharma', 'hero' ]

