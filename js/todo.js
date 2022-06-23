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
    const toDoBox = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = "0" + todo.id;
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox";
    checkBox.id = "0" + todo.id;
    const spanOfToDo = document.createElement("span");
    spanOfToDo.innerText = todo.text;
    const btnOfToDo = document.createElement("i");
    btnOfToDo.classList.add("fa-solid");
    btnOfToDo.classList.add("fa-xmark");
    btnOfToDo.addEventListener("click", deleteToDo);
    toDoBox.appendChild(checkBox);
    toDoBox.appendChild(label);
    toDoBox.appendChild(spanOfToDo);
    liOfToDo.appendChild(toDoBox);
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