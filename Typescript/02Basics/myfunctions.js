"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("Sahil");
signUpUser("Sahil", "sahil@google.com", true);
loginUser("s", "s@s.com");
// function getValue(myVal: number){
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
// const heros = ["thor","spiderman","ironman"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function handleError(errmsg) {
    throw new Error(errmsg);
}
