// if
// <, >, <=, >=, ==, !=, ===, !==
//!== negative sign

//example 1
const temprature = 41;
if(temprature === 41){
    console.log("less than 41")
}
else{
    console.log("gretar than 50")
}

//example 2

const score =200
if(score>100){
    const power ="fly"
    console.log(`user power: ${power}`)
}

//console.log(`user power: ${power}`) // error power scope not define 

//example 3
const userLoggedIn=  true
const debitCard =true
if(userLoggedIn && debitCard && 2==2){
    console.log("allow user to buy course")
}

//example 4
const loggedFromGoogle = true
const loggedFromEmail = false
if(loggedFromEmail || loggedFromGoogle){
    console.log("user looged in")
}



