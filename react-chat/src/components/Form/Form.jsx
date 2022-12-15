import React from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import styles from "./Form.module.scss";

export default function Form({onSubmit, onChange, name, placeholder, value}) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
                className={styles.formInput}
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                type="text"
            />
            <button className={styles.attachButton} type="button">
                <AttachmentIcon />
            </button>
        </form>
    );
}