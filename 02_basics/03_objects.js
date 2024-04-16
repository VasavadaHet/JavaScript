// singleton
// Object.create

//object literals

const mySymbol = Symbol("key1")

//js processes keys as string by default
const JsUser = {
    name: "het",
    "full name" : "Het Vasavada", //you cannot access ths with dot operator
    [mySymbol] : "mykey1",
    age:12,
    location: "Rajkot",
    email: "het@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);


JsUser.email = "het@yahoo.com"
// Object.freeze(JsUser) // after this you wont be able to change anything inside the object
JsUser["email"] = "het@hotmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);  // referencing the same object    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());








