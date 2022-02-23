console.log(`Hello World`);

const message = document.querySelector("#message"); 

document.querySelector("form").addEventListener("submit", addMovie); 


function addMovie(event) {
    event.preventDefault(); 

    const inputField = document.querySelector("input"); 

    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");

    addEventListener("click", crossOffMovie); 

    movieTitle.textContent = inputField.value; 
    movie.appendChild(movieTitle);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"; 
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn); 

    const list = document.querySelector("ul");
    list.appendChild(movie); 

    inputField.value = ""; 
};


function deleteMovie (event) {
    message.textContent = "Movie Deleted!"
    event.target.parentNode.remove(); 
}


function crossOffMovie(event) {

    event.target.classList.toggle("checked"); 

    if (event.target.classList.contains("checked") === true) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}
