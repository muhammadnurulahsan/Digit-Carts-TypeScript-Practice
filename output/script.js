import { Player } from "./classes/player.js";
const country = "I love Bangladesh";
console.log(country);
const countryBd = "I love too Bangladesh";
console.log(countryBd);
const newVar = "Digit Carts";
console.log(newVar);
let playerName = "Marshafi";
console.log(playerName);
playerName = "34";
console.log(playerName);
let newPlayerName;
newPlayerName = "New Marshafi";
console.log(newPlayerName);
newPlayerName = 34;
console.log(newPlayerName);
function multiply(a, b, c) {
    return a + b + c;
}
console.log(multiply("Nurul", " ", "Ahsan"));
let fruits = ["apple", "banana", "orange"];
fruits.push("Ahsan");
let mixed = ["apple", 3, true];
mixed.push(false);
let person = {
    name: "Marshafi",
    age: 35,
    isCaptain: true,
};
person.age = 45;
var a;
a = "Nurul";
let d;
d = 34;
let c;
c = "Ahsan";
var get = [];
get.push(34);
let getNormal;
(getNormal = 56), "Ahsan";
let f;
f = {
    name: "Ahsan",
    age: 34,
    adult: true,
};
let g = [];
g.push("Bangladesh");
g.push(45);
let h;
h = {
    name: "Bangladesh",
    age: 45,
};
// let myFunc: Function;
const myFunc = (a, b, c, d = "Brother") => {
    //   console.log(`Hello ${a} ${b}`);
    //   console.log(c, d);
    return `${a} ${b} ${c} ${d}`;
};
const total = myFunc("Nurul", "Ahsan", "Hello");
console.log(total);
const myFunc2 = (a, b, c, d = "Brother") => {
    //   console.log(`Hello ${a} ${b}`);
    //   console.log(c, d);
    return a + b - c;
};
const total2 = myFunc2(40, 50, 75);
console.log(total2);
const userDetails = (id, user) => {
    return `User id is ${id}, name is ${user.name} 
  and age is ${user.age}`;
};
const resultOne = userDetails(540, { name: "Ahsan", age: 23 });
console.log(resultOne);
const sayHello = (user) => {
    return `Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`;
};
const resultTwo = sayHello({ name: "Ahsan", age: 23 });
console.log(resultTwo);
let add;
add = (a, b) => {
    return a + b;
};
const resultTree = add(34, 54);
console.log(resultTree);
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
const oneResult = calculation(5, 6, "add");
console.log(oneResult);
let userDetailsTow;
userDetailsTow = (id, userInfo) => { };
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
// const sakib = new Player("Sakib", 40, "Bangladesh");
let sakib;
sakib = new Player("Sakib", 40, "Bangladesh");
const players = [];
players.push(sakib);
players.push(mashrafi);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 30,
    length: 65,
});
function drawRectangleTwo(options) {
    let width = options.width;
    let length = options.length;
}
let threeDOptions = {
    width: 30,
    length: 65,
    height: 10,
};
drawRectangleTwo(threeDOptions);
//GENERICS
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh",
});
// let user = "Mashrafi";
addID(user);
//INTERFACES GENERICS
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
const response1 = {
    status: 200,
    type: ResponseType.UNAUTHENTICATED,
    data: "Test",
};
console.log(response1);
//TUPLES
let n = [3, "Hello", { p: 3 }];
let m = [4, "Ahsan", { t: 1 }];
m[2] = ["hello"];
