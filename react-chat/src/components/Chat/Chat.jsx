import React from "react";
import styles from "./Chat.module.scss";
import Message from "../Message/Message";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function Chat({messages}) {
    const jennifer_message = (
        <Message
            message_text={"Привет, Иван"}
            message_time={"12:34"}
            is_right_side={false}
        />
    );

    return (
        <div className={styles.chat}>
            {messages.slice().reverse().map(message => 
                <Message
                    message_text={message.text}
                    message_time={message.time}
                    is_right_side={true}
                    Status={DoneAllIcon}
                    key={message.id}
                />
            )}
            {jennifer_message}
        </div>
    );
}