import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export default function Hero({language}){
    return(
        <section className={styles.container} id="/">
            <div className={styles.content}>
                <h2 className={styles.title}>{language==="eng"?"Hello, I am Damián":"Hola,soy Damián"}</h2>
                <p className={styles.description}>{language==="eng"?"I'm an argentinian Front end Developer in search of oportunities to colaborate and keep learning":"Soy un desarrollador Front-end argentino en búsqueda de oportunidades de colaborar y continuar aprendiendo"} </p>
            </div>
            <img className={styles.heroImg} src={getImageURL("Hero/avatar.png")} alt="Hero image"/>
            <div className={styles.blur}></div>
        </section>
    )
}