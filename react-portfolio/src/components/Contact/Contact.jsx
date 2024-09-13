import React, {useState} from "react";
import styles from "./Contact.module.css";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('Form Submitted:', formData);
    };
    return (
        <div>
            <div className={styles.info}>
            <h1>
                Contact Me
            </h1>
            <p>For any inquiries, please attach your details below. Include in your message
                all information about the project you need assistance with
            </p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.input}>
                    <label htmlFor="name" className={styles.subTitle}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.box}
                        required
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="email" className={styles.subTitle}>Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.box}
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="number" className={styles.subTitle}>Number</label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={styles.box}
                    />

                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="message" className={styles.subTitle}>Message:</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.messagebox}
                    required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};