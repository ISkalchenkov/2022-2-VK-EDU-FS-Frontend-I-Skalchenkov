import React from 'react'
import styles from './Message.module.scss'
import classnames from 'classnames'
import parseEmojis from '../../utils/parsers/parseEmojis'
import PropTypes from 'prop-types'

export default function Message ({ Status, message_author, message_text, message_time, is_right_side }) {
    const side = is_right_side ? styles.rightSide : styles.leftSide
    const message_classnames = classnames(styles.message, side)
    return (
        <div className={message_classnames}>
            <span className={styles.author}>{!is_right_side ? message_author : ''}</span>
            <span className={styles.messageText}>{parseEmojis(message_text)}</span>
            <div className={styles.messageInfo}>
                <span className={styles.messageTime}>{message_time}</span>
                {is_right_side && <Status className={styles.messageStatus} />}
            </div>
        </div>
    )
}

Message.propTypes = {
    Status: PropTypes.any,
    message_author: PropTypes.string,
    message_text: PropTypes.string,
    message_time: PropTypes.string,
    is_right_side: PropTypes.bool
}
