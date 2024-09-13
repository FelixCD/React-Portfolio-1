import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Links.module.css";

export const Links = () => {
    return <footer id="links" className={styles.container}>
        <div className={styles.text}>
            <h2>My Links</h2>
            <p>Feel free to have a look!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("links/linkedinIcon.png")} alt="LinkedIn Icon" className={styles.linkImg} />
                <a href="https://www.linkedin.com/in/felix-cream-dunlop-4b0521265/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("links/githubIcon.png")} alt="Github Icon" className={styles.linkImg}/>
                <a href="https://www.github.com">Github</a>
            </li>
        </ul>
    </footer>;
};