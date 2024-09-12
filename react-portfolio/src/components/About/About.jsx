import React, {useState} from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return ( 
    <section className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImg}/>
            <ul className={styles.ulItems}>
                <li className={styles.element}>
                    <img src={getImageUrl("about/cursorIcon.png")}/>
                    <div className={styles.item}>
                        <h2 className={styles.subTitle}>Frontend Developer</h2>
                        <p className={styles.description}>Im a front-end developer with experience in building responsive and optimised sites</p>
                    </div>
                </li>
                <li className={styles.element}>
                    <img src={getImageUrl("about/serverIcon.png")} />
                    <div className={styles.item}>
                        <h2 className={styles.subTitle}>Backend Developer</h2>
                        <p className={styles.description}>I have experience developing fast and optimised back-end systems and APIs</p>
                    </div>
                </li>
                <li className={styles.element}>
                    <img src={getImageUrl("about/uiIcon.png")}/>
                    <div className={styles.item}>
                        <h2 className={styles.subTitle}>UI Designer</h2>
                        <p className={styles.description}>I have designed multiple landing pages and have created design systems as well</p>
                    </div>
                </li>
            </ul>
        </div>
    </section> 
    );
};