import React, {useState, useRef} from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const form = useRef();
    const [submitted,setsubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',  
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // Initialize EmailJS once when the component loads
    React.useEffect(() => {
        emailjs.init('Ngq0DlK2YngRcJlii');  
    }, []);
    
    const resetForm = () => {
        setFormData({
            name:'',
            email:'',
            phoneNumber:'',
            message:'',
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_p3tj89e', 'template_vqs4jw7', form.current)
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              setsubmitted(true);
              resetForm();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };


    return (
        <div>
            <h1 className={styles.title}>Contact Me</h1>
            <div className={styles.topContainer}>
                <div className={styles.info}>
                    <p>For any website inquiries, please attach your details below. Include in your message
                        all information about the website you need assistance with. Please include in
                        your request any features that your site needs such as any colour requirements. 
                    </p>
                </div>
                <img className={styles.img} src={getImageUrl('contact/phoneIcon.png')} alt="phone icon"/>
            </div>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
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
                    required
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="number" className={styles.subTitle}>Number:</label>
                    <input
                        type="tel"
                        id="number"
                        name="phoneNumber"  // Updated to match the state key
                        value={formData.phoneNumber}  // This is bound to the correct state key
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
                <p className={`${styles.submittedMessage} ${submitted ?  styles.submitted : ""}`}>Submitted Successfully!</p>
    
            </form>

            </div>
    );
};
