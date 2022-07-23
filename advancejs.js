// WHAT IS EVENT BUBBLING?
//WITH EVENT BUBBLING,
// THE EVENT IS FIRST CAPTURED
//  AND HANDLED BY THE INNERMOST
//  ELEMENT AND THEN PROPAGATED TO OUTER ELEMENTS.


// WHAT IS EVENT CAPTURING?
// WITH EVENT CAPTURING,
// THE EVET IS FIRST CAPTURED BY THE OUTERMOST
// ELEMENT AND PROPAGATED TO THE INNER ELEMENTS.
//  CAPTURING IS ALSO CALLED 'TRICKILING'.
// WHICH HELPS REMEMBER THE PROPAGATION ORDER.

// const parentId = document.getElementById('parentId');
//         const childId = document.getElementById('childId');

//         const parentCall = () => {
//             alert('parent div call');

//         }

//         const childCall = () => {
//             alert('child div call');
//             event.stopPropagation();
//         }

//         parentId.addEventListener('click', parentCall, true);
//         childId.addEventListener('click', childCall, true);


// CALLBACK FUNCTION
// FUNCTION WHICH GET PASSED AS AN ARGUMENT TO ANOTHER FUNCTION IS CALLED CALLBACK FUNCTION.
// A CALLBACK FUNCION IS A FUNCTION THAT IS PASSED AS AN
//ARGUMENT TO ANOTHER FUNCTION, TO ME 'CALLED BACK' AT A LATER TIME.
// KUNAI PANI FUNCTION LAI ARKO FUNCTION KO UNDER AS AN ARGUMENTS PASSED
// GARYO VANE TYO CALLBACK FUNCTION HUNCHHA.


// const add = (a, b) => {
//     return a + b;
// }

// const subs = (a, b) => {
//     return Math.abs(a - b); // when you do math.abs it won't give you negative value.
// }

// const mult = (a, b) => {
//     return a * b;
// }

// const calculator = (num1, num2, operatpr) => {
//     return operatpr(num1, num2);
// }

// console.log(calculator(6, 5, subs));

// FUNCTION CURRYING(WE WILL SEE AFTER ASYNC JS SECTION)
//HOSTING IN JAVASCRIPT
// WE HAVE A CREATION PHASE AND EXECUTION PHASE.

// HOSTING IN JAVASCRIPT IS A MECHANISM WHERE
// VARIABLES AND FUNCTIONS
// DECLARATIONS ARE MOVED TO THE TOP OF THEIR
//SCOPE BEFORE THE CODE EXECUTE.
// HOSTING WILL WORK WITH VAR ONLY.

// WHAT IS SCOPE CHAIN AND LEXICAL SCOPING IN JS?
// THE SCOPE CHAIN IS USED TO RESOLVE THE VALUE OF VARIABLE NAMES IN JS.
// VERIABLE HERERA TESKO VALUE PAHILENAI
//THA PAUNA SAKINCHHA VANE TYO LEXICAL HUNCHHA.
// JASTAI:
// const PI = 3.142;


// let a = 'hello guys '

// const first = () => {
//     let b = 'how are you? '

//     const second = () => {
//         let c = ' hi i am fine thank you';
//         console.log(a + b + c);

//     }
//     second();

// }
// first();

// what is closures in javaScripts?
// A CLOSURE IS THE COMBINATION OF A FUNCRION BUNDLED
//TOGETHER (ENCLOSED ) WITH REFERENCES
// TO ITS SURROUNDING STATE
// (THE LEXICAL ENVIRONMENT)
// CLOUSER GIVES YOU ACCESS TO AN OUTER
// FUNCTION'S SCOPE FROM AN INNER FUNCTION.


// clouser and lexical scoping are same.
// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a + b;
//         console.log(`the sum of the two num is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// synchronous js prog
//you have to finished your first job before starting second
// school ko line ma baseko jastai palopalo garnauparne hunchha.
// const fun2 = () => {
//     console.log(`function 2 is called`);
// }
// const fun1 = () => {
//     console.log(`Function 1 is called`);
//     fun2()
//     console.log('Function 1 is called Again');
// }
// fun1();

// asynchronous javascript prog
// yesma sabai kam yekai choti hunchha
// jastai race ma sabai jana yekai choti daudeko jastai.
// yeutako kam wait garnuparchha
//vane arko kam garchha wait garnu parne time ma.

// const fun2 = () => {
//     setTimeout(() => {
//         console.log(`Function 2 is called`);
//     }, 2000);
// }

// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2()
//     console.log(`Function 1 is called again`);
// }
// fun1();

// whAT IS EVENT LOOP IN JAVASCRIPT?

// what is FUNCTION CURRYING
// CURRYING IS A TECHNIQUE OF
// EVALUATINH FUNCTION WITH MULTIPLE ORGUMENTS, INTO
// SQUENCE OF FUNCTION WITH SINGLE ARGUMENTS.


// function sum(num1) {
//     // console.log(num1);
//     return function (num2) {
//         // console.log(num1, num2);
//         return function (num3) {
//             console.log(num1, num2, num3);
//         }
//     }
// }


// sum(5)(3)(8)


// const sum = (a) => {
//     return function (b) {
//         return function (c) {
//             console.log(a, b, c);
//         }
//     }
// }
// sum(3)(6)(9);

// let sum = (num1) => (num2) => (num3) => console.log(num1, num2, num3); // YOU CAN DO IT LIKE THIS TO BY USING ARROW FUNCTION
// sum(9)(6)(3);


// if there is function inside function and without
// name that  is a anonymous function.
// example 1
// function btnClick(){
//     return function(){

//     }
// }

// EXAMPLE 2
// let btnClick = () => {
//     return function(){

//     }
// }


//JSON
// JSON.STRINGIFY TURNS A JAVASCRIPT OBJECT
// INTO JSON TEXT AND STORES THAT JSON TEXT IN A STRING.

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };
// var object_as_string = JSON.stringify(my_object); // you can use this method when you need to convert object to json(string)
// console.log(typeof (object_as_string));
// console.log(object_as_string);

// JSON.parse turns a string of JSON text into a javascript object,
