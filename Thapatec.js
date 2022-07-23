// let myName = 'samjhana';
// let myNumber = 6;

// if(isNaN(myNumber)){
//     console.log('please enter valid number')
// }else{
//     console.log('thank you')
// }

// console.log(Number.NaN === NaN);

// x = 3;
// y = 3;

// console.log(`is both the x and y are equal: ${x == y} `);

// let num = 3;
// let newNum = num++ ;
// console.log(num);
// // console.log(newNum + 3);

// IF ELSE.


// let year = 2020;

// if (year % 3 == 0) {
//     if (year % 5 == 0 ){
//         if (year % 400 == 0){
//             console.log('This is a leap year')
//         }else{
//             console.log('Thiss is not year.')
//         }

//     }else{
//         console.log('This is a leap year.')
//     }

// }else{
//     console.log('This is not a leap year')
// }

// let a = 5;
// let b = 3;

// console.log(a > b || b > a);

// console.log(3 ** 3);

// let name = 'sam ';
// let age = 27;

// console.log(name + age);

// let a = 5;
// let b = 10;

// let c = b;
//     b = a;
//     a = c;

// console.log('the value of a is ' + a);
// console.log('the value of b is ' + b);
// console.log( 'the value of c is ' +c);


//  let a = 5;
//  let b = 10;

//   a = a + b; // 5 + 10 = 15
//   b = a - b; // 15 - 10 = 5
//   a = a - b; // 15 - 5 = 10
//   console.log(a);
//   console.log(b);




// // == check only the value and === check the value and data type.
// let num = 5;
// let num1 = '5';
//  console.log(num == num1);
//  console.log(num === num1);


// let daughter = 'ditya';
// if(daughter == 'ditya'){
//     console.log('she is preety.')
// }else{
//     console.log('he is handsome.')
// }

// let weather = 'rainy';
// debugger;
// if (weather == 'rainy'){
//     console.log('put your raincoat.')
// }else{
//     console.log('wear your sunglasses.')
// }

// let year = 2020;
// debugger;

// if (year % 4 == 0){
//     if (year % 100 == 0){
//         if (year % 400 == 0){
//             console.log('This year ' + year + ' is leap year.' )
//         }else{
//             console.log('The year ' + year + ' is not leap year.')
//         }

//     }console.log('The year ' + year + ' is a leap year.')

// }else{
//     console.log('this is not a leap year.')
// }
// we have 5 falsy value in js.
// and they are (0, "", undefined, NaN, false)
// debugger;
// if(score = 0){
//     console.log('yay, We won the game')
// }else{
//     console.log('omg, we loss the game.')
// }
// debugger;
// if(score = 18){
//     console.log('yay, We won the game')
// }else{
//     console.log('omg, we loss the game.')
// }

// let age = 18;
// if(age >= 18 ){
//     console.log('You are eligible for  vote.')
// }else{
//     console.log('You are not eligible for  vote.')
// }

//TERNARY OPERATOR.

// let age = 17;
// console.log((age >= 18) ? "you can vote" : "you can't vote.")


// let ged = 186;
// console.log((ged >= 145) ? "you are ready for college." : "You are not ready for college.")

// let birthMonth = 'november';
// console.log((birthMonth == 'august') ? "you can go to school this year." : "you can't got to school this year.")

// let birthYear = 1996;
// console.log((birthYear >= 1996) ? "you are eligible for vote." : "You are not eligible for vote.")


// class Person{
//     constructor(fname, lname){
//         this.fname = fname,
//         this.lname = lname
//     }

//     getPerson(){
//         return this.fname + this.lname
//     }
// }

//     let newPerson = new Person('samjhana ', 'luitel')
//     console.log(newPerson.getPerson());




// Switch Statement
// break statement



// let area = 'triangle';
// let PI = 3.142, l=5, b=4, r=3;

