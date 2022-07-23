// what is object literals?

// let person = {
//     name: 'shiva',
//     lname: 'panday',
//     age: 40,
//     getData: function () {
//         console.log(`my name is ${person.name} my age is ${person.age}`);
//     }
// }
// person.getData();

//object literal
// let person = {
//     name: 'shiva',
//     lname: 'panday',
//     age: 40,
//     getData() {
//         console.log(`my name is ${person.name} i am ${person.age}`);
//     }
// }
// person.getData();


// const family = {
//     dad: 'shiva',
//     mom: 'samjhana',
//     son: 'yunaya',
//     daughter: 'ditya',
//     getfam: function () {
//         console.log(`Dad is ${family.dad} `);
//     }
// };
// family.getfam()

// let family = {
//     husband: {
//         name: 'shiva',
//         age: 38
//     },
//     wife: {
//         name: 'samjhana',
//         age: 28,
//     },

//     son: 'yunaya',
//     daughter: 'ditya',
//     getFam() {
//         console.log(`mom is ${family.wife.name}`);
//         console.log(family.husband.age);
//     }


// }
// family.getFam()

// WHAT IS THIS OBJECT.
// THE DEFINITION OF 'THIS' OBJECT IS THAT IT CONTAIN THE CURRENT CONTEXT.
// THE THIS OBJECT CAN HAVE DIFFERENT VALUES DEPENDING ON WHERE IT IS PLACED.

// console.log(this); // this will give empty {}

// function myName() {
//     console.log(this);
// }
// myName()

// let yourName = 'samjhana';
// function myName() {
//     console.log(this.yourName);
// }
// myName()

// const obj = {
//     myAge: 28,
//     myName() {
//         console.log(this);
//     }
// }
// obj.myName();

// THIS OBJECT WILL NOT WORK WITH ARROW FUNCTION.




