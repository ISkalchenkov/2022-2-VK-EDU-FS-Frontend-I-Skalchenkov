import './index.css';

const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const chat = document.querySelector(".chat");

form.addEventListener("submit", handleSubmit.bind(this));
document.addEventListener("DOMContentLoaded", getMessagesFromLocalStorage.bind(this));

function handleSubmit(event) {
    event.preventDefault();
    if (!input.value) {
        return;
    }
    const now = new Date();
    const message = {
        "text": input.value,
        "time": `${now.getHours()}:${now.getMinutes()}`,
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
    
    const status = document.createElement("div");
    status.className = "message-status";
    status.innerHTML = '<span class="material-icons">done_all</span>';

    const info = document.createElement("div");
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
