import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./ChatListHeader.module.scss"

export default function ChatListHeader() {
    return (
        <header className={styles.header}>
            <button className={styles.menuButton}>
                <MenuIcon />
            </button>
            <div className={styles.pageTitle}>
                <h1>Messenger</h1>
                <h1>Messenger</h1>
                <h1>Messenger</h1>
                <h1>Messenger</h1>
            </div>
            <button className={styles.searchButton}>
                <SearchIcon/>
            </button>
        </header>
    );
}