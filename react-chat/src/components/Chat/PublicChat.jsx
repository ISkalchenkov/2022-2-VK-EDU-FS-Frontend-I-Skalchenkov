import React from "react";
import styles from "./Chat.module.scss";
import Message from "../Message/Message";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import formatTime from "../../utils/formatTime";


export default function PublicChat({messages}) {
    return (
        <div className={styles.chat}>
            {messages.slice().reverse().map(message => {
                const is_right_side = message.author === "Ivan Skalchenkov" ? true : false;
                return (
                <Message
                    message_author={message.author}
                    message_text={message.text}
                    message_time={formatTime(message.timestamp)}
                    is_right_side={is_right_side}
                    Status={DoneAllIcon}
                    key={message._id}
                />);
            })}
        </div>
    );
}