// var c = 300
//global scope
let a = 300
if(true){
    let a = 10
    const b = 20 //block scope
    // console.log("Inner: ", a);
    // var c= 30
}

// console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined
// console.log(c); //30
// console.log(a);


//Nested Scope
function one(){

    const username = "vasavada"

    function two(){
        const website= "github"
        console.log(username);   // no error, chotte bacche bade bcche ki icecream le sakte hai
    }

    // console.log(website);  ReferenceError: website is not defined , bade bacche chotte bache ki icecream nahi  maang sakte
    two()
}

// one()