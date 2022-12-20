const formEl = document.getElementById('random-book-form');
const backE = document.getElementById('back');

backE.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'best-buddy-main-page.html';
});


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// since I do not know the earliest dates, I would assume that it's 2012, 0, 1.
const d = randomDate(new Date(2012, 0, 1), new Date());
const randomPublishedDate = d.toISOString().substring(0, 10);

// save random date in local storage in order to re-use it later
localStorage.setItem('random date', randomPublishedDate);


formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const client = new NewYorkTimesClient(API_KEY);
    const publishedDate = localStorage.getItem('random date');

    var divE = document.getElementById('books-container');
    var ulE = divE.querySelector('ul');
    if (ulE != undefined) {
        ulE.remove();
    }
    ulE = document.createElement('ul');
    divE.appendChild(ulE);

    client.getBook(publishedDate)
        .then(function (book) {
            const bookTitle = book.title;
            const bookAuthor = book.author;
            const bookDescription = book.description;
            var liE = document.createElement('li');
            liE.innerText = `Title: ${bookTitle}\nAuthor: ${bookAuthor}\nDescription: ${bookDescription}`;
            ulE.appendChild(liE);
        })

});



