import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import styles from './ChangesAppliedMsg.module.scss'

export default function ChangesAppliedMsg () {
    return (
        <div className={styles.changesAppliedMsg}>
            <span className={styles.checkIcon} >
                <CheckCircleOutlineIcon />
            </span>
            <span className={styles.msgText}>Изменения сохранены</span>
        </div>
    )
}
