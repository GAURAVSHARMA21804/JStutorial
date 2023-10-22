const user ={
    username: "gaurav",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}
user.welcomeMessage()
user.username="hitesh"
user.welcomeMessage()

//this current context reffer

/*   outputs
 (user.welcomeMessage()):-
                            gaurav, welcome to website

                           {
                              username: 'gaurav',
                              price: 99,
                              welcomeMessage: [Function: welcomeMessage]
                           }                          
                           
                           
user.username="hitesh"    :-
user.welcomeMessage()
                                   hitesh, welcome to website

                                  {
                                     username: 'hitesh',
                                     price: 99,
                                     welcomeMessage: [Function: welcomeMessage]
                                  }
                                  
*/
console.log(this)  // {}

//this function ke andr ni use kr paate kevel objects me

function chai(){
    let username ="gaurav"
    console.log(this)
    console.log(this.username)   // undefiend after calling
}

chai()


//arrow function
const hello = () =>{
    let username ="gaurav"
    console.log(this)      //{}    // arrow function me kaam ni krta
    console.log(this.username)   // undefiend after calling
}

hello()

//explicit return
const addTwoNumbers =(num1 ,num2) =>{
    return num1+num2
}

console.log(addTwoNumbers(5,7))  // 12

//implicit return
const sum = (num1,num2) => (num1+num2)
console.log(sum(5,2))  // 7

//{} use hua to return likhna pdega   (explicit return)
// () use liya return ni likhna pdega  (implicit reuturn)

const obj = (num1,num2) => ({username: "hitu"})
console.log(obj(3,4)) //  { username: 'hitu' }

