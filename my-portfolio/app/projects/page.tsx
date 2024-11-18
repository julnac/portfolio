import { ProjectTile } from "@/components/project-tile";

export default function Projects() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectTile 
            title="Latarnik wyborczy" 
            projId="1"
        />
        <ProjectTile 
            title="Blender" 
            projId="2"
        />
      </section>
    );
  }