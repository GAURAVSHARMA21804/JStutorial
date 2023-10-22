//simple function declartion
function sayMyname(){
    console.log("hello world")
}

sayMyname()

// function with parameter
function addTwoNumbers(num1,num2){  //here num1,num2 parameter
    console.log("gaurav")
    return num1+num2
    console.log("gaurav")   //retrun ke baad kuch bhi ni kr skte 
 }

console.log(addTwoNumbers(2,4)) //this is arguments here 2,4


// function loginUser(username){
//     return `${username} just logged in` //interpolation

// }
// console.log(loginUser("gaurav"))  //gaurav just logged in
// console.log(loginUser()) // undefined just logged in
// console.log(loginUser(""))  //just logged in



function loginUser(username){
    if(!username){  // ! =>false for undefined and ""(empty string) and null
        console.log("please enter a usename");
        return
    }
    return `${username} just logged in` //interpolation

}
console.log(loginUser("gaurav"))  //gaurav just logged in
console.log(loginUser()) // undefined just logged in
console.log(loginUser(""))
console.log(loginUser(null))

//intial parameter minimum vlaue is work
//example 1
function sum(num1=5,num2=4){
    return num1+num2

}
console.log(sum(6,7))  // => 13
console.log(sum())     // => 9
//example 2

function login(username="harsh"){
    console.log(username + " logged in")
    return `${username} log in`
}
console.log(login("gaurav"))  // => gaurav logged in
                             //     gaurav log in

console.log(login())       // =>  harsh logged in
                          //      harsh log in
   
 // ... rest/spred oprator           
 function calculateCardPrice(...num1){
    return num1
 }
 console.log(calculateCardPrice(200,300,400))  //[ 200, 300, 400 ]


 //function with objects
 const user ={
    username: "hitesh",
    price: 199
 }
 function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`)

 }
 handleObject(user)  //  UserName is hitesh and price is 199

 handleObject({
    username: "sam",
    price: 399           // UserName is sam and price is 399
 })

 //function with array
 const myArr = [200,300,400]
 function printArray(getarray){
    return getarray[1]
 }

 console.log(printArray(myArr))

   
                          




