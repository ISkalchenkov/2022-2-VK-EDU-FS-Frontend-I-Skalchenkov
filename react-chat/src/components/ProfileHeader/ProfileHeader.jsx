import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DoneIcon from '@mui/icons-material/Done'
import styles from './ProfileHeader.module.scss'
import PropTypes from 'prop-types'

export default function ProfileHeader ({ onClick }) {
    return (
        <header className={styles.header}>
            <Link to='/chats' className={styles.buttonLink} aria-label='Go to page with chats list'>
                <button className={styles.backButton} aria-label='Back to chats'>
                    <ArrowBackIcon />
                </button>
            </Link>
            <div className={styles.pageTitle}>
                <h1 className={styles.pageTitleText}>Edit Profile</h1>
            </div>
            <button className={styles.doneButton} onClick={onClick} aria-label='Submit'>
                <DoneIcon />
            </button>
        </header>
    )
}

ProfileHeader.propTypes = {
    onClick: PropTypes.func
}
