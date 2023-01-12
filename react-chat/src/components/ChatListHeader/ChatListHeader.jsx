import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import styles from './ChatListHeader.module.scss'
import Logo from '../Logo/Logo'

export default function ChatListHeader () {
    const [menuOpened, setMenuOpened] = useState(false)

    function handleLogoutClick () {
        window.location.replace('http://localhost:8000/logout/')
    }

    function handleMenuClick () {
        setMenuOpened(!menuOpened)
    }

    return (
        <header className={styles.header}>
            <div className={styles.dropdown}>
                <button className={styles.button} onClick={handleMenuClick}>
                    <MenuIcon />
                </button>
                <div
                    className={styles.dropdownContent}
                    style={menuOpened ? { display: 'block' } : {}}>
                    <Link to="/profile" >
                        <button className={styles.button}>
                            <AccountCircleIcon />
                        </button>
                    </Link>
                    <button className={styles.button} onClick={handleLogoutClick}>
                        <LogoutIcon />
                    </button>
                </div>

            </div>
            <div className={styles.pageTitle} >
                <Logo fontSize="35px" fontWeight="500" />
            </div>

            <button className={styles.button}>
                <SearchIcon/>
            </button>
        </header>
    )
}
