import React from 'react'
import styles from './ProfileInfoBlock.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function ProfileInfoBlock ({ onChange, title, value, value_decorator, hint, placeholder, input_type, InputTag }) {
    const grow_forbidden = ['date', 'datetime-local', 'time'].includes(input_type)
    const input_classnames = grow_forbidden ? styles.input : classnames(styles.input, styles.inputGrow)

    return (
        <div className={styles.infoBlock}>
            <div className={styles.borderBlock}>
                <span className={styles.blockTitle}>{title}</span>
                <div className={styles.inputField}>
                    <span>{value_decorator}</span>
                    <InputTag
                        className={input_classnames}
                        onChange={onChange}
                        value={value}
                        name={title}
                        placeholder={placeholder}
                        type={input_type}
                    />
                </div>
            </div>
            {hint && <span className={styles.blockHint}>{hint}</span>}
        </div>
    )
}

ProfileInfoBlock.propTypes = {
    onChange: PropTypes.func,
    title: PropTypes.string,
    value: PropTypes.string,
    value_decorator: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    input_type: PropTypes.string,
    InputTag: PropTypes.any
}
