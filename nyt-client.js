class NewYorkTimesClient {
    movieReviewUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
    booksUrl = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getMovies(searchPattern) {
        const url = `${this.movieReviewUrl}?query=${searchPattern}&api-key=${this.apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }

    async getBook(publishedDate) {
        const url = `${this.booksUrl}?published_date=${publishedDate}&api-key=${this.apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        const listIndex = getRandomNumber(0, data.results.lists.length);
        const bookList = data.results.lists[listIndex];
        const bookIndex = getRandomNumber(0, bookList.books.length);
        return bookList.books[bookIndex];

    }
}

//get random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
