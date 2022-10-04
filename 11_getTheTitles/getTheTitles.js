const getTheTitles = function (books) {
    // return books.reduce((array, book) => [...array, book.title], []);
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
