const marvel_heros = ["thor","Ironman","spoderman"]
const dc_heros = ["superman","flash","batman"]
//marvel_heros.push(dc_heros)  //it push in  original array  [ 'thor', 'Ironman', 'spoderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros)
//let all_heros =marvel_heros.concat(dc_heros) //it gives new array with combined of two arrays original array dose not change
//console.log(all_heros); //[ 'thor', 'Ironman', 'spoderman', 'superman', 'flash', 'batman' ]

//spred
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros) // [ 'thor', 'Ironman', 'spoderman', 'superman', 'flash', 'batman' ]
//same as concat but we can combined more than two arrays

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //depth matlb kitta isme khol sku like array ke andr array ke andr array depth tk kholu
console.log(real_another_array) /*[
                                     1, 2, 3, 4, 5, 
                                     6, 7, 6, 7, 4,
                                     5
                                  ]*/

 // from and of                                  
console.log(Array.isArray("hitesh"))  //false
console.log(Array.from("hitesh"))  // ['h','i','t','e','s','h']
console.log(Array.from({name:"hitesh"}))  // []


let score1 =100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3));  // [ 100, 200, 300 ]