// PROMISES
// fetch()
// fullfilled
// reject

// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com')
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         }).catch((error) => {
//             console.log(error);
//         })
// }


// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com')
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         }).catch((error) => {
//             console.log(error);
//         })
// }



// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

// const btnClick = async () => {

// }

// function lightOn() {
//     document.getElementById('myImage').src = 'img_bulbon.gif'
// }
// function lightOff() {
//     document.getElementById('myImage').src = 'img_bulboff.gif'
// }


// const tempLoad = () => {
//     let temp = document.getElementById('temp');
//     temp.innerHTML = '&#xf2cb'

//     setTimeout(() => {
//         temp.innerHTML = '&#xf2ca'
//     }, 1000);
//     setTimeout(() => {
//         temp.innerHTML = '&#xf2c9'
//     }, 2000);
//     setTimeout(() => {
//         temp.innerHTML = '&#xf2c8'
//         temp.style.color = 'orange'
//     }, 3000);
//     setTimeout(() => {
//         temp.innerHTML = '&#xf2c7'
//         temp.style.color = '#d63031'

//     }, 4000);
// }





// tempLoad();
// setInterval(tempLoad, 5000);


// const calculateTemp = () => {
//     const numberTemp = document.getElementById('temp').value;
//     // console.log(numberTemp);

//     const tempSelected = document.getElementById('temp_diff');
//     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;


//     const celToFah = (cel) => {
//         let Fahrenheit = Math.round((cel * 9 / 5) + 32);
//         return Fahrenheit
//     }
//     const fehToCel = (fehr) => {
//         let celsius = Math.round((fehr - 32) * 5 / 9);
//         return celsius
//     }

//     let result;
//     if (valueTemp == 'cel') {
//         result = celToFah(numberTemp);
//         document.getElementById('resultContainer').innerHTML = `=${result} Fahrenheit`
//     } else {
//         result = fehToCel(numberTemp);
//         document.getElementById('resultContainer').innerHTML = `=${result} celsius`
//     }
// }


// const counters = document.querySelectorAll('.counter');

// counters.forEach((counter) => {
//     // console.log(counter);
//     counter.innerHTML = 0;

//     const updateCounter = () => {
//         const targetCount = +counter.getAttribute('data-target');
//         // console.log(targetCount);

//         const startingCount = Number(counter.innerHTML);
//         const incr = targetCount / 100;

//         if (startingCount < targetCount) {
//             counter.innerHTML = `${Math.round(startingCount + incr)}`;
//             setTimeout(updateCounter, 1000)
//         } else {
//             counter.innerHTML = targetCount;
//         }

//     }


//     updateCounter()

// })


// // // USING THE UNARY PLUS OPERATOR:
// // var n = +Str;  // THIS WILL CHANGE ALL THE STRING TO NUMBER.

// // // THE NUMBER CONSTRUCTOR:
// // var n = Number(str); // ANOTHER WAY TO CONVERT STRING TO NUMBER.

// // // the parseFloat function:
// // var n = parseFloat(str) // one more  way to change string to number.






