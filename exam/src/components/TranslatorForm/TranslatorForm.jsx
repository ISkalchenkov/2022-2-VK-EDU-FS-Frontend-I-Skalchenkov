import React from "react";
import styles from "./TranslatorForm.module.scss";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function TranslatorForm() {
    return (
        <div className={styles.translatorForm}>
            <div className={styles.langsPanel}>
                <div className={styles.srcButtons}>
                    <button className={styles.squareButton}>DETECT LANGUAGE</button>
                    <button className={styles.squareButton}>SRC LANGUAGE</button>
                    <button className={styles.svgButton}>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
                <button className={styles.svgButton}>
                    <SwapHorizIcon />
                </button>
                <div className={styles.dstButtons}>
                    <button className={styles.squareButton}>DST LANGUAGE</button>
                    <button className={styles.svgButton}>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.srcBlock}>
                    <textarea className={styles.textArea} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.dstBlock}>
                </div>
            </div>
        </div>
    );
}