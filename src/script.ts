import { Player } from "./classes/player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

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

function multiply(a: string, b: string, c: string) {
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

var a: string;
a = "Nurul";

let d: number;
d = 34;

let c: string;
c = "Ahsan";

var get: (string | number)[] = [];
get.push(34);

let getNormal: string | number;
(getNormal = 56), "Ahsan";

let f: {
  name: string;
  age: number;
  adult: boolean;
};

f = {
  name: "Ahsan",
  age: 34,
  adult: true,
};

let g: any[] = [];
g.push("Bangladesh");
g.push(45);

let h: {
  name: any;
  age: any;
};

h = {
  name: "Bangladesh",
  age: 45,
};

// let myFunc: Function;

const myFunc = (
  a: string,
  b: string,
  c?: string,
  d: string = "Brother"
): string => {
  //   console.log(`Hello ${a} ${b}`);
  //   console.log(c, d);
  return `${a} ${b} ${c} ${d}`;
};

const total = myFunc("Nurul", "Ahsan", "Hello");
console.log(total);

const myFunc2 = (
  a: number,
  b: number,
  c: number,
  d: string = "Brother"
): number => {
  //   console.log(`Hello ${a} ${b}`);
  //   console.log(c, d);
  return a + b - c;
};

const total2 = myFunc2(40, 50, 75);
console.log(total2);

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  return `User id is ${id}, name is ${user.name} 
  and age is ${user.age}`;
};
const resultOne = userDetails(540, { name: "Ahsan", age: 23 });
console.log(resultOne);

const sayHello = (user: { name: string; age: number }) => {
  return `Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`;
};
const resultTwo = sayHello({ name: "Ahsan", age: 23 });
console.log(resultTwo);

let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
  return a + b;
};

const resultTree = add(34, 54);
console.log(resultTree);

let calculation: (x: number, y: number, z: string) => number;
calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};
const oneResult = calculation(5, 6, "add");
console.log(oneResult);

let userDetailsTow: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetailsTow = (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => {};

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
// const sakib = new Player("Sakib", 40, "Bangladesh");
let sakib: IsPlayer;
sakib = new Player("Sakib", 40, "Bangladesh");

const players: IsPlayer[] = [];
players.push(sakib);
players.push(mashrafi);

function drawRectangle(options: { width: number; length: number }) {
  let width = options.width;
  let length = options.length;
}

drawRectangle({
  width: 30,
  length: 65,
});

interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangleTwo(options: RectangleOptions) {
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
const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mashrafi",
  age: 40,
  country: "Bangladesh",
});

// let user = "Mashrafi";

addID(user);

//INTERFACES GENERICS

enum ResponseType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APiResponse<T> {
  status: number;
  type: ResponseType;
  data: T;
}

const response1: APiResponse<string> = {
  status: 200,
  type: ResponseType.UNAUTHENTICATED,
  data: "Test",
};

console.log(response1);

//TUPLES

let n = [3, "Hello", { p: 3 }];
let m: [number, string, object] = [4, "Ahsan", { t: 1 }];

m[2] = ["hello"];
