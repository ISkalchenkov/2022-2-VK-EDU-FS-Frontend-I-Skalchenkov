import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../../actions/messages'
import PropTypes from 'prop-types'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import ChatListElement from '../../components/ChatListElem/ChatListElement'
import CreateChatButton from '../../components/CreateChatButton/CreateChatButton'
import styles from './PageChatList.module.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import formatTime from '../../utils/formatTime'
import jenniferAvatar from '../../assets/avatars/jennifer.jpg'
import publicChatAvatar from '../../assets/avatars/public_chat.jpg'

function PageChatList (props) {
    const { last_message, getMessages } = props
    const [lastPublicMessage, setLastPublicMessage] = useState({})

    function getLastPublicMessage () {
        fetch('https://tt-front.vercel.app/messages')
            .then(response => response.json())
            .then(data => setLastPublicMessage(data[data.length - 1]))
    }

    useEffect(() => {
        getMessages()
        const timer_id = setInterval(getMessages, 1000) // Запуск поллинга с периодичностью в 1с

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
                    last_message={last_message.body}
                    img_path={jenniferAvatar}
                    last_message_time={formatTime(last_message.created_at)}
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

PageChatList.propTypes = {
    last_message: PropTypes.object,
    getMessages: PropTypes.func
}

const mapStateToProps = (state) => ({
    last_message: state.messages.messages.at(-1)
})

export default connect(mapStateToProps, { getMessages })(PageChatList)
