import React from 'react'
import styles from './Chat.module.scss'
import Message from '../Message/Message'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import formatTime from '../../utils/formatTime'
import PropTypes from 'prop-types'

export default function Chat ({ messages }) {
    return (
        <div className={styles.chat}>
            {messages.slice().reverse().map(message =>
                <Message
                    message_text={message.body}
                    message_time={formatTime(message.created_at)}
                    is_right_side={message.sender === 2}
                    Status={DoneAllIcon}
                    key={message.id}
                />
            )}
        </div>
    )
}

Chat.propTypes = {
    messages: PropTypes.array
}