// if(area == 'circle'){
//     console.log('The area of the circel is : ' + PI*r**2);
// }else if(area == 'triangle'){
//     console.log('The area of the triangle is : ' + (l*b)/2);
// }else if(area == 'rectangle'){
//     console.log('THe area of the rectangle is : ' + (l*b));
// }else{
//     console.log('please enter valid data.')
// }

// let area = 'circle';
// let PI = 3.142, l=5, b=4, r=3;
// debugger;
// if(area == 'circle'){
//     console.log('The area of circle is : ' + PI*r**2)
// }else if(area == 'rectangle'){
//     console.log('The area of rectangle is : ' + (l *b));
// }else if(area == 'triangle'){
//     console.log('THe area of triangle is : ' + (l*b)/2);
// }else{
//     console.log('please enter valid data.')
// }


// This is switch statement and break
// let area = 'rectangle';
// let PI = 3.142, l=5, b=4, r=3;

// switch(area){
//     case 'circle':
//         console.log('The area of circle is : ' + PI*r**2)
//     break;
//     case 'triangle':
//         console.log("the area of the triangle is : " + (l*b)/2);
//     break;
//     case 'rectangle' :
//         console.log('The area of rectangle is : ' + (l *b));
//     break;
//     default :
//         console.log('please enter valid data.')


// }


// while loops;
// block scope



// let num = 6;
// while (num <= 5){
//     console.log(num)
//     num++
// }

//  let num = 0;
//  do{
//     debugger;
//      console.log(num)
//     num++
//  }while(num <= 10);


// let number = 16;
// debugger;
// do{
//     console.log(number)
//     number++
// }while(number <= 15);

// let num = 21;
// do{
//     console.log(num)
//     num++
// }while(num <= 20);

// For loop.



// for(initializer; condition; iteration)
// {
//     code to be executed
// }

// for(let num1 = 0; num1 <= 5; num1++){
//     debugger;
//     console.log(num1);
// }

// for (let num2 = 1; num2 <= 10; num2++){
//     let tableOf = 6;
//     console.log(tableOf +' * ' + num2 + ' = ' + (tableOf * num2));
// }

// function btnclick(){
// for (let num2 = 1; num2 <= 10; num2++){
//             let tableOf = 6;
//          console.log(tableOf +' * ' + num2 + ' = ' + (tableOf * num2));
//          }
// }

// btnclick();



// Function



// function is reusable.
// function functionName(){
// statement
// }

// function Sum(){
//     let a = 5;
//     let b = 5;
//     let total = a + b;
//     console.log(total)
// }
// Sum();


// for(let num4 = 0; num4 <= 10; num4++){
//     let tableOf = 8;
//     console.log(tableOf + ' * ' + num4 + ' = ' + (tableOf * num4) );
// }

// function sum(a, b){
//     let total = a + b;
//     console.log(total)
// }

// sum(10, 30);
// sum(2,2);
// sum(100, 300)
// sum()
// sum('sita ', 'ram')

// function expressions
// function sum(a,b){
//     return total = `the total is   ${a + b}`;
// }
// let funExp = sum(30, 10);
// console.log(  funExp);


// anonymous function.
// function sum(a,b){
//     return total = a + b
// }
// let funExp = sum(30, 10);
// console.log('the sum of the two number is ' + funExp);

// let funExp = function(a, b){
//     return total = a + b;
// }
// let sum = funExp(10, 15);
// console.log('the sum of two num is ' + sum)

// let funExp = function(x, y){
//     return total = x - y;
// }

// let sub = funExp(10, 5);
// let sub1 = funExp( 20, 10);
// console.log('this is ' + sub1);
// console.log(sub1 > sub)


// ES6
// LET AND CONST
// TEMPLATE STRINGS
// DEFAULT ARGUMENTS
// REST OPERATORS
// SPREAD OPERATORS
// DESTRUCTURING
// OBJECT PROPERTIES
// ARROW FunctionS




// VAR => FUNCTION SCOPE
// LET AND => BLOCK SCOPE

// function bioData(){
//     let myName = 'sam';
//     console.log(myName)
// }
// bioData();



// Template literals(Template Strings)



// for (let num2 = 1; num2 <= 10; num2++){
//         let tableOf = 6;
//         //console.log(tableOf +' * ' + num2 + ' = ' + (tableOf * num2));
//         console.log(`${tableOf} * ${num2} = ${tableOf * num2}`);`   `
//     }



//Default PARAMETERS:





//this will give you NaN.

// function mult(a, b){
//     return a + b;
// }
// console.log(mult(5));

// function mult(a, b = 5){
//     return a + b;
// }
// console.log(mult(5));


// function mult(a = 5, b = 2){
//     return a + b;
// }
// console.log(mult());

// WHEN YOU PUT DEFAULT PARAMETER BUT STILL  PASS THE ARGUMENT IT WILL GIVE YOU ARGUMENT VALUE OTHERWISE IT WILL GIVE YOU DEFAULT VALUE.
// function mult(a = 5, b = 2){
//     return a + b;
// }
// console.log(mult(10, 10));


//ARROW FUNCTION


// const sum = () => `the sum of two number is ${(a = 7) +(b= 6)}`

// console.log(sum());


// const supHero = () => `yunaya panday is a super hero.`

// console.log(supHero());

// const hubby = () =>  ` my husband is  a very kind person.`

// console.log(hubby());


// ARRAYS;
// ARRAYS CAN HAVE DIFFERENT DATA TYPES.
// First element of array called lower index or lower Boundary.
// last element of array called Upper index or upper Boundary.
// index start with 0.


// let myFriends = ['radha', 'meera', 'draupadi', true, 1437];
// console.log(myFriends);
// console.log(myFriends[0]);
// console.log(myFriends[0]= 'krishna');
// console.log(typeof(myFriends));


// TRAVERSAL IN ARRAY
// let myFriends = ['radha', 'meera', 'draupadi', 'KUNTI'];
// let newfir = myFriends.indexOf('meera');
// console.log(newfir);
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length -1]);

// let myFriends = ['radha', 'meera', 'draupadi', 'KUNTI'];
// for(let i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// After ES6 we have for ..in and for ..of loop too

// FOR IN LOOP. IT WILL GIVE YOU INDEX NUMBER.


// let myFriends = ['radha', 'meera', 'draupadi', 'KUNTI'];
// for(let elements in myFriends){
//     console.log(elements)
// }

// FOR OF LOOP. IT WILL GIVES YOU ELEMENT IT SELF.

// let myFriends = ['radha', 'meera', 'draupadi', 'KUNTI'];
// for(let element of myFriends){
//     console.log(element);
// }

//FOREACH() LOOP. CALLS A FUNCTION FOR EACH ELEMENT IN THE ARRAY.

// let myFriends = ['radha', 'meera', 'draupadi', 'KUNTI'];
// myFriends.forEach(function (element, index, array){
//     console.log(`${element} index : ${index}`)

// })


//SEARCHING AND FILTER IN AN ARRAY.
// INDEXOF()


// let myFriends = ['radha', 'meera', 'draupadi', 'KUNTI'];
// console.log(myFriends.indexOf('draupadi'));


// ARRAY SUBSECTION PERFORM CRUD.
// CREATE, REMOVE, UPDATE, DELETE

// push (add one or more elements to the end of an array and returns the new length of the array.)
// const animals = ['pigs', 'goats', 'sheep'];
// let count = animals.push('cow');
// console.log(animals);
// console.log(count); // it will give you length of the array.



// UNSHIFT (IT WILL ADD ELEMENTS AT THE STARTING AND RETURN NEW LENGTH OF ARRAY)
// const animals = ['pigs', 'goats', 'sheep'];
// animals.unshift('cow');
// let count = animals.unshift('cow', 'duck');
// console.log(animals);


// POP (IT WILL REMOVE THE LAST ELEMENT OF THE ARRAY AND RETURN NEW LENGTH OF ARRAY.)
// const animals = ['pigs', 'goats', 'sheep'];
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);

