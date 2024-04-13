// Primitive

// 7 types : String, Number, Boolean, null, undefined, bigint, Symbol

//Dynamically typed  (it will determine the datatypes aautomatically i.e we dont need to secify at the time of decleration)
const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 322325436546445645756435n


// Reference Typev(Non Primitive)

// Array, Objects, Functions
//non primitive's data type is object
const heroes  = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"het",
    age:21,
}

const myfunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);