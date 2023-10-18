//object declare is two types 1.literal 2.constructor
// when we declare objects using literal then never make singleton
// using constructor always make singleton

//objec literals :-

const mySym =Symbol("key1")
const JuUser ={
    name: "gaurav",             
    email: "gaurav.com"  ,       //key:value
    age: 18,
    location:"Alwar",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"],
    "full name": "Gaurav Sharma",          //never access by dot method 
    [mySym]:"mykey1"
}

//object access is two types
//console.log(JuUser.email)
//console.log(JuUser["email"])
//console.log(JuUser["full name"])
//console.log(JuUser[mySym])

//JuUser.email ="hitesh.com"
//console.log(JuUser.email)  // chnage object values

//Object.freeze(JuUser) // using this objects value we can not change
//JuUser.email ="chatbox.com"
//console.log(JuUser.email) // not change =>hitesh.com
//console.log(JuUser)


JuUser.greeting = function(){
    console.log("hello js User");
}
JuUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JuUser.greeting());
console.log(JuUser.greetingtwo());