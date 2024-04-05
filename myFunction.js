"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
var myvalue = addTwo(6);
function greeting(name) {
    return name.toLocaleUpperCase();
}
greeting("nikhil");
function isSignUp(name, email, ispaid) {
}
isSignUp("nikhil", "nikhilkumar@gmail.com", true);
var isLoggedIn = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
isLoggedIn("nikhil12", "nikhilkumarmandal@gmail.com");
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//     return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
