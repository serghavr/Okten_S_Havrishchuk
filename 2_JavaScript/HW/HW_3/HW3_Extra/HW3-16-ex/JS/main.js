const books = [
    { title: "Гаррі Поттер", pages: 400, authors: ["Дж. Роулінг"], genres: ["Фентезі", "Пригоди"] },
    { title: "Короткий опис часу", pages: 256, authors: ["Стівен Гокінг"], genres: ["Наука"] },
    { title: "Відьмак: Останнє бажання", pages: 320, authors: ["Анджей Сапковський"], genres: ["Фентезі"] },
    { title: "Спільна робота", pages: 150, authors: ["Автор А", "Автор Б"], genres: ["Детектив", "Драма", "Трилер"] }
];
let biggestBook = books[0];

for (const currentBook of books) {
    if (currentBook.pages > biggestBook.pages) {
        biggestBook = currentBook;
    }
}
console.log("Найбільша книга:", biggestBook);

let longestnameBook = books[0];
for (const currentBook of books) {
    if (currentBook.title.length > longestnameBook.title.length) {
        longestnameBook = currentBook;
    }
}
console.log("Найдовша назва у книги:", longestnameBook);

let twoAuthorsBooks = [];

for (const currentBook of books) {
    if (currentBook.authors.length === 2) {
        twoAuthorsBooks.push(currentBook);
    }
}

console.log("Книги двох авторів:", twoAuthorsBooks);

let oneAuthorsBooks = [];

for (const currentBook of books) {
    if (currentBook.authors.length === 1) {
        oneAuthorsBooks.push(currentBook);
    }
}

console.log("Книги одного автора:", oneAuthorsBooks);

maxGenresCount = 0

for (const currentBook of books) {

    if (currentBook.genres.length > maxGenresCount) {
        maxGenresCount = currentBook.genres.length;
    }

    let booksWithMaxGenres = [];
    for (const currentBook of books) {

        if (currentBook.genres.length === maxGenresCount) {

            booksWithMaxGenres.push(currentBook);
        }
    }

console.log("Книги з найбільшою кількістю жанрів:", booksWithMaxGenres);}