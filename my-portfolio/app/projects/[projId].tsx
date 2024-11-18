// import data from '/public/data/projects.json';
import Image from "next/image";

const ProjectPage = ({ project }: { project: any }) => {
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div>
        <h1>{project.title}</h1>
        <Image src={project.imageSrc} alt={project.title} width={600} height={400} />
        <p>{project.description}</p>
      </div>
    );
};



export default ProjectPage;