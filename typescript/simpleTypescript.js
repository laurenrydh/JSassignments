var books = [
    {
        id: 1,
        title: 'Twilight',
        author: 'Stephenie Meyer',
        published: new Date('05-10-2005'),
        available: true,
    },
    {
        id: 2,
        title: 'The Whole-Brain Child',
        author: 'Daniel J Siegel',
        published: new Date('04-10-2011'),
        available: false,
    },
    {
        id: 3,
        title: 'Rich Dad, Poor Dad',
        author: 'Robert T. Kiyosaki',
        published: new Date('31-12-2001'),
        available: true,
    },
];
function addBook(book) {
    books.push(book);
}
function findBookById(id) {
    return books.find(function (book) { return book.id === id; });
}
function updateBook(book) {
    var index = books.findIndex(function (b) { return b.id === book.id; });
    if (index === -1) {
        return false;
    }
    books[index] = book;
    return true;
}
function removeBook(id) {
    var index = books.findIndex(function (book) { return book.id === id; });
    if (index === -1) {
        return false;
    }
    books.splice(index, 1);
    return true;
}
var newBook = {
    id: 4,
    title: 'The Rose Code',
    author: 'Kate Quinn',
    published: new Date('09-03-2021'),
    available: true,
};
addBook(newBook);
console.log(books);
var foundBook = findBookById(3);
console.log(foundBook);
var newRelease = {
    id: 1,
    title: 'New Moon',
    author: 'Stephenie Meyer',
    published: new Date('21-08-2006'),
    available: true,
};
var updateResult = updateBook(newRelease);
console.log(updateResult);
console.log(books);
var bookToRemove = removeBook(3);
console.log(bookToRemove);
console.log(books);
