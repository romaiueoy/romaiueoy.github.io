const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function onLogoutClick(event) {
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    logOut.classList.add(HIDDEN_CLASSNAME);
    paintLoginForm();
    }
    
function paintLoginForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    }
    

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    logOut.classList.remove(HIDDEN_CLASSNAME);
    logOut.addEventListener("click", onLogoutClick);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    paintGreetings(savedUsername);
}
