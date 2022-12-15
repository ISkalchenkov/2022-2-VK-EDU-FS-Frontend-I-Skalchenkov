import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./ChatHeader.module.scss";


export default function ChatHeader({onClick, img_path, profile_name, profile_last_seen}) {
    return (
        <header className={styles.header}>
            <button className={styles.backButton} onClick={onClick}>
                <ArrowBackIcon />
            </button>
            <div className={styles.profile}>
                <img className={styles.profileAvatar} src={img_path} alt="profile_avatar"/>
                <div className={styles.profileInfo}>
                    <span className={styles.profileName}>{profile_name}</span>
                    <span className={styles.profileLastSeen}>{profile_last_seen}</span>
                </div>
            </div>
            <button className={styles.searchButton}>
                <SearchIcon />
            </button>
            <button className={styles.moreButton}>
                <MoreVertIcon />
            </button>
        </header>
    );
}