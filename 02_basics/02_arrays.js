const marvel_heros = ["thor", "ironman", "captain america"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//console.log(marvel_heros);  // [ 'thor','ironman','captain america', [ 'superman', 'flash', 'batman' ]]

// const all_heros = marvel_heros.concat(dc_heros) //concat function combines two arrays into a new array
// console.log((all_heros)); // [ 'thor', 'ironman', 'captain america', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros] //spread function
// console.log(all_new_heros);  //[ 'thor', 'ironman', 'captain america', 'superman', 'flash', 'batman' ] similar output as concat but here you can merger more than two arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 [4, 5]]]
const flat_array = another_array.flat(Infinity) // you can also provide depth
// console.log(flat_array);


// console.log(Array.isArray("vasavada"));
// console.log(Array.from("Vasavada"));
// console.log(Array.from({name : "het"}));  //interesting, more of it, later

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

