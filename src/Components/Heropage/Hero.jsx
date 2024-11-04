import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export default function Hero(){
    return(
        <section className={styles.container} id="/">
            <div className={styles.content}>
                <h2 className={styles.title}>Hello, I am Damián</h2>
                <p className={styles.description}>I'm an argentinian Front end Developer in search of oportunities to colaborate and keep learning </p>
            </div>
            <img className={styles.heroImg} src={getImageURL("Hero/avatar.png")} alt="Hero image"/>
            <div className={styles.blur}></div>
        </section>
    )
}