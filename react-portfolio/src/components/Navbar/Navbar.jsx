import React, {useState, useEffect, useRef} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
import {Link} from 'react-router-dom';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return <nav className={styles.navbar}>
        <Link to="/" className={styles.title} >Portfolio</Link>
        <div className={styles.menu} ref={menuRef}>
        <img
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
            src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png") // Your X icon
                : getImageUrl("nav/menuIcon.png")  // Your hamburger icon
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>;
};