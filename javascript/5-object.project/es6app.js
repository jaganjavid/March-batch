// BOOK CONSTRUCTOR

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
     // ADD BOOK TO LIST

     addBookToList(book){
       
        const bodyList = document.querySelector("#book-list");
        

        // CREATE A TR ELEMENT

        const row = document.createElement("tr");

        row.innerHTML = `
            <th scope="row">${book.title}</th>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">X</td>
        `;

        bodyList.appendChild(row);
    }

    // SHOW ALERT

    showAlert(message, className){

        // CREATE A DIV ELEMENET
        const div = document.createElement("div");
        
        // ADD CLASSE
        div.className = `alert ${className}`;

        // ADD TEXT
        div.appendChild(document.createTextNode(message));

        const insertAlert = document.querySelector(".app-alert");

        insertAlert.appendChild(div);

        setTimeout(function(){
            div.remove();
        }, 3000)
    }

    // CLEAR FILEDS

    clearFields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    // DELETE BOOKS
    
    deleteBook(target){
        if(target.className === 'delete'){
            // console.log(target.parentElement);
            target.parentElement.remove();
        }
    }
}


class Store {
    static getBooks(){
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);
        
        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks(){
        const books = Store.getBooks();
        
        books.forEach(function(book){
         const ui = new UI();

         ui.addBookToList(book);
        });
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
        
    }
}


// DOM LOAD EVENT

document.addEventListener("DOMContentLoaded", Store.displayBooks);


// EVENT LISTENER FOR ADD BOOK

document.getElementById("book-form").addEventListener("submit", function(e){

    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // INSTANTIATE BOOK
    const book = new Book(title, author, isbn);
    const ui = new UI();

    // VALIDATE

    if(title === "" || author === "" || isbn === ""){
        ui.showAlert("Please fill all the fileds", "alert-danger");
    } else{

        ui.addBookToList(book);

        ui.showAlert("Book Added Succesfully", "alert-success");

        Store.addBook(book);

        ui.clearFields();
        
    }
})

// EVENT LISTENER FOR ADD DELETE

document.querySelector("#book-list").addEventListener("click", function(e){
    e.preventDefault();
    
    if(e.target.className === "delete"){

        // INSTANTIATE BOOK
        const ui = new UI();

        // DELETE BOOK
        ui.deleteBook(e.target);

        const isbn = e.target.previousElementSibling.textContent;

        Store.removeBook(isbn);

        ui.showAlert("Book deleted Succesfully", "alert-success");
        
    }
})