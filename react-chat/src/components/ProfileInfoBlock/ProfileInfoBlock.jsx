import React from "react";
import styles from "./ProfileInfoBlock.module.scss";
import classnames from "classnames";


export default function ProfileInfoBlock({onChange, title, value, value_decorator, hint, placeholder, input_type, InputTag}) {
    const grow_forbidden = ["date", "datetime-local", "time"].includes(input_type);
    const input_classnames = grow_forbidden ? styles.input : classnames(styles.input, styles.inputGrow);

    return (
        <div className={styles.infoBlock}>
            <div className={styles.borderBlock}>
                <span className={styles.blockTitle}>{title}</span>
                <div className={styles.inputField}>
                    <span>{value_decorator}</span>
                    <InputTag
                        className={input_classnames}
                        onChange={onChange}
                        value={value}
                        name={title}
                        placeholder={placeholder}
                        type={input_type}                    
                    />
                </div>
            </div>
            {hint && <span className={styles.blockHint}>{hint}</span>}
        </div>
    );
}
