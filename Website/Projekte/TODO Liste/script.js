//add Button
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addTODOItem(){
    alert("Add button clicked")
}

//clear Button
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click",clearButton);
function clearTODOItem(){
    alert("clear button clicked")
}

//empty button
var emptyButton = documet.getElementById("empty-buttont");
emptyButton.addEventLstener("click", emptyButton);
function emptyTODOItem(){
    alert("Empty button clicked")
}

//safe button
var safeButton = document.getElementById("safe-button");
safeBUtton.addEventListener("click", safeButton);
function safeTODOItem(){
    alert("Safe button clicked")
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

// Function add TODO Item
function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

// Add Button 
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}
// Marks Item to complete
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

// Remove Items
function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}



// clear everything
function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

// Array
var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"

// Objects
var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

// Safe List
function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

// Load List
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();