import projects from "../../../data/projects.json";
import { getImageURL } from "../../utils";
import styles from "../Projects/Card.module.css";

export default function Card({language,project:{title,titulo,imageSrc,description,descripcion,skills,demo}}){
    return(
        <div className={styles.container}>
           <img className={styles.cardImg}
                src={getImageURL(imageSrc)} 
                alt="Project image"/>
           <h3 className={styles.title}>{language==="eng"?title:titulo}</h3>
           <p className={styles.description}>{language==="eng"?description:descripcion}</p>
           <ul className={styles.skills}>
            {skills.map((skill,id)=>
                <li className={styles.skill} key={id}>{skill}</li>
            )}
           </ul>
           <div className={styles.links}>
            <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
           </div>
        </div>
    )
}