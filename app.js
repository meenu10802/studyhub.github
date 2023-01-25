$(document).ready(function() {
    $("#courses").change(function(){
        if(this.value === "fycs"){
            window.location.href = "FYCS.html";
        }else if(this.value === "sycs"){
            window.location.href = "SYCS.html";
        }else if(this.value === "tycs"){
            window.location.href = "TYCS.html";
        }
    });
});
// Get elements
const createBooklistBtn = document.getElementById("create-booklist");
const booklistsContainer = document.getElementById("booklists-container");
const viewBooklistBtns = document.getElementsByClassName("view-booklist");

// Create booklist function
function createBooklist() {
  // Code to create a new booklist
  // You can use prompt() or create a form to collect the booklist name and books from the user
  // Once the booklist is created, you can append it to the booklists container
}

// View booklist function
function viewBooklist() {
  // Code to open the booklist when clicked
  // You can use this function to show the books in the booklist and also show the user who created the list
}

// Event listeners
createBooklistBtn.addEventListener("click", createBooklist);

// Loop through view booklist buttons and add event listener to each
for (let i = 0; i < viewBooklistBtns.length; i++) {
  viewBooklistBtns[i].addEventListener("click", viewBooklist);
}