// SHIFT (IT WILL REMOVE THE FIRST ELEMENT OF THE ARRAY AND RETURN NEW LENGTH OF ARRAY.)
// const animals = ['pigs', 'goats', 'sheep'];
// animals.shift();
// console.log(animals);


// SPLICE METHOD (IT WILL ADD AND REMOVE ELEMENTS WHATEVER YOU WANT.)
// let month = ['january', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'septemner', 'oct', 'nov']
// console.log(month);
// month.push('dec');
// console.log(month)
// month[2] = 'March';
// console.log(month);
// delete month[6];
// console.log(month);
// month.splice(2); // This will remove the march.
// month.splice(2,0, 'hi', 'hello')
// console.log(month);
// const newmonth = month.splice(month.length,'win');
// console.log(newmonth);

// const updateMonth = month.splice(2,1, 'March')
// console.log(month);

// const indexofMonth = month.indexOf('march');
// if(indexofMonth != -1){
//     const updateMonth = month.splice(2,1, 'March')
//     console.log(month);
// }else{
//     console.log('No such a data found.');
// }


// const indexofMonth = month.indexOf('march');
// if(indexofMonth != -1){
//     const updateMonth = month.splice(indexofMonth, 1)
//     console.log(month);
// }else{
//     console.log('No such a data found.');
// }



// const array1 = [1,4,9,16, 25];
// let newArr = array1.map((curtElement, index, arr) => {
//     return curtElement > 9;
// })
// console.log(array1);
// console.log(newArr);

// const array1 = [1,4,9,16, 25];
// let newArr = array1.map((curelm, index,arr) => {
//     return ` index no =${curelm} and the value is ${index} belong to ${arr}`
// })
// console.log(newArr);


// let arr = [25, 36, 49, 64, 81]
// let arrSqr = arr.map((curElm) => {
//     return curElm;
// })
// console.log(arrSqr);

// const array1 = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8, [9,10]],
// ];
// let flatArray = array1.reduce((accum, currVal) => {
//     return accum.concat(currVal)
// })
// console.log(flatArray);

// // STRING
// let name = 'samjhana';

// console.log(name.length);

// Escape Character
// let sentence = `we are nepali from "Nepal" it's a beautiful country.`
// let sentence = "we are nepali from \"Nepal\"."
// console.log(sentence);

//FINDING A STRING IN A STRING.
//  let name = 'samjhana';
//  console.log(name.indexOf('k')); // It will give you -1
// console.log(name[2]);
// console.log(name);
// console.log(name.indexOf('a', 2)); // It will find "a" after index 1.
// console.log(name.lastIndexOf('h')); // it will count from last and start index from 1.

// SEARCH METHOD.
// let name = 'samjhana';
// let newName = name.search('m')
// let newName = name.search('a', 2 ) // Search method does not take second argument like indexOf.
// let newName = name.search('M') // This will give -1
// console.log(newName);

// Extracting String Parts.
// slice(start, end)

// SLICE METHOD.

//  let str = "Apple, banana, kiwi";
// let res = str.slice(1, -3);  // first argument remove from starting and second argument(-) will remove from last -3 will remove 'iwi'.
// let res = str.slice(0, 5); // This will give you from index 0 to index 4.(5 character).
// let res = str.slice(7); // This will remove before index 7 and give you all after index 7(banana, kiwi)
// console.log(res);

//  DISPLAY ONLY SPECIFIF NUMBER OF CHARACTER.
//  let myTweets = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quos corrupti rerum exercitationem dolorem, ab repellendus esse temporibus alias earum porro? Praesentium repellendus obcaecati aperiam laborum, autem dicta nihil explicabo.'
// let myActualTweet = myTweets.slice(0, 221)
// console.log(myActualTweet);
// console.log(myActualTweet.length);

//THE SUBSTRING METHOD(this is same as slice method but THIS METHOD WON'T ACCEPT NEGATIVE INDEX)
// let fruits = "pear, pinapple, plum"
// let res = fruits.substring(5); when you have one argument it will give you after index 5(pinapple, plum)
// let res = fruits.substring(5, -1); If you give negative value then the characters are counted from the 0th position. in this case it will give you (pear, )
// let res = fruits.substr(-5);
// console.log(res);


