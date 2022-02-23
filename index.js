console.log(`Hello World`);

// Grabbing the necessary buttons. 
document.querySelector("form")



function addMovie(event) {

    const inputField = document.querySelector("#input-field"); 

    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value; 
    movie.appendChild(movieTitle); 

    const list = document.querySelector("ul");
    list.appendChild(movie); 
}







// Add event listener to my elements. 
