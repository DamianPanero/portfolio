
import { getImageURL } from "../../utils"
import skills from "../../../data/skills.json";
import styles from "../About/About.module.css";

export default function About(){
    return(
        <section id="About" className={styles.container}>
            <h2 className={styles.title}>About me</h2>
            <div className={styles.aboutItems}>
            <div className={styles.content}>
                <img src={getImageURL("About/cursor.png")} alt="cursor image"/> 
                <p>I'm a front-end developer looking for my first working project where i can keep learning all i can!.</p>
            </div>
            <div className={styles.skills}>
                {skills.map((skill,id)=>
                <div key={id} className={styles.skill}>
                    <img src={getImageURL(skill.imageSrc)} alt={skill.title}/>
                    <h3>{skill.title}</h3>
                </div>

                )}
            </div>
            </div>
            
        </section>
    )
}