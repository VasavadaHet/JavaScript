// Array 

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktimaan","het vasavada"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeroes[1])

// Array Methods 
// myArr.push(5)
// myArr.push(6)
// myArr.pop()
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(5));  //5
// console.log(myArr.indexOf(7));  //-1

// const newArr = myArr.join()

// console.log(newArr); // string , 0,1,2,3,4,5
// console.log(myArr);

// slice vs splice

console.log("A ", myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1)  // [ 1, 2 ]
console.log("B ", myArr)  // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log(myn2);  // [ 1, 2, 3 ]
console.log("C ", myArr) // C  [ 0, 4, 5 ]  i.e it also changed the original array