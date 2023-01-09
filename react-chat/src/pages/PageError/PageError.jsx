import React from "react";
import styles from "./PageError.module.scss";

export default function PageError({error_message}) {
    return (
        <React.Fragment>
            <div className={styles.error}>
                <div className={styles.errorContent}>
                    <span className={styles.errorMessage}>{error_message}</span>
                </div>
            </div>
        </React.Fragment>
    );
}
