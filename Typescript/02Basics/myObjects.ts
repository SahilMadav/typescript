// const User = {
//     name: "sahil",
//     email: "sahil@google.com",
//     isAcctive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "sahil", isPaid: false, email: "sahil@google.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return{name: "reactjs", price: 399}
// }


type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return {name: "sahil", email: "sahil@gmail.com", isActive: true}
}

createUser({name: "sahil", email: "sahil@gmail.com", isActive: true})

export {}