//basic comparison when datatype is same 
// console.log(2>1);
// console.log(2==1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2!=1);
// console.log(2<=1);

//whem datatypes are different then equality check == and comparison <,>,<=,>= are work different
 
// {
console.log(null > 0);  //=>false
console.log(null == 0);  // =>false
console.log(null >= 0);  //=>true
console.log(null<= 0);   // true
console.log(null< 0);   // false
console.log(null!=0)    //true

console.log(undefined == 0)  // false
console.log(undefined < 0)   // false
console.log(undefined > 0)   // false
console.log(undefined <= 0)  // false
console.log(undefined >= 0)  // false
console.log(undefined!=0)   // true

//avoid these type of comparison please write clean code

//  }

// === (strict check) it compare values with also type of data type
console.log("2" === 2)  //false   (first is string second is number)

console.log(6 == "6")  //true
console.log(true > 2)  // false
console.log(true<=2)   // true
console.log(true == "h") //false
/* when we compare string and number value or boolean  and number value if we write like:-
      ("2" == 2)  (true < 2) 
   then in js string and boolean values automatically change in number datatype then coompariosn start
   it gives true but when we write like that:-
      ("hitesh" == 6) (true == "h") ("hitesh" == "gabsad") 
   it gives false


*/