import React, { useState } from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import AttachmentIcon from '@mui/icons-material/Attachment'
import MicIcon from '@mui/icons-material/Mic'
import styles from './Form.module.scss'
import EmojiKeyboard from '../EmojiKeyboard/EmojiKeyboard'
import { EMOJIS } from '../../constants/emojis'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Form ({ onSubmit, onChange, onClickEmoji, name, placeholder, value }) {
    const [visibility, setVisibility] = useState({})
    let hover_timer
    let unhover_timer

    function handleHover () {
        clearTimeout(unhover_timer)
        hover_timer = setTimeout(() => {
            setVisibility(styles.appear) // класс делает контент видимым и выполняет анимацию появления
        }, 1000)
    }

    function handleUnhover () {
        clearTimeout(hover_timer)
        unhover_timer = setTimeout(() => {
            setVisibility(styles.disappear) // класс выполняет анимацию исчезновения длительностью 0.5с
            setTimeout(() => setVisibility({}), 500) // после анимации убираем класс, дающий видимость блоку
        }, 1000)
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <button className={styles.button} type='button' aria-label='Attach file'>
                <AttachmentIcon />
            </button>
            <input
                className={styles.formInput}
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                type="text"
            />
            <div className={styles.dropdown} onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                <div className={classNames(styles.dropdownContent, visibility)}>
                    <EmojiKeyboard emojis={EMOJIS} onClickEmoji={onClickEmoji} />
                </div>
                <button className={styles.button} type='button' aria-label='Emojis'>
                    <SentimentSatisfiedAltIcon />
                </button>
            </div>

            <button className={styles.button} type='button' aria-label='Record audio'>
                <MicIcon />
            </button>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onClickEmoji: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
