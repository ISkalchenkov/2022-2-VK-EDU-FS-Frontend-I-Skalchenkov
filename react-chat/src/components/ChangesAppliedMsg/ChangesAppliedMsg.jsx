import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import styles from './ChangesAppliedMsg.module.scss'

export default function ChangesAppliedMsg () {
    return (
        <div className={styles.changesAppliedMsg}>
            <CheckCircleOutlineIcon
                className={styles.checkIcon}
                style={{ fontSize: '50px' }}
            />
            <span className={styles.msgText}>Изменения сохранены</span>
        </div>
    )
}
