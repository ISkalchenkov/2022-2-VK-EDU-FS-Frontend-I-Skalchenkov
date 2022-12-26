import React from "react";
import {Link} from "react-router-dom";
import styles from "./ChatListElement.module.scss";


export default function ChatListElement({chat_title, img_path, last_message, last_message_time, unread_messages_number, to, Status}) {
    let status;
    if (unread_messages_number) {
        status = <span className={styles.unreadMessagesNumber}>{unread_messages_number}</span>
    } else {
        status = Status ? (<Status className={styles.messageStatus} />) : null;
    }

    return (
        <Link to={to} style={{textDecoration: "none"}}>
            <div className={styles.chat}>
                <div className={styles.chatAvatar}>
                    <img className={styles.image} src={img_path} alt="chat_avatar" />
                </div>
                <div className={styles.chatInfo}>
                    <span className={styles.chatTitle}>{chat_title}</span>
                    <span className={styles.lastMessage}>{last_message}</span>
                </div>
                <div className={styles.chatMeta}>
                    <span className={styles.lastMessageTime}>{last_message_time}</span>
                    {status}
                </div>
            </div>
        </Link>
    );
}