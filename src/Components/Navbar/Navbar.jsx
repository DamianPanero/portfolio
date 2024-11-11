
import { useState } from "react";
import styles from "./Navbar.module.css";
import {getImageURL} from "../../utils.js"

export default function Navbar({language,toggleLanguage}){
    const[menuOpen,setMenuOpen]=useState(false);
  
    return(
        <nav className={styles.navbar}>
                <a className={styles.title} href="/">Portfolio</a>
                <button onClick={toggleLanguage} className={styles.langBtn}>
                    {language==="eng"?"ESP":"ENG"}
                </button>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn}
                    src={menuOpen?getImageURL("Navbar/closeBtn.png"):getImageURL("Navbar/menuBtn.png")}
                    alt="menu-button"
                    onClick={()=>setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={()=>setMenuOpen(false)}
                >
                    <li><a href="#About">{language==="eng"?"About":"Acerca de"}</a></li>
                    <li><a href="#Projects">{language==="eng"?"Projects":"Projectos"}</a></li>
                    <li><a href="#Contact">{language==="eng"?"Contact":"Contacto"}</a></li>

                </ul>
            </div>
          
        </nav>
    )
}