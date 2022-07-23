// const myBioData = ['samjhana', 'luitel', 28]

// let myName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myName);

// ARRAY DESTRUCTURING
// const myBioData = ['samjhana', 'luitel', 28]
// let [myFName, myLName, myAge] = myBioData;
// console.log(myAge);

// YOU CAN ADD VALUE.
// const myBioData = ['samjhana', 'luitel', 28]
// let [myFName, myLName, myAge, degree = 'IT'] = myBioData;
// console.log(degree);

// OBJECT DESTRUCTURING
// const myBioData = {
//     myName: 'samjhana',
//     myLname: 'luitel',
//     myAge: 28
// }

// let { myName, myLname, myAge } = myBioData;
// console.log(myName);
// YOU CAN ADD VALUE
// const myBioData = {
//     myName: 'samjhana',
//     myLname: 'luitel',
//     myAge: 28
// }
// let { myName, myLname, myAge, degree = 'it' } = myBioData;
// console.log(degree);


// let fruits = ['orange', 'watermelon', 'strawberies']

// let [citrus, melon, beries] = fruits;

// console.log(citrus, melon, beries);

// let country = {
//     Nepal: 'kathmandu',
//     USA: 'washington DC',
//     UK: 'london'
// }

// let { Nepal, USA, UK, china = 'belguim' } = country;
// console.log(Nepal, USA, UK, china);


// OBJECT PROPERTIES
// WE CAN NOW USE DYNAMIC PROPERTIES



// let myName = 'samjhana';
// const myBio = {
//     [myName]: "hello how are you.",
//     [20 + 8]: 'is my age'
// }
// console.log(myBio);

// NO NEED TO WRITE KEY AND VALUE, IF BOTH ARE SAME

// let myName = 'samjhana luitel';
// let myAge = 26;

// const myBio = {
//     myName: myName,
//     myAge: myAge
// }
// console.log(myBio);

// let myBio = {
//     myName,
//     myAge
// }
// console.log(myName, myAge);

// SPREAD OPERATOR
// const colors = ['red', 'green', 'blue', 'white'];
// const myColors = [...colors, 'yellow', 'black'];
// console.log(myColors);
// you can use SPREAD OPERATOR FOR OBJECT TOO AFTER 2018

// const person = { name: 'Fred', age: 87 };
// const newPerson = { ...person, } // if you have same name you can do this
// console.log(newPerson);
// const nayaPerson = {
//     ...person,
//     firstName: 'krishna',
//     Age: 16
// }
// console.log(nayaPerson);

// ES7 FEATURES
// ARRAY INCLUDE
// const colors = ['red', 'green', 'blue', 'white'];
// const isPresent = colors.includes('red');
// console.log(isPresent);


// **
// console.log(2 ** 2);

// ES8
// STRING PADDING
// OBJECT.VALUES()
// OBJECT.ENTRIES()

// const message = "my name is samjhana";
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = {
//     name: 'krishna',
//     age: 16
// }
// console.log(Object.values(person)); // this will give you value in a array

// console.log(Object.entries(person)); // this will give you key and value in a array
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));// this will give you key and value in a object

// HOW TO FATTEN AN ARRAY

// const arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7],
//     [8, 9, [10, 11]]
// ]
// console.log(arr.flat(Infinity));

// ES2020
// BIGint

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 12n);
// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);


// ES2014

// "use strict"; // IF YOU USE 'USE STRICT' IT WILL GIVE YOU ERROR WHEN YOU DON'T USE LET OR CONST KEYWORD.
// X = 3; // THIS WILL GIVE YOU ERROR WHEN U USE 'USE STRICT'
// let x = 3; // THIS IS RIGHT
// console.log(x);

