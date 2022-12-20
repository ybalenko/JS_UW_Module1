const randomBook = document.getElementById('random-book');
const movieReview = document.getElementById('movie-review');


randomBook.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'best-buddy-random-book-page.html';
});


movieReview.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'best-buddy-movie-review-page.html';
});
