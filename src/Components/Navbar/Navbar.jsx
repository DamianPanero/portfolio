
import { useState } from "react";
import styles from "./Navbar.module.css";
import {getImageURL} from "../../utils.js"

export default function Navbar(){
    const[menuOpen,setMenuOpen]=useState(false);
    return(
        <nav className={styles.navbar}>
                <a className={styles.title} href="/">Portfolio</a>
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
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}