import { getImageURL } from "../../utils";
import styles from "../Contact/Contact.module.css";


export default function Contact({language}){
    return(
        <footer className={styles.footer} id="Contact">
            <div className={styles.content}>
                <h2 className={styles.title}>{language==="eng"?"Contact me":"Contáctame"}</h2>
                <p className={styles.description}>{language==="eng"?"Feel free to reach out":"Manda un mensaje si tienes alguna duda"}</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("Contact/email.png")} alt="email icon"/>
                    <a href="mailto:damigp2@gmail.com">damigp2@gmail.com</a>
                    </li>
                <li className={styles.link}>
                    <img src={getImageURL("Contact/linkedin.png")} alt="linkedin icon"/>
                    <a href="https://www.linkedin.com/in/damián-panero/" target="_blank">linkedin.com/DamianPanero/</a>
                    </li>
                <li className={styles.link}>
                    <img src={getImageURL("Contact/github.png")} alt="git icon"/>  
                    <a href="https://www.github.com/DamianPanero" target="_blank">github.com/DamianPanero</a>
                    </li>
            </ul>
        </footer>
    )
}