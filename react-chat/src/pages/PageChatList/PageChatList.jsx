import React, {useEffect, useState} from "react";
import ChatListHeader from "../../components/ChatListHeader/ChatListHeader";
import ChatListElement from "../../components/ChatListElem/ChatListElement";
import CreateChatButton from "../../components/CreateChatButton/CreateChatButton";
import styles from "./PageChatList.module.scss";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import formatTime from "../../utils/formatTime";

export default function PageChatList() {
    const [lastMessage, setLastMessage] = useState({});
    const [lastPublicMessage, setLastPublicMessage] = useState({});

    function getLastMessage() {
        fetch("/chats/1/messages/")
            .then(response => response.json())
            .then(data => setLastMessage(data[data.length-1]))
    }

    function getLastPublicMessage() {
        fetch("https://tt-front.vercel.app/messages")
            .then(response => response.json())
            .then(data => setLastPublicMessage(data[data.length-1]))
    }

    useEffect(() => {
        getLastMessage();
        const timer_id = setInterval(getLastMessage, 1000); // Запуск поллинга с периодичностью в 1с

        return () => {clearInterval(timer_id)} // освобождение ресурсов при размонтировании
    }, []);

    useEffect(() => {
        getLastPublicMessage();
        const timer_id = setInterval(getLastPublicMessage, 1000); // Запуск поллинга с периодичностью в 1с

        return () => {clearInterval(timer_id)} // освобождение ресурсов при размонтировании
    }, []);

    return (
        <React.Fragment>
            <ChatListHeader />
            <div className={styles.chatList}>              
                <ChatListElement
                    chat_title="Дженнифер"
                    last_message={lastMessage.body}
                    img_path="https://i.pinimg.com/564x/f4/e3/c8/f4e3c8040039ef05b3edb01da3c01721.jpg"
                    last_message_time={formatTime(lastMessage.created_at)}
                    Status={DoneAllIcon}
                    to="/chats/1"
                />
                <ChatListElement
                    chat_title="Общий чат"
                    last_message={lastPublicMessage.text}
                    img_path="https://sun9-88.userapi.com/impg/PMVnO7ExY9bFZWjvX87pc1Th8R1ehp0Jl_H0Uw/nfmb-1ytTfo.jpg?size=360x360&quality=96&sign=3679c4dd5ed51e6e2c82dcd38a707726&type=album"
                    last_message_time={formatTime(lastPublicMessage.timestamp)}
                    Status={DoneAllIcon}
                    to="/public_chat"
                />
            </div>
            <CreateChatButton />
        </React.Fragment>
    );
}