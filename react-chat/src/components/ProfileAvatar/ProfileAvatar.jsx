import React from 'react'
import styles from './ProfileAvatar.module.scss'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import PropTypes from 'prop-types'

export default function ProfileAvatar ({ img_path }) {
    return (
        <div className={styles.profileAvatar}>
            <img className={styles.avatar} src={img_path} alt='profile_avatar' />
            <span className={styles.cameraIcon}>
                <PhotoCameraIcon />
            </span>
        </div>
    )
}

ProfileAvatar.propTypes = {
    img_path: PropTypes.any
}
