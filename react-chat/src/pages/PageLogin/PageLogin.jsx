import React from 'react'
import styles from './PageLogin.module.scss'
import Logo from '../../components/Logo/Logo'
import GoogleIcon from '@mui/icons-material/Google'

export default function PageLogin () {
    function handleClick () {
        window.location.replace('http://localhost:8000/social-auth/login/google-oauth2/')
    }

    return (
        <React.Fragment>
            <div className={styles.login}>
                <div className={styles.contentContainer}>
                    <div className={styles.logo}>
                        <Logo fontSize="80px" fontWeight="500" />
                    </div>
                    <div className={styles.socialContainer}>
                        <button className={styles.socialButton} onClick={handleClick}>
                            <span className={styles.socialIcon}>
                                <GoogleIcon />
                            </span>
                            <span className={styles.socialName}>LOGIN WITH GOOGLE</span>
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
