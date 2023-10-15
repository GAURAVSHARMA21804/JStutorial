let value0 = "33abc"  //string value
let value1 = ""       //empty string
let value2 = null     // null value type obkect
let value3 = undefined  //undefined value
let value4 = 33         //number
let value5 = "Gaurav"   //string value
let value6 = true       // boolean true
let value7  = false     // boolean false
let value8  = 0         //number
let value9   = 1        //number
let value10  = "3333"   //string

//type conversion in boolean values
console.table([value0,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10])
//console.table([typeof(value0),typeof(value1),typeof(value2),typeof(value3),typeof(value4),typeof(value5),typeof(value6),typeof(value7),typeof(value8),typeof(value9)])
let boolean0 = Boolean(value0)  //gives true
let boolean1 = Boolean(value1)  // gives false
let boolean2 = Boolean(value2)  // gives false
let boolean3 = Boolean(value3)  // gives false
let boolean4 = Boolean(value4)  // gives true
let boolean5 = Boolean(value5)  // gives true
let boolean6 = Boolean(value6)  // gives true
let boolean7 = Boolean(value7)  // gives false
let boolean8 = Boolean(value8)  // gives false
let boolean9 = Boolean(value9)  // gives true
let boolean10 = Boolean(value10) //gives

console.log("conversion in Boolean values")

console.table([boolean0,boolean1,boolean2,boolean3,boolean4,boolean5,boolean6,boolean7,boolean8,boolean9,boolean10])
//type conversion in number values
let number0 = Number(value0)
let number1 = Number(value1)
let number2 = Number(value2)
let number3 = Number(value3)
let number4 = Number(value4)
let number5 = Number(value5)
let number6 = Number(value6)
let number7 = Number(value7)
let number8 = Number(value8)
let number9 = Number(value9)
let number10 = Number(value10)
console.log("conversion in Number values")
 console.table([number0,number1,number2,number3,number4,number5,number6,number7,number8,number9,number10])
//type conversion in string values
let string0 = String(value0)
let string1 = String(value1)
let string2 = String(value2)
let string3 = String(value3)
let string4 = String(value4)
let string5 = String(value5)
let string6 = String(value6)
let string7 = String(value7)
let string8 = String(value8)
let string9 = String(value9)
let string10 = String(value10)
console.log("conversion in String values")
console.table([string0,string1,string2,string3,string4,string5,string6,string7,string8,string9,string10])

/*                 Numbers          String             Boolean
 null      =>        0              'null'              false
 undefined =>       NaN           'undefined'           false
 ""        =>        0               ''                 false
 "33abc"   =>       NaN            '33abc'              true
 "33333"   =>      33333           '33333'              true
 " hi"     =>       NaN             'hi'                true
 true      =>        1             'true'               true
 false     =>        0             'false'              false
 0         =>        0               '0'                false
 1         =>        1               '1'                true
*/