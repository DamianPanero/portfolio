import { useState } from "react";
import styles from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Heropage/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  const [language,setLanguage]=useState("eng");

  const toggleLanguage=()=>{
    setLanguage(prevlanguage=>(prevlanguage==="eng"?"esp":"eng"));
  }
 

  return (
   <div className={styles.App}>
    <Navbar language={language} toggleLanguage={toggleLanguage} />
    <Hero language={language} />
    <About language={language} />
    <Projects language={language} />
    <Contact language={language} />
   </div>
  )
}

export default App
