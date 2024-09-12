import React,{useState} from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Felix</h1>
            <p className={styles.description}>I'm a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you would like to learn more!</p>
        <a className={styles.contactBtn} href="mailto:felixcreamdunlop@email.com">Contact Me<Meta:compat></Meta:compat></a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt = "Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
};