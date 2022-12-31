import React from "react";
import styles from "./HistoryList.module.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function HistoryList({history, onClick}) {
    return (
        <div className={styles.historyList}>
            <span className={styles.clearHistory} onClick={onClick}>Очистить историю</span>
            {history.map(translation => (
                <div className={styles.historyItem} key={translation.id}>
                    <div className={styles.translateDirection}>
                        <span>{translation.srcLang}</span>
                        <ArrowRightAltIcon />
                        <span>{translation.dstLang}</span>
                    </div>
                    <div className={styles.textItem}>
                        <span className={styles.srcText}>{translation.srcText}</span>
                        <span className={styles.dstText}>{translation.dstText}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
