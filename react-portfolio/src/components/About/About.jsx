import React, {useState} from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return ( 
    <section className={styles.page} id="about">
        <div className={styles.mainContainer}>
        <h1 className={styles.title}>ABOUT</h1>
        <div className={styles.container}>
        <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImg}/>
        <div className={styles.content}>
        <div className={styles.ulItems}>
                <div className={styles.element}>
                    <img src={getImageUrl("about/uniHat.png")} className={styles.image}/>
                    <div className={styles.item}>
                        <h2 className={styles.subTitle}>Education</h2>
                        <p className={styles.description}>I'm currently studying Computer Science at the University of Nottingham, with a keen
                            interest in software engineering and development. My primary goals are to build efficient and effective applications
                            using languages such as Java and C. I'm dedicated to developing as many skills as possible, and I am right now focusing
                            on full stack development using NodeJS and React.
                        </p>
                    </div>
                </div>
                <div className={styles.element}>
                    <img src={getImageUrl("about/lightBulb.png")} className={styles.image} />
                    <div className={styles.item}>
                        <h2 className={styles.subTitle}>Skills Development</h2>
                        <p className={styles.description}>I have developed a strong foundation in programming, algorithms and systems design.
                            I am about to enter my third year, taking modules in Mobile App Development and Machine Learning, hoping to learn 
                            more about cutting edge technologies such as these.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section> 
    );
};