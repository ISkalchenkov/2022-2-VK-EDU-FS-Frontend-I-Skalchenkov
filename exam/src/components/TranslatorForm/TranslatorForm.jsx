import React from "react";
import styles from "./TranslatorForm.module.scss";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function TranslatorForm() {
    return (
        <div className={styles.translatorForm}>
            <div className={styles.langsPanel}>
                <div className={styles.srcButtons}>
                    <button>DETECT LANGUAGE</button>
                    <button>SRC LANGUAGE</button>
                </div>
                <button>
                    <SwapHorizIcon />
                </button>
                <div className={styles.srcButtons}>
                    <button>DST LANGUAGE</button>
                </div>
            </div>
        </div>
    );
}