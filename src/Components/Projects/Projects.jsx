import Card from "./Card";
import projects from "../../../data/projects.json"
import styles from "../Projects/Projects.module.css";
export default function Projects(){

    return(
        <section className={styles.container} id="Projects"> 
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project,id)=>
                    <Card key={id} project={project}/>
                )}
            </div>
        </section>
    )
}