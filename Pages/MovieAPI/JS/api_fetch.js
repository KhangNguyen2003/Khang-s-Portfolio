const moviePoster = document.querySelector('.MoviePoster');
const movieContainer = document.querySelector('.MovieContainer');

const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",search)

const searchText = document.getElementById("text")

//Enter to submit
searchText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Trigger a click event on the submit button
        searchBtn.click();
    }
});

//Click the search
async function search(){
    while (movieContainer.firstChild) {
        movieContainer.removeChild(movieContainer.firstChild);
    } //Remove All to insert new ones

   let text = searchText.value
   text = text.replace(/ /g,"+") //Remove spaces for query below
   searchText.value = "" 

   let fetched_data = await fetchData(text);   // Call the async function to fetch the data

   if (typeof fetched_data === "undefined") {
        noArray();
        return; // Stop further execution
    }
    else{
        removeGreet()
        movieContainer.style.display = "flex"

        fetched_data.forEach((movie) => {
        // class MovieCards 
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("MovieCards");

        // get img
        const moviePoster = document.createElement("img");
        if(movie.Poster === "N/A"){
            moviePoster.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        }
        else{moviePoster.src = movie.Poster;}
        movieDiv.appendChild(moviePoster);

        // Add the movie div to the movieContainer
        movieContainer.appendChild(movieDiv);
        });

        //Add active to the first child
        let first_poster = document.querySelector('.MovieCards')
        first_poster.classList.add('active')
        activated(fetched_data);

        Populate(fetched_data[0])
        } //End of Else
}

async function fetchData(text) {
        try {
           let url = 'https://www.omdbapi.com/?s=**&apikey=74da9ba8'; 
           url = url.replace("**",text)
           console.log(url)
           const response = await fetch(url);
           const result = await response.json();
           //console.log(data)
           console.log(result.Search)
           return result.Search

          } catch (error) {
         console.error(error);
         }
 }
