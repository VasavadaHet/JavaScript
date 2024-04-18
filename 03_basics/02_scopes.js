// var c = 300
//global scope
let a = 300
if(true){
    let a = 10
    const b = 20 //block scope
    console.log("Inner: ", a);
    // var c= 30
}

// console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined
// console.log(c); //30
console.log(a);