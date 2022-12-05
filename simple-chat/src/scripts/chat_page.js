import "../styles/main.css"
import "../styles/chat_page/header.css"
import "../styles/chat_page/chat.css"
import "../styles/chat_page/form.css"

const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const chat = document.querySelector(".chat");

const back_button = document.querySelector(".back-button");
back_button.addEventListener("click", openChatList);

form.addEventListener("submit", handleSubmit.bind(this));
document.addEventListener("DOMContentLoaded", getMessagesFromLocalStorage.bind(this));


function openChatList() {
    window.location.replace("chat_list.html");
}

function handleSubmit(event) {
    event.preventDefault();
    if (!input.value) {
        return;
    }
    const now = new Date();
    const hours = now.getHours();
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const message = {
        "text": input.value,
        "time": `${hours}:${minutes}`,
        "sender": "Ivan",
    };
    createMessageBlock(message);
    saveMessageToLocalStorage(message);
    input.value = "";
}

function createMessageBlock(message) {
    const messageBlock = document.createElement("div");
    messageBlock.className = "message right-side";

    const text = document.createElement("span");
    text.className = "message-text";
    text.innerText = message.text;

    const time = document.createElement("span");
    time.className = "message-time";
    time.innerText = message.time;
    
    const status = document.createElement("span");
    status.className = "material-icons message-status";
    status.innerText = "done_all";

    const info = document.createElement("div");
    info.className = "message-info";
    info.append(...[time, status]);

    messageBlock.append(...[text, info]);
    chat.prepend(messageBlock);
}

function getMessagesFromLocalStorage() {
    const count = Number(localStorage.getItem("count"));
    if (!count) return;
    for (let i = 1; i <= count; i++) {
        const message = localStorage.getItem(i);
        createMessageBlock(JSON.parse(message));
    }
  }
  
function saveMessageToLocalStorage(message) {
    let count = Number(localStorage.getItem("count")) || 0;
    count++;
    localStorage.setItem(count, JSON.stringify(message));
    localStorage.setItem("count", count);
}
