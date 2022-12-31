import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";


export default function Header({ButtonIcon, to, title}) {
    return (
        <header className={styles.header}>
            <Link to={to} className={styles.buttonLink}>
                <button className={styles.button}>
                    <ButtonIcon />
                </button>
            </Link>
            <span  onClick={(e) => console.log(e.target.innerText)} className={styles.title}>{title}</span>
        </header>
    );
}
