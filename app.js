const button = document.querySelector('button')
const para = document.querySelector('p')
const url = ("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist&type=single")

function getJoke(){
    fetch(url)
    .then((data)=>data.json())
    .then((joke)=>{
        para.innerHTML = joke.joke
    })
}

button.addEventListener('click', getJoke)

