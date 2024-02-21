document.addEventListener("DOMContentLoaded", () => {
    // Retrieve movie name from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get("name");

    // Display the movie title on the page
    const movieTitleElement = document.getElementById("movieTitle");
    movieTitleElement.textContent = movieName;
});
