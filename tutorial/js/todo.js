const  toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    console.dir(event.target);
    console.dir(event.target.parentNode);
    console.log(event.target.parentNode.firstChild.innerText)
    const li = event.target.parentNode;
    li.remove();

    const deletedTodo = event.target.parentNode.firstChild.innerText;
    const parsedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));
    var deletedIndex = parsedTodo.indexOf(deletedTodo);
    console.log(`deletedIndex : ${deletedIndex}`)
    if (deletedIndex > -1) { 
        parsedTodo.splice(deletedIndex, 1);
    }
    console.log(`parsedTodo : ${parsedTodo}`);

    localStorage.setItem(TODOS_KEY, JSON.stringify(parsedTodo));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSumit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

function sayHello(name) {
    console.log(`say Hello ${name}`)
}

toDoForm.addEventListener("submit", handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(toDo => {
        paintTodo(toDo);
    });
}