const formEl = document.getElementById('movie-review-form');
const titleInput = document.getElementById('title')
const backE = document.getElementById('back');

backE.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'best-buddy-main-page.html';
});


formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const client = new NewYorkTimesClient(API_KEY);
    const movieTitle = titleInput.value;

    var divE = document.getElementById('movie-list-container');
    var resDiv = divE.querySelector('div');
    if (resDiv != undefined) {
        resDiv.remove();
    }
    resDiv = document.createElement('div');
    resDiv.setAttribute('class', 'movie-result');
    divE.appendChild(resDiv);


    client.getMovies(movieTitle)
        .then(function (movies) {
            if (movies == null) {
                alert("No results!");
                return
            }
            for (let movie of movies) {
                const movieUrl = movie.link.url;
                const movieDisplayTitle = movie.display_title;

                var a = document.createElement('a');
                a.innerText = movieDisplayTitle;
                a.addEventListener('click', function () {
                    window.open(movieUrl);
                });
                resDiv.appendChild(a);
                linebreak = document.createElement('br');
                resDiv.appendChild(linebreak);
            }
        });

});
