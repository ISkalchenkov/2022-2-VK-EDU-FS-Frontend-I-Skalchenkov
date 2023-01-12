import React from 'react'
import styles from './EmojiKeyboard.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function EmojiKeyboard ({ emojis, onClickEmoji }) {
    return (
        <div className={styles.emojiKeyboard}>
            <div className={styles.keyboardContent}>
                {emojis.map((name, index) => (
                    <div key={index} className={styles.emojiContainer} onClick={() => onClickEmoji(name)}>
                        <div className={classNames(styles.emoji, styles[name])} />
                    </div>
                ))}
            </div>
        </div>
    )
}

EmojiKeyboard.propTypes = {
    onClickEmoji: PropTypes.func,
    emojis: PropTypes.array
}
