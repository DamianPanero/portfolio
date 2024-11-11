import Card from "./Card";
import projects from "../../../data/projects.json"
import styles from "../Projects/Projects.module.css";
export default function Projects({language}){

    return(
        <section className={styles.container} id="Projects"> 
            <h2 className={styles.title}>{language==="eng"?"Projects":"Proyectos"}</h2>
            <div className={styles.projects}>
                {projects.map((project,id)=>
                    <Card key={id} project={project} language={language}/>
                )}
            </div>
        </section>
    )
}