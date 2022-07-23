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


const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com')
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
            console.log(error);
        })
}



jokeBtn.addEventListener('click', generateJokes);
generateJokes();

const btnClick = async () => {

}