let greeting = document.querySelector("#Greeting")
let text = document.querySelector(".MovieInfo")
let poster = document.querySelector('.MoviePoster')

function noArray(){
    greeting.style.display="block"
    greeting.innerHTML="<h2>Sorry, We couldn't find any movie with the provided key.</h2> <p>Maybe You want to try again.<p>"
    poster.style.display="none"
    text.style.display="none"
}

function removeGreet(){
    greeting.style.display="none"
}
