const toDoForm = document.getElementById("todo-form"); //form
const toDoInput = document.querySelector("#todo-form input"); //form 안의 input
const toDoList = document.getElementById("todo-list"); //ul
// const toDoInput = document.querySelector("input");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
 const li = event.target.parentElement; //event.target은 X버튼을 의미. parentElement는 클릭된 element(X버튼)의 부모이다.
 li.remove();
 toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
 saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "-"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();


}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos =localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);

}



