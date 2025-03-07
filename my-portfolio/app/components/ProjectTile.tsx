import Image from "next/image";
import Link from "next/link";

interface ProjectInstance {
    slug: string,
    title: string;
    description: string;
    link: string;
    images: string[];
}

export function ProjectTile({ project }: { project: ProjectInstance }) {
    return (
        <div className="w-full aspect-[1.618/1] flex justify-center items-center relative group">
            <Link href={`/projects/${project.slug}`}>
                <div className="absolute inset-0">
                    <Image 
                        src={project.images[0]}
                        alt={`Image for ${project.title}`} 
                        layout="fill"
                        objectFit="cover" 
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute inset-0 opacity-0 backdrop-blur group-hover:opacity-100 transition-opacity duration-300 "></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h1 className="text-3xl">{project.title}</h1>
                </div>
            </Link>
        </div>
    );
  }