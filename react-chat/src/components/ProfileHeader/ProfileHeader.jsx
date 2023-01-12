import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DoneIcon from '@mui/icons-material/Done'
import styles from './ProfileHeader.module.scss'
import PropTypes from 'prop-types'

export default function ProfileHeader ({ onClick }) {
    return (
        <header className={styles.header}>
            <Link to="/chats" className={styles.buttonLink}>
                <button className={styles.backButton}>
                    <ArrowBackIcon />
                </button>
            </Link>
            <div className={styles.pageTitle}>
                <h1>Edit Profile</h1>
            </div>
            <button className={styles.doneButton} onClick={onClick}>
                <DoneIcon />
            </button>
        </header>
    )
}

ProfileHeader.propTypes = {
    onClick: PropTypes.func
}
