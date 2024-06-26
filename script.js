console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");


var a = 10;
console.log(a);
var a = "Name"
console.log(a);

let name1 = "john";
console.log(name1);

const pi = 3.14;
console.log(pi);

// // parseInt

let valueOne = 2;
let valueTwo = "2";

console.log(valueOne + valueTwo);
console.log(valueOne + parseInt(valueTwo));

// // String manipulationb
str="heLlO"
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.substring(2,4));

const name2 = "John";
const age2 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
var y;

console.log(typeof name);
console.log('My name is ' + name2 + ' and I am ' + age2);
console.log(`My name is ${name2} and I am ${age2}`);

// Symbol
id=Symbol("id")
console.log(id);

// // Array
arrayOne = ["john", 30, true, null, undefined]
console.log(arrayOne);

// // push

arrayOne.push("Apple");
console.log(arrayOne);

// // pop

arrayOne.pop();
console.log(arrayOne);

// // unshift

arrayOne.unshift("Mango");
console.log(arrayOne);

console.log(arrayOne[0]); //getting item with index
arrayOne[3] = "banana" //push using index
console.log(arrayOne);

console.log(arrayOne.length);
//deleting using splice
arrayOne.splice(3, 2);
console.log(arrayOne);

// Object
obj = {
    name: "Habel",
    age:19,
    gender:"M",
    address:{
        city:" ",
        houseNUM:123
    }
}
console.log(obj);

//unstrict equal to and strict
let valueOnee = "2"
let valueTwoo = 2;

console.log(valueOnee == valueTwoo);
console.log(valueOnee === valueTwoo); //if only value and dtata type is same

// // Arithmetic Operators
a=10
b=2
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);//exponent

// // Conditional Statements

// if

a = 15;

if (value >= 18) {
    console.log("You are Adult")
 }
 b = 16;

if (b >= 18) {
    console.log("You are adult");
 } else {
     console.log("You are a minor");
 }

// // ternary 

age = 20;

let type = (age >= 18) ? "Adult" : "Minor"
console.log(type);

// Function

function hi() {
   console.log("Hello World");
}

hi();

var hi = function () {
   console.log("Hello World");
}
hi();


var hi = () => {
   console.log(" Arrow Function Hello World");
}
hi();


// Map

var number = [1, 2, 3, 4, 5];


var square = number.map((num) => {
   return num * num;
})

console.log(square);

var fruits = ["Apple", "Banana", "Mango"];

var upperCase = fruits.map((fruit) => {
   return fruit.toUpperCase();
});

console.log(upperCase);

// Enhanced Object Literals

var name = "John";
var age = 20;

var person = {
   name,
   age,
   isStudent: true
}

console.log(person);

// Destructuring

var person = {
   name: "Akhil",
   age: 20,
   isStudent: true
}
var { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);

// promises

var promise = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("Promise resolved")
   }, 2000);
})

promise.then((reslut) => {
   console.log(reslut);
})


// ! Spread Operator

var numbers = [1, 2, 3, 4, 5];

var newNumber = [...numbers, 6, 7, 8];

console.log(newNumber);