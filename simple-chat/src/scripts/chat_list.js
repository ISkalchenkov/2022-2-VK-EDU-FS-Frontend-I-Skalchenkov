import "../styles/main.css"
import "../styles/chat_list/header.css"
import "../styles/chat_list/chatlist.css"
import "../styles/chat_list/create_chat_button.css"

const chat = document.querySelector(".chat")
chat.addEventListener("click", openChatPage);

function openChatPage() {
    window.location.replace("chat_page.html");
}
