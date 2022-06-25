console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const API_KEY = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";

let form = document.querySelector("#searchForm");
let searchInput = document.querySelector("#gifTerm");
let img = document.querySelector("img");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getGif();
});

function getGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
    )
    
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
        img.src = body.data.images.original.url;
        img.alt = `${body.data.title} by ${body.data.user.username}`;
        img.title = `${body.data.title} by ${body.data.user.username}`;
    })
    .catch((err) => {
        console.error(err);
    });
}