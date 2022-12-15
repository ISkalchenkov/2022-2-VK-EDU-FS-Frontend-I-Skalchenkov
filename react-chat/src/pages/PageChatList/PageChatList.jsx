import React from "react";
import ChatListHeader from "../../components/ChatListHeader/ChatListHeader";
import ChatListElement from "../../components/ChatListElem/ChatListElement";
import CreateChatButton from "../../components/CreateChatButton/CreateChatButton";
import styles from "./PageChatList.module.scss";
import DoneAllIcon from "@mui/icons-material/DoneAll";


export default function PageChatList(props) {
    return (
        <React.Fragment>
            <ChatListHeader />
            <div className={styles.chatList}>
                <ChatListElement
                    onClick={props.onClick}
                    chat_title={"Дженнифер"}
                    last_message={"Привет, Иван"}
                    img_path={"https://i.pinimg.com/564x/f4/e3/c8/f4e3c8040039ef05b3edb01da3c01721.jpg"}
                    last_message_time={"12:34"}
                    unread_messages_number={1}
                />
                <ChatListElement
                    onClick={() => {}}
                    chat_title={"Райан"}
                    last_message={"До встречи"}
                    img_path={"https://i.pinimg.com/originals/64/df/07/64df072b49d3d4a97ec66c2afeea40f8.jpg"}
                    last_message_time={"01:22"}
                    Status={DoneAllIcon}
                />
            </div>
            <CreateChatButton />
        </React.Fragment>
    );
}