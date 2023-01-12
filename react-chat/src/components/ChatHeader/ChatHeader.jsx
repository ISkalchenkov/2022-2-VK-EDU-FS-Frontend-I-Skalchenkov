import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import styles from './ChatHeader.module.scss'
import PropTypes from 'prop-types'

export default function ChatHeader ({ img_path, profile_name, profile_last_seen }) {
    return (
        <header className={styles.header}>
            <Link to='/chats' className={styles.buttonLink} aria-label='Go to page with chats list'>
                <button className={styles.backButton} aria-label='Back to chats'>
                    <ArrowBackIcon />
                </button>
            </Link>
            <div className={styles.profile}>
                <img className={styles.profileAvatar} src={img_path} alt='profile_avatar'/>
                <div className={styles.profileInfo}>
                    <span className={styles.profileName}>{profile_name}</span>
                    <span className={styles.profileLastSeen}>{profile_last_seen}</span>
                </div>
            </div>
            <button className={styles.searchButton} aria-label='Search message'>
                <SearchIcon />
            </button>
            <button className={styles.moreButton} aria-label='More options'>
                <MoreVertIcon />
            </button>
        </header>
    )
}

ChatHeader.propTypes = {
    img_path: PropTypes.any,
    profile_name: PropTypes.string,
    profile_last_seen: PropTypes.string
}
