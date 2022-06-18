const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(todo) {
    const liOfToDo = document.createElement("li");
    liOfToDo.id = todo.id;
    const spanOfToDo = document.createElement("span");
    spanOfToDo.innerText = todo.text;
    const btnOfToDo = document.createElement("button");
    btnOfToDo.innerText = "❌";
    btnOfToDo.addEventListener("click", deleteToDo);
    liOfToDo.appendChild(spanOfToDo);
    liOfToDo.appendChild(btnOfToDo);
    toDoList.appendChild(liOfToDo);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);