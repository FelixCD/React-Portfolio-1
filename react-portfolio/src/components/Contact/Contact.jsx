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
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                <a href="https://www.linkedin.com/in/felix-cream-dunlop-4b0521265/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"/>
                <a href="https://www.github.com">Github</a>
            </li>
        </ul>
    </footer>;
};