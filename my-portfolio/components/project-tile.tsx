import Image from "next/image";
import Link from "next/link";

// interface ProjectInstance {
//     title: string;
//     projId: string;
// }

export function ProjectTile({ title, projId }: { title: string, projId: string }) {
    return (
        <div className="w-full aspect-[1.618/1] flex justify-center items-center relative group">
            <Link href={`/projects/${projId}`} passHref>
                <div className="absolute inset-0">
                    <Image 
                        src={`/images/${projId}-proj-hero.png`} 
                        alt={`Image for ${title}`} 
                        layout="fill"
                        objectFit="cover" 
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute inset-0 opacity-0 backdrop-blur group-hover:opacity-100 transition-opacity duration-300 "></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-3xl">{title}</h3>
                    <p> - view - </p>
                </div>
            </Link>
        </div>
    );
  }