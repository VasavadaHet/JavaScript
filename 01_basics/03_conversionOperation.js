// let score = "33abc"

// console.log(typeof score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // NaN

// let value = null

// let finalAnswer = Number(value)
// console.log(typeof finalAnswer)
// console.log(finalAnswer);   // 0 

// "33" => 33
// "33abc" => NaN
//true => 1; false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIN = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIN);


// 1 => true; 0 => false
// "" => false; "het" => true



let someNumber =  33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


/*****************Operations**************/
let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);

// let str1 = "hello"
// let str2 = " het"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   //complex situation, ans is 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32



// console.log(+true); // 1
// console.log(+ ""); // 0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2    // not readable, do not do this

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

++gameCounter
console.log(gameCounter);

//Prefix and Postfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


