// Sample array of movie names
 // Sample array of movie names
 document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const movieListContainer = document.getElementById("searchresult");

    // Sample array of movie names and corresponding images
    const moviesData = [
        { name: "THE BOYS  IMDB- 9.1", image: "img/the boys.jpg" },
        { name: "Ant-Man ", image: "img/ant man.jpg" },
        // Add other movies with their names and images
    ];

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = moviesData.filter(movie => movie.name.toLowerCase().includes(searchTerm));

        // Clear the current list
        movieListContainer.innerHTML = "";

        // Populate the list with filtered movies and images
        filteredMovies.forEach(movie => {
            const listItem = document.createElement("div");
            listItem.classList.add("search-result-item");

            // Create an image element
            const movieImage = document.createElement("img");
            movieImage.src = movie.image;
            movieImage.alt = `${movie.name} Poster`;

            // Create a span element for the movie name
            const movieName = document.createElement("span");
            movieName.textContent = movie.name;

            // Add click event to navigate to the selected movie
            listItem.addEventListener("click", () => {
                // You can replace 'movie.html' with the actual link or route to the movie page
                window.location.href = `#movie.html?name=${encodeURIComponent(movie.name)}`;
            });

            // Append image and name to the list item
            listItem.appendChild(movieImage);
            listItem.appendChild(movieName);

            // Append the list item to the container
            movieListContainer.appendChild(listItem);
        });
    });

    document.body.addEventListener("click", () => {
        movieListContainer.innerHTML = "";
        // Hide the movie list
    });
});

