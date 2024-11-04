import styles from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Heropage/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
 

  return (
   <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App
