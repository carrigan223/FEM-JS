// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    return favoriteBooks.push(bookName);
  }
} //checking if the word great is NOT included in the title
//if eval is true adding the title to the array

// TODO: define printFavoriteBooks() function

function printFavoriteBooks() {
  console.log(`My ${favoriteBooks.length} Favorite books are:`);
  for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(favoriteBooks[i]);
  }
} //this function is displaying the # of books in the array
//it is then loop through the array to display the titles

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks(); // calling the printFavoriteBooks function to display the results
