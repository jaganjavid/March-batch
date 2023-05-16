




// BOOK CONSTRUCTOR

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI CONSTRUCTOR

function UI(){

    // ADD BOOK TO LIST

    UI.prototype.addBookToList = function(book){
       
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

    UI.prototype.showAlert = function(message, className){

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

    UI.prototype.clearFields = function(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    // DELETE BOOKS
    
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
            // console.log(target.parentElement);
            target.parentElement.remove();
        }
    }
}


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

        ui.showAlert("Book deleted Succesfully", "alert-success");
    }
})


