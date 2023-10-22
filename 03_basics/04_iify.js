// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB connceted`)
// }
// chai()

(function chai(){   //named IIFY
    console.log("Db connected")
})

();  // Db connected


( ()=>{   //unamed IIFY
    console.log("hello bHai")
})

();   //hello bHai

((name)=>{
    console.log(`hello ${name}`)
})
('gaurav');