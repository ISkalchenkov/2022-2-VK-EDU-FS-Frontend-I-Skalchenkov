import React from "react";
import { useState } from "react";
import styles from "./TranslatorForm.module.scss";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import classnames from "classnames";


export default function TranslatorForm({onChange, langs_list, src_text, dst_text, src_lang,
        dst_lang, detected_lang, handleReverse, handleSrcLangChange, handleDstLangChange}) {

    const selectedButton = classnames(styles.squareButton, styles.selected);
    const [autodetection, setAutodetection] = useState(false);
    return (
        <div className={styles.translatorForm}>
            <div className={styles.langsPanel}>
                <div className={styles.srcButtons}>
                    <button
                        className={autodetection ? selectedButton : styles.squareButton}
                        onClick={() => setAutodetection(true)}
                    >{!autodetection || !detected_lang ? "Определить язык" : (detected_lang + " (Определен автоматически)")}
                    </button>
                    <button
                        className={!autodetection ? selectedButton : styles.squareButton}
                        onClick={() => setAutodetection(false)}
                    >{src_lang}
                    </button>
                    <DropdownMenu langs_list={langs_list} onClick={handleSrcLangChange} />
                </div>
                <button className={styles.svgButton} onClick={handleReverse}>
                    <SwapHorizIcon />
                </button>
                <div className={styles.dstButtons}>
                    <button className={selectedButton}>{dst_lang}</button>
                    <DropdownMenu langs_list={langs_list} onClick={handleDstLangChange} />
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