import React from "react";
import styles from "./Logo.module.scss"

export default function Logo({fontSize, fontWeight}) {
    return (
        <div className={styles.logo} style={{fontSize: fontSize, fontWeight: fontWeight}}>
            <span>Messenger</span>
            <span>Messenger</span>
            <span>Messenger</span>
            <span>Messenger</span>
        </div>
    );
}