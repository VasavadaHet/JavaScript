// Dates

let myDate = new Date()
// console.log(myDate); // 2024-04-14T04:36:19.286Z
// console.log(myDate.toString()); // Sun Apr 14 2024 04:36:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sun Apr 14 2024
// console.log(myDate.toISOString()); //2024-04-14T04:38:15.312Z
// console.log(myDate.toJSON()); // 2024-04-14T04:41:42.947Z
// console.log(myDate.toLocaleDateString()); // 4/14/2024
// console.log(myDate.toLocaleTimeString()); // 4:40:54 AM

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0 , 23)
// let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('deafult',{
    weekday: "long",
    
})) // Sunday

