import React from 'react'
import CreateIcon from '@mui/icons-material/Create'
import styles from './CreateChatButton.module.scss'

export default function CreateChatButton () {
    return (
        <button className={styles.createChatButton}>
            <CreateIcon />
        </button>
    )
}
