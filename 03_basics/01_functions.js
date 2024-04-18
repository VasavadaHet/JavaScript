
function sayMyName(){
    console.log('H');
    console.log('E');
    console.log('T');

}

// sayMyName(); //This is execution of function
// sayMyName  //This is just a reference


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2)

// }
// const result = addTwoNumbers(3, 5);  // 8
// console.log(result); // undefined, bcz function is not returning anything


function addTwoNumbers(number1, number2){
        // let result = number1 + number2
        // return result
        return number1 + number2

}

const result = addTwoNumbers(3, 5);  
// console.log("Result: ", result); // 8

//if we pass no argument then function considers it as undefined and not null

function loginUserMessage(username = "sam") {       //we can also set default value, if user provides one then it will overite the default
    if(!username){                                 //username === undefined ,this will execute when argument is an empty string.
        console.log("Please enter a username")
        return                                     //will exit the function block here only
    }
    return `${username}, just logged in`
}
// console.log(loginUserMessage("Vasavada"));
// console.log(loginUserMessage(""));


function calCartPrice(...num){                    /* ... is a rest operator which becomes helpful when we are not sure how many values 
                                                        the user will enter in arguement,such as the shoping cars*/
return num
}
// console.log(calCartPrice(100, 200, 300, 400));    // it will return an array with all the arguments passed in the function....


//working with objects and functions
const user ={
    username: 'Het',
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is: ${anyObject.username} and Price is: ${anyObject.price}`);
}

// handleObject(user)

// You can also pass the object directly
// handleObject({
//     username: 'Vasavada',
//     price: 299
// })


// Working with arrays and functions

const myNewArray = [100, 200, 330, 440]

function secondElement(getArray){
    return getArray[2]
}
// console.log(secondElement(myNewArray))
// console.log(secondElement([100,200,330,440])) // dirct declare also possible
