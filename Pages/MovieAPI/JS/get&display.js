function Populate(movieData) {
    let title = document.querySelector(".Info h1");
    let year = document.querySelector(".Info #year");
    let type = document.querySelector(".Info #type");
    let id = document.querySelector(".Info #id");
    let poster = document.querySelector('.MoviePoster')
    let text = document.querySelector(".MovieInfo");

    console.log(title);
    console.log(year);
    console.log(type);
    console.log(id);
    console.log(poster)

    console.log(movieData.Title);
    console.log(movieData.Year);
    console.log(movieData.Type);
    console.log(movieData.imdbID);

    title.textContent = movieData.Title;
    year.textContent = "[ "+ movieData.Year + " ]";
    type.textContent = "Type: " + movieData.Type;
    id.textContent = "IMDB id: " + movieData.imdbID;

    if(movieData.Poster === "N/A"){
        poster.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')"
    }else{
        poster.style.backgroundImage = "url(" + movieData.Poster + ")";
    }
    
    poster.style.display="block"
    text.style.display="block"
}
