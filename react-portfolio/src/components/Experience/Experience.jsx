import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";


export const Experience = () => {
    return <section id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={`${styles.content} ${styles.container}`}>
        <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return <li className = {styles.historyItem} key={id}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                            <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience,id) => {
                                return <li key={id}>
                                    {experience}
                                </li>
                            })}</ul>
                            </div>
                        </li>
                    }
                )
            }
            </ul>
            <div className={styles.skills}>
    {skills.map((skill, id) => (
        <div key={id} className={styles.skill}>
            <svg className={styles.greenCircle} width="130" height="130" viewBox="0 0 140 140">
                <circle cx="76" cy="65" r="63" />
                    </svg>
                    <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
            </div>
            ))}
        </div>

            
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};