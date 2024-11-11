
import { getImageURL } from "../../utils"
import skills from "../../../data/skills.json";
import styles from "../About/About.module.css";

export default function About({language}){
    return(
        <section id="About" className={styles.container}>
            <h2 className={styles.title}>{language==="eng"?"About me":"Sobre mi"}</h2>
            <div className={styles.aboutItems}>
            <div className={styles.content}>
                <img src={getImageURL("About/cursor.png")} alt="cursor image"/> 
                <p>{language==="eng"?"I'm a front-end developer looking for my first working project where i can keep learning all i can!.":"Soy un desarrollador front-end en búsqueda de mi primer trabajo con muchas ganas de aprender"}</p>
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