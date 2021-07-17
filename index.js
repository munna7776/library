class Book {
    constructor(Name, author, roll, branch) {
        this.Name = Name;
        this.author = author;
        this.roll = roll;
        this.branch = branch;
    }
}
class Display {
    add(book) {
        let tablebody = document.getElementById("tablebody");
        let myDetails;
        myDetails = `<tr>
                        <td>${book.Name}</td>
                        <td>${book.author}</td>
                        <td>${book.roll}</td>
                        <td>${book.branch}</td>
                    </tr>`;
        tablebody.innerHTML += myDetails;
    }
    clear() {
        libraryForm.reset();
    }
    valid(book) {
        if (book.Name.length <= 2 || book.author.length <= 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, showMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message : </strong>${showMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    }
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', formSubmit);
function formSubmit(event) {
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("auhtorName").value;
    let rollNo = document.getElementById("rollNo").value;
    let cse = document.getElementById("cse");
    let it = document.getElementById("it");
    let ece = document.getElementById("ece");
    let ee = document.getElementById("ee");
    let ce = document.getElementById("ce");
    let aeie = document.getElementById("aeie");
    let branchType;
    if (cse.checked) {
        branchType = cse.value;
    }
    else if (it.checked) {
        branchType = it.value;
    }
    else if (ece.checked) {
        branchType = ece.value;
    }
    else if (ee.checked) {
        branchType = ee.value;
    }
    else if (ce.checked) {
        branchType = ce.value;
    }
    else if (aeie.checked) {
        branchType = aeie.value;
    }
    let book = new Book(bookName, author, rollNo, branchType);
    let display = new Display();
    if (display.valid(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been issued successfully.');
    }
    else {
        display.show('danger', 'Sorry , You can not add this book.');
    }
    event.preventDefault();
}