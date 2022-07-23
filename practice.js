let string1 = 'samjhana';
console.log(string1);
let number2 = 5;
console.log(number2);

let a = true;
console.log(a);
console.log(typeof (string1));
console.log(typeof (number2));
console.log(typeof (a));

let fullname = {
    firstName: 'shiva',
    lastName: 'panday'
}
console.log(fullname);
console.log(typeof (fullname));
let fruits = ['apple', 'watermelon', 'watermelon'];
console.log(fruits);
console.log(typeof (fruits));
let newFruits = fruits.push('cherry');
console.log(fruits);
let newFruitss = fruits.pop();
console.log(fruits);
fruits[0] = 'pineapple';
console.log(fruits);

console.log(fruits.length);

let txt = ['ram', 'shyam', 'hari']
let nl = txt.slice(1);
console.log(txt);
console.log(nl);
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
let newwText = text.toUpperCase();
console.log(newwText);

let text1 = 'a,b,c,d,e,f,g,h,i';
const myArray = text1.split(",");
console.log(text1);
console.log(text1.indexOf('g'));
console.log(text1.lastIndexOf('i'));
console.log(text1.search('i'));

let text3 = "Hello world, welcome to the universe.";
console.log(text3.includes("world"));

let text4 = "Hello world, welcome to the universe.";

console.log(text4.startsWith("wo", 6));

let text5 = "John Doe";
console.log(text5.endsWith("Doe"));

let fName = 'samjhana';
let lName = 'luitel';
let fullName = ` my name is ${fName} ${lName}.`;
console.log(fullName);

let text6 =

    `The quick
brown fox
jumps over
the lazy dog`;
console.log(text6)

// let header = "Templates Literals";
// let tags = ["template literals", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;

// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += `</ul>`;
// document.getElementById("demo").innerHTML = html;

// let x = 123;
// document.getElementById("demo1").innerHTML =
//   x.toString() + "<br>" +
//    (123).toString() + "<br>" +
//    (100 + 23).toString();

//    let y = 1437;
//    document.getElementById('demo2').innerHTML=x.valueOf();

x = new Date("2022-7-01");
console.log(Number(x));

let child = [];
child[0] = 'yunaya',
    child[1] = 'unique',
    child[2] = 'ditya'

console.log(child);


child[3] = 'krishna';
console.log(child);

length = child.length;
console.log(length);
let children = child[child.length - 1];
console.log(children);

let year = 2019;

if (year % 3 == 0) {
    if (year % 4 == 0) {
        if (year % 400 == 0) {
            console.log('The ' + year + ' is a leap year')
        } else {
            console.log('fThe ' + year + ' is not a leap year')
        }

    } else {
        console.log('TThe ' + year + ' is not a leap year')
    }


} else {
    console.log('wThe ' + year + ' is not a leap year.')
}


// let year = 2017;

// if (year % 100 == 0){
//     if (year % 4 == 0){
//         console.log('the '+ year + ' is  a leap year ')
//     }else{
//         console.log('TThe ' + year + ' is not a leap year.')
//     }

// }else {
//     console.log('The ' + year + ' is a leap year')
// }

let fruit = ['apple', 'orange', 'cherry'];
let newFruit = fruit.unshift('banana');



fruit1 = ['mango', 'pinaple', 'plum']
fruit2 = ['pear', 'peach']
// fruits3 = fruit.concat(fruit1, fruit2); or
fruits3 = fruit + fruit1 + fruit2 + ' katahar'
console.log(fruits3);

class Person {
    constructor(nam, thar) {
        this.nam = nam,
            this.thar = thar
    }
    getPerson() {
        return this.nam + this.thar
    }
}

let newPerson = new Person('ditya ', 'panday')
console.log(newPerson.getPerson());

// a = 'samjhana';
// b = a[3];
// console.log(b);
a = 'samjhana';
b = a.indexOf('j');
console.log(b);

hello = () => {
    return 'hello everyone'
}
console.log(hello());


