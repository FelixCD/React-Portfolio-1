
import styles from "./App.module.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Links } from "./components/Links/Links";
import { Contact } from "./components/Contact/Contact";

function App() {

  return (
  <div className={styles.App}>
    <Router>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.mainContent}>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />}/> 
        <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      <Links />
    </Router>

  </div>
  )
}

export default App
