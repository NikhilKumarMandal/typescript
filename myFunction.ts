
function addTwo(num: number): number{
    return num + 2
    // return "hello"
}

let myvalue = addTwo(6)

function greeting(name: string){
    return name.toLocaleUpperCase()
}

greeting("nikhil")

function isSignUp(name: string,email: string,ispaid: boolean){
}

isSignUp("nikhil","nikhilkumar@gmail.com",true)

const isLoggedIn = (name: string,email: string,isPaid: boolean = false) => {}

isLoggedIn("nikhil12","nikhilkumarmandal@gmail.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//     return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string => {
    return ""
}

const heros = ["thor","spiderman","ironman"]
// const heros = [1,2,3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg); 

}

function handleError(errmsg: string): never{
    throw new Error(errmsg) 

}

export {}