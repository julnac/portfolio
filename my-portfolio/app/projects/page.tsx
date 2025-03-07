import { ProjectTile } from "../components/ProjectTile";
import projects from "../content/data";


export default function ProjectList() {

    const projectsList = projects

    return (
      <section className="grid grid-cols-1 content-start gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project, index) => (
            <ProjectTile key={index} project={project} />
        ))}
      </section>
    );
}