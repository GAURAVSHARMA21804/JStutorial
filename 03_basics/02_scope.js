// {} => scope when it comes with functions ,loops
//  {} => iske andr wali value block scope and bhar wali values global scope

let a=100;
const b= 200;                                   // here is global scope
var c = 300;

if(true){
    let a = 10;                                    // here is block scope 
    const b =20;
    var c = 30;
    console.log("Inner a:",a); // => 10
    console.log("inner b:",b); // => 20
    console.log("inner c:",c); // => 30         
}

console.log("ouside a:",a);  //  => 100
console.log("outside b:",b); // => 200
console.log("outside c:",c); // => 30       // c value change so we don't use var


//nested scope
//example 1 for function :-
function one(){
    const username ="gaurav"  // function 1 username now global for function two

    function two(){
        const website ="youtube"   // website is in a local scope for function 1
        console.log(username);
    }
    //console.log(website);  // error website inside a function two we can not acces her outside
    two()  // jab tk ye call ni hoga kuch print ni hoga
}

one()


//example 2 for loop

if(true){                          // loop 1
    const username ="hitesh"       // now he is global for loop 2
    if(username === "hitesh"){     // loop 2
        const website = "youtube"     // website is local scope for loop 1
        console.log(username+website)
    }
    //console.log(website)  //error  bhar acces ni hoga
}

//console.log(username);    // error bhar acces ni hoga

//+++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

console.log(addone(5))   // yha hum function ko baad me decalre kr skte hai call phle
function addone(num1){
    return num1+1
}

//expression

//console.log(addtwo(5)) //yha error aayegi we can not acess a expression before declaring it
const addtwo = function(num){     // when we declare a function as variable then it is called expression
    return num+2
}
 console.log(addtwo(5))



