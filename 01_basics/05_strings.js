const name = "Het"
let repoCount = 50

// console.log(name + repoCount); // Het50, not advisable way to concate different datatypes

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);  //string interolation

const gameName = new String('clash-of-clans')

// console.log(gameName[0]);  // c
// console.log(gameName.__proto__); // will eturn string object i.e {}

// console.log(gameName.length); // 12  , property
// console.log(gameName.toUpperCase());  //CLASHOFCLANS  , method/fumction  , it will not change the original string
// console.log(gameName.charAt(2));  // a
// console.log(gameName.indexOf('a'));  // 2

// const newString = gameName.substring(0,4);
// console.log(newString);  // clas

// const anotherString = gameName.slice(-12, 4);
// console.log(anotherString);

// const newStringOne = "    het    "
// console.log(newStringOne);  //     het    
// console.log(newStringOne.trim()); // het

// const url = "https://het.com/het%20vasavada"

// console.log(url.replace('%20', "-"));

// console.log(url.includes('het'));

console.log(gameName.split('-'));