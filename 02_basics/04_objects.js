// const tinderUser = new Object() // singelton object
const tinderUser = {}  // non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const reuglarUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"het",
            lastname: "vasavada"
        }
    }
}

// console.log(reuglarUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//combining two objects
// const obj3 = Object.assign({}, obj1, obj2) //can also combine more than two objects.....
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "v@email.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // will return array of keys in an object.....
// console.log(Object.values(tinderUser));  // will return array of values in an object.....
// console.log(Object.entries(tinderUser)); //every key and value will be in an array...

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether the given property is available or not


// const course = {
//     coursename: " Js in hindi",
//     price: "999",
//     courseTeacher: "hitesh"
// }

// course.courseTeacher
 
//de-structuring of an object
// const {courseTeacher: instructor} = course

// console.log(courseTeacher);
// console.log(instructor);


//Example of react (de-structuring)
// const navbar = ({company}) =>{

// }

// navbar(company = "hitesh")


//APIs intro and JSON

// {
//     "name":"hitesh",
//     "coursename": "js in hindi",
//     "price":"free"
// }
// this is how json looks


// sometimes you get api in array as well
// [
//     {},
//     {} 
// ]

//randomuser me api , json formatter (just to explore )