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

console.log(reuglarUser.fullname.userfullname.firstname)