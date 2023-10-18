//  const tinderUser = new Object()   //singleton object
const  tinderUser ={}    // non singleton object
 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email: "somegmail.com",
    fullname : {
        userfullname:{
            firstname: "gaurav",    //objects of objects
            lastname: "sharma"
        }
    }
}
console.log(regularUser);   /*     {
                                     email: 'somegmail.com',
                                     fullname: { userfullname: { firstname: 'gaurav', lastname: 'sharma' } }
                                   } */

//console.log(regularUser.fullname);     //{ userfullname: { firstname: 'gaurav', lastname: 'sharma' } }

//console.log(regularUser.fullname.userfullname);   //{ firstname: 'gaurav', lastname: 'sharma' }

//console.log(regularUser.fullname.userfullname.firstname);  //gaurav


//comibiding two or more objects

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

//first method
const obj4 = {obj1 ,obj2 ,obj3}

//console.log(obj4)   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: { '5': 'e', '6': 'f' } }
//console.log(obj1)


 /*const obj4 =Object.assign(obj2,obj1,obj3)  // here if we not give {} this sign than all objects value store in first given obj
 console.log(obj4)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
 console.log(obj2)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

 if we write 
 const obj5 = Object.assign({},obj1,obj2,obj3)
 console.log(obj5)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
 console.log(obj1)   //{ '1': 'a', '2': 'b' }
 */

 //second method
 const obj5 = Object.assign({},obj1,obj2,obj3)
 console.log(obj5)
 

 //third method
 const obj6 ={...obj1,...obj2,...obj3}  
 console.log(obj6)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

 //array of objects
  const users = [
    {
        id:1,
        email:"hgmail.com"
    },
    {
        id:1,
        email:"hgmail.com"
    }, 
    {
        id:1,
        email:"hgmail.com"
    }, 
    {
        id:1,
        email:"hgmail.com"
    },

  ]

  users[1].email
  
  //objects methods
  console.log(tinderUser)
  console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
  
  console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
  
  console.log(Object.entries(tinderUser));  // key values in from in array
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to check the key is present in object or not


 //destructuring of objects

 const course = {
    coursname:"js in hindi",
    price: "999",
    courseInstructor:"gaurav"
 }
//course.courseInstructor agr baar baar likhna na pde to 
 const {courseInstructor} = course

 //console.log(courseInstructor)

 //agr object ke key ko alg name se acces krna ho to 
 const {courseInstructor: instructor} = course
 //console.log(instructor)



 
