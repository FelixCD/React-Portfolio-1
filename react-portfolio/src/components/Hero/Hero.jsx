import React,{useState} from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import {Link, Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
    const navigate = useNavigate(); 
    const btnClick = () => {
        navigate('/contact');
    };

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Felix</h1>
            <p className={styles.description}>I am a passionate MSci Computer Science student, with an interest in Backend Software Development.
                 I am offering my fullstack web-development services. I have experience in web developement with React and NodeJS and Java desktop
                 application development.</p>
        <button className={styles.contactBtn} onClick={
                    btnClick}>Contact Me</button>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt = "Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
};