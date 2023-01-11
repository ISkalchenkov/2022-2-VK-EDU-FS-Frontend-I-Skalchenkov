import React, {useEffect, useState} from "react";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import Chat from "../../components/Chat/Chat";
import Form from "../../components/Form/Form";


export default function PageChat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    function getMessages() {
        fetch("/chats/1/messages/")
            .then(response => response.json())
            .then(data => setMessages(data))
    }

    async function sendMessage(message) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(message)
        }
        const response = await fetch("/chats/1/messages/", options);
        const data = await response.json()
        return data;
    }

    useEffect(() => {
        getMessages(); // Отображение сообщений при монтировании страницы
        const timer_id = setInterval(getMessages, 1000); // Запуск поллинга с периодичностью в 1с

        return () => {clearInterval(timer_id)} // освобождение ресурсов при размонтировании
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (text === "")
            return;
        const message ={
            body: text,
            chat: 1,
            sender: 2,
        };
        const created_message = await sendMessage(message);
        if (created_message.id > messages[messages.length-1].id) { // если id созданного свежее, чем последний имеющийся
            setMessages(messages.concat(created_message));             // то добавляем сообщение в список
        }
        setText("");
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    function onClickEmoji(name) {
        const emoji_code = `:${name}:`;
        setText(text + emoji_code);
    }

    return (
        <React.Fragment>
            <ChatHeader
                img_path="https://i.pinimg.com/564x/f4/e3/c8/f4e3c8040039ef05b3edb01da3c01721.jpg"
                profile_name="Дженнифер"
                profile_last_seen="был(-а) 2 часа назад"
            />
            <Chat messages={messages} />
            <Form
                onSubmit={handleSubmit}
                onChange={handleChange}
                onClickEmoji={onClickEmoji}
                value={text}
                name="message_text"
                placeholder="Напишите сообщение..."
            />
        </React.Fragment>
    );
}
