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