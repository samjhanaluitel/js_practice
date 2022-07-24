// PROMISES
// fetch()
// fullfilled
// reject

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

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


const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb'

    setTimeout(() => {
        temp.innerHTML = '&#xf2ca'
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c9'
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c8'
        temp.style.color = 'orange'
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c7'
        temp.style.color = '#d63031'

    }, 4000);
}





tempLoad();
setInterval(tempLoad, 5000);