import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out to me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:felixcreamdunlop@gmail.com">felixcreamdunlop@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                <a href="htttps://www.linkedin.com/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"/>
                <a href="https://www.github.com">Github</a>
            </li>
        </ul>
    </footer>;
};