// substr() method. This method use Negative index. This is handy when you need value from behaind.
// let fruits = "pear, pinapple, plum"
// let res = fruits.substr(-5); // this will give you (plum)
// console.log(res);


//Replaceing String Content()
// Replace method replace a specified value with another value in a string.

// let myBioData = ` I am samjhana luitel panday yogini.`
// let replaceData = myBioData.replace('samjhana', 'Samjhana'); This will replace only First found
// console.log(replaceData);
// let replaceData1 = myBioData.replace('yogini', 'tathata')
// console.log(replaceData1);

// Extracting string characters
//THE CHARAT() METHOD
// let str = 'HELLO WORLD';
// console.log(str.charAt(0)); // this will find out which character in that index.


// unicode method. charCodeAt()method
// console.log(str.charCodeAt(0)); what is unicode method (i don't understand this one)

// console.log(str.length);
// console.log(str.charCodeAt(10));

//PROPERTY ACCESS
// let str = 'HELLO WORLD';
// console.log(str[5]);

// let name = 'samjhana';
// let name1 = 'SAMJHANA';
// let lastname = 'luitel';
// console.log(name.toUpperCase());
// console.log(name1.toLowerCase())
// console.log(name.concat(' ', lastname));

// STRING TRIM(trim will remove the white spaces FROM STARTING AND END)

// let str  = '    HELLO WORLD     '
// console.log(str.trimEnd());



// CONVERTING A STRING TO ARRAY WITH SPLIT() METHOD
// let letr = 'a,b,c,d';
// console.log(letr);
// console.log(letr.split(',')); // splite in a comma,

// console.log(letr.split(' ')); // splite in a space
// console.log(letr.split('|')); splite in pipe.

// DATE AND TIME IN JS.
// CREATING DATE OBJECTS
//THER ARE 4 WAYS TO CREATE A NEW DATE Object.


// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds). // it takes 7 arguents


//  new Date()

// let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleDateString());
// console.log(currDate.toString());
// console.log(new Date().toString());
// console.log(new Date().toLocaleString());
// console.log(Date.now()); // this will give you milliseconds since january 1, 1970 UTC.


//JS COUNT MONTH FROM INDEX 0 TO 11. (JAN= 0, FEB = 1 ...... DEC = 11)
// let da = new Date(2022, 11, 12, 11, 23, 5);
// console.log(da.toLocaleString());

// HOW TO GET THE INDIVISUAL DATE
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay()); // day start from 0 index



// HOW TO SET INDIVISUAL DATE.
// const curDate = new Date();
// console.log(curDate.setDate(2022));


// TIME MOTHOD
// const curTime = new Date();
// HOW TO GET THE INDIVISUAL DATE..
// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// // MATH OBJECT
// console.log(Math.PI);
// //Round()
// let num = 10.6565;
// console.log(Math.round(num));

// MATH POW()
// console.log(Math.pow(2,4)); // this 2 lines are same
// console.log(2**4);

// Math sqrt()
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// MATH.ABS()
// console.log(Math.abs(-55)); // the abs() method will convert negative value to positive value.
// console.log(Math.abs(4444.555));
// console.log(Math.abs(6-8));

//Math.ceil()
// console.log(Math.ceil(4.51));
// console.log(Math.ceil(4.311));

// MATH.FLOOR()
// console.log(Math.floor(4.1));
// console.log(Math.floor(4.644));

// MATH MIN() MAX()
// console.log(Math.min(1,2,3,4,5,6,7));
// console.log(Math.min(1,2,3,4,5,6,7,-554));
// console.log(Math.max(1,2,3,4,5,6,7));

// MATH.RANDOM()
// console.log(Math.floor(Math.random()*10));

// MATH.TRUNC()
// IT WILL RETURNS BEFORE DECIMAL
// console.log(Math.trunc(4,6));
// console.log(Math.trunc(-99.33));
