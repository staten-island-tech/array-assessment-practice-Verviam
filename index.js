const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

const bookInfo = []
books.forEach(book => {
  bookInfo.push (`${book.authorFirst} ${book.authorLast} wrote ${book.name} in ${book.publishDate}`);  
});
console.log(bookInfo);

//Array of authors and the book they wrote
//"--- wrote --- in ---"

function compareByPublishedDate(book1, book2) {
  return book1.publishDate - book2.publishDate;
}

console.log(books.sort(compareByPublishedDate));


//Sort books from oldest to most recent


const compareByAlphabetical = books.sort((book1, book2) => {
  const title1 = book1.name.toUpperCase(); // ignore upper and lowercase
  const title2 = book2.name.toUpperCase(); // ignore upper and lowercase
  if (title1 < title2) {
    return -1;
  }
  if (title1 > title2) {
    return 1;
  }
  // names must be equal
  return 0;
});

console.log(compareByAlphabetical);
//sort books alphabetically


books.forEach(book => {
  if (book.name === "War and Peace")
  console.log(`${book.authorFirst} ${book.authorLast} wrote War and Peace`);
});
//Find who wrote War and Peace

before1900 = []
books.forEach(book => {
  if (book.publishDate < 1900) {
    before1900.push(book);
  }
});
console.log(`${before1900.length} books written before 1900`);

//how many books were written before 1900?


//was there at least one book published within the last 100 years?


//was every book published within the last 100 years?


//print a list of books that "includes" the genre historical

