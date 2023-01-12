import React from 'react'
import styles from './Logo.module.scss'
import PropTypes from 'prop-types'

export default function Logo ({ fontSize, fontWeight }) {
    return (
        <div className={styles.logo} style={{ fontSize, fontWeight }}>
            <span className={styles.logoText}>Messenger</span>
            <span className={styles.logoText}>Messenger</span>
            <span className={styles.logoText}>Messenger</span>
            <span className={styles.logoText}>Messenger</span>
        </div>
    )
}

Logo.propTypes = {
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string
}
