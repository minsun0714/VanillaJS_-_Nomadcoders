const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
localStorage.setItem(USERNAME_KEY,loginInput.value); 
paintGreetings();
}

function paintGreetings(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings();
}

//HTML에서 input의 유효성 검사(required, 글자수 제한 등등)를 작동시키기 위해서는 form 안에 들어있어야 함.
//다만, form 안에 있을 경우 input에 값을 입력할 때마다 새로 고침된다.