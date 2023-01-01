import React from "react";
import { useState } from "react";
import styles from "./DropdownMenu.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classnames from "classnames";


export default function DropdownMenu({langs_list, onClick}) {
    const [contentOpened, setContentOpened] = useState(false);
    const content_classnames = contentOpened ? classnames(styles.dropdownContent, styles.opened) : styles.dropdownContent;
    return (
        <div className={styles.dropdown}>
            <button onClick={() => setContentOpened(!contentOpened)} className={styles.dropButton}>
                <KeyboardArrowDownIcon />
            </button>
            <div className={content_classnames}>
                {langs_list.map(language =>
                    <span onClick={onClick} key={language}>{language}</span>)}
            </div>
        </div>
    );
}