import React from "react";
import styles from "./TranslatorForm.module.scss";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function TranslatorForm({onChange, src_text, dst_text}) {
    return (
        <div className={styles.translatorForm}>
            <div className={styles.langsPanel}>
                <div className={styles.srcButtons}>
                    <button className={styles.squareButton}>DETECT LANGUAGE</button>
                    <button className={styles.squareButton}>РУССКИЙ</button>
                    <button className={styles.svgButton}>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
                <button className={styles.svgButton}>
                    <SwapHorizIcon />
                </button>
                <div className={styles.dstButtons}>
                    <button className={styles.squareButton}>АНГЛИЙСКИЙ</button>
                    <button className={styles.svgButton}>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.srcBlock}>
                    <textarea
                    className={styles.textArea}
                    onChange={onChange}
                    value={src_text}
                />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.dstBlock}>
                    <span>{dst_text}</span>
                </div>
            </div>
        </div>
    );
}