// const User = {
//     name: "nikhil",
//     email: "nikhil@nk.com",
//     isAvitve: true
// }

// function createuser({name: string,isPaid: boolean}){}

// let newUser = {name: "nikhil",isPaid:false,email: "nikhil@hc.com"}

// createuser(newUser);



// function createCourse():{name: string,price: number}{
//     return {name: "react js",price: 399}
// }


type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return {name: "",email: "",isActive: true}
}

createUser({name: "",email: "",isActive: true});



export {}