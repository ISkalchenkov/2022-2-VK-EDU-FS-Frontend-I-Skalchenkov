import React, {useState} from "react";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import Chat from "../../components/Chat/Chat";
import Form from "../../components/Form/Form";


function getMessageCount() {
    return Number(localStorage.getItem("message_count")) || 0;
}

function getMessagesFromLocalStorage() {
    let messages = [];
    const message_count = getMessageCount();

    for (let message_id = 0; message_id < message_count; ++message_id) {
        const message = localStorage.getItem("message_"+message_id);
        messages.push(JSON.parse(message))
    }
    return messages;
}

function saveMessageToLocalStorage(message) {
    let message_count = getMessageCount();
    const new_id = message_count;
    localStorage.setItem(("message_" + new_id), JSON.stringify(message));
    localStorage.setItem("message_count", ++message_count);
}

export default function PageChat(props) {
    const [messages, setMessages] = useState(getMessagesFromLocalStorage())
    const [text, setText] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        if (text === "")
            return;
        const now = new Date();
        const message = {
            id: getMessageCount(),
            text: text,
            time: now.toLocaleString("ru", {hour:"2-digit", minute:"2-digit"})
        };
        setMessages(messages.concat(message));
        saveMessageToLocalStorage(message);
        setText("");
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    return (
        <React.Fragment>
            <ChatHeader
                onClick={props.onClick}
                img_path={"https://i.pinimg.com/564x/f4/e3/c8/f4e3c8040039ef05b3edb01da3c01721.jpg"}
                profile_name={"Дженнифер"}
                profile_last_seen={"был(-а) 2 часа назад"}
            />
            <Chat messages={messages} />
            <Form
                onSubmit={handleSubmit}
                onChange={handleChange}
                value={text}
                name={"message_text"}
                placeholder={"Напишите сообщение..."}
            />
        </React.Fragment>
    );
}
