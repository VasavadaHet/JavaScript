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


/* ******************** Memories *************** */

// Stack (Primitives), Heap (Non Primitives)
// In stack you get copy of the variable declared
// In heap you get reference of that

let myYoutubeName = "vasavada.com"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName); // chaiaurcode
console.log(myYoutubeName);  // vasavada.com
/*this means that when you assinged the value of myYoutubeName to anotherName , 
in real a copy of that value was created and assigned, 
and then the change which we made was change in copy
*/

let user1 = {
    email: "user@google.com",
    upi: "hv@ybl"
}

let user2 = user1
/* here you will get the same reference 
if we change value in one, the value will change n another as well*/

user2.email = "het@google.com"

console.log(user1.email); // het@google.com
console.log(user2.email); // het@google.com