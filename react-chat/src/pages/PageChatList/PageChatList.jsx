import React, { useEffect, useState } from 'react'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import ChatListElement from '../../components/ChatListElem/ChatListElement'
import CreateChatButton from '../../components/CreateChatButton/CreateChatButton'
import styles from './PageChatList.module.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import formatTime from '../../utils/formatTime'
import jenniferAvatar from '../../assets/avatars/jennifer.jpg'
import publicChatAvatar from '../../assets/avatars/public_chat.jpg'

export default function PageChatList () {
    const [lastMessage, setLastMessage] = useState({})
    const [lastPublicMessage, setLastPublicMessage] = useState({})

    function getLastMessage () {
        fetch('/chats/1/messages/')
            .then(response => response.json())
            .then(data => setLastMessage(data[data.length - 1]))
    }

    function getLastPublicMessage () {
        fetch('https://tt-front.vercel.app/messages')
            .then(response => response.json())
            .then(data => setLastPublicMessage(data[data.length - 1]))
    }

    useEffect(() => {
        getLastMessage()
        const timer_id = setInterval(getLastMessage, 1000) // Запуск поллинга с периодичностью в 1с

        return () => { clearInterval(timer_id) } // освобождение ресурсов при размонтировании
    }, [])

    useEffect(() => {
        getLastPublicMessage()
        const timer_id = setInterval(getLastPublicMessage, 1000) // Запуск поллинга с периодичностью в 1с

        return () => { clearInterval(timer_id) } // освобождение ресурсов при размонтировании
    }, [])

    return (
        <React.Fragment>
            <ChatListHeader />
            <div className={styles.chatList}>
                <ChatListElement
                    chat_title='Дженнифер'
                    last_message={lastMessage.body}
                    img_path={jenniferAvatar}
                    last_message_time={formatTime(lastMessage.created_at)}
                    Status={DoneAllIcon}
                    to='/chats/1'
                />
                <ChatListElement
                    chat_title='Общий чат'
                    last_message={lastPublicMessage.text}
                    img_path={publicChatAvatar}
                    last_message_time={formatTime(lastPublicMessage.timestamp)}
                    Status={DoneAllIcon}
                    to='/public_chat'
                />
            </div>
            <CreateChatButton />
        </React.Fragment>
    )
}
