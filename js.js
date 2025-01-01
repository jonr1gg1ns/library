const library = document.querySelector(".mainLibrary")
const form = document.getElementById('bookForm');
const clearButton = document.querySelector(".clear")
const myLibrary = [];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read  = read;
}

function addBookToLibrary() {
 if(myLibrary.length < 8) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value === "true";
    
    
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    let bookCard = document.createElement("div")
    bookCard.classList.add("book-card")
    library.appendChild(bookCard)
    let bookTitle = document.createElement("h3")
    bookTitle.classList.add("book-title")
    bookCard.appendChild(bookTitle)
    let bookPages = document.createElement("p")
    bookPages.classList.add("book-pages")
    bookCard.appendChild(bookPages)
    let bookAuthor = document.createElement("p")
    bookAuthor.classList.add("book-author")
    bookCard.appendChild(bookAuthor)
    let bookRead = document.createElement("p")
    bookRead.classList.add("book-read")
    bookCard.appendChild(bookRead)
    bookTitle.textContent =  "Title: " + newBook.title
    bookAuthor.textContent = "Author: " + newBook.author
    bookPages.textContent = "Pages: " + newBook.pages
    bookRead.textContent = newBook.read ? "Read" : "Not Read";
 } else {
    alert("You can only  add up to 8 books.")
 }

}

const submitButton = document.querySelector(".submit-button")

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
    addBookToLibrary();
    form.reset()
    } else {
        alert("Please fill out all required items.")
    }
    
});

clearButton.addEventListener("click", function(event) {
    myLibrary.length = 0;
    library.innerHTML = ""
})