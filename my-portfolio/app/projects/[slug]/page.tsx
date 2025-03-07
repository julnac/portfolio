'use client'
import Image from "next/image";
import projects from "../../content/data";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";
import Link from "next/link";
import {FiExternalLink} from "react-icons/fi";
import { use } from 'react';

const ProjectPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params);
    const index = projects.findIndex((proj) => proj.slug === resolvedParams.slug);

    if (index === -1) return <div>Project not found</div>;

    const project = projects[index];
    const nextSlug = projects[index + 1]?.slug || null;
    const prevSlug = projects[index + 1]?.slug || null;

    return (
      <section className="grid gap-10 grid-col-1 md:grid-cols-[1fr_4fr_1fr]">
        <div className="md:col-start-1">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="w-full flex justify-end">
            <Link 
              href={project.link}
              className="flex gap-3 justify-center items-center"
            >
              LINK
              <FiExternalLink/>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center md:col-start-2">
          {project.images.map((img, index) => (
            <Image
              src={project.images[index]}
              alt={project.title}
              width={800}
              height={400}
              key={index}
            />
          ))}
        </div>
        <div className="md:col-start-3">
          <div className="fixed inline-0 flex justify-end gap-1 ">
              {prevSlug && (
                  <Link
                      href={`/projects/${prevSlug}`}
                      className="nav-button"
                  >
                      <MdNavigateBefore />
                  </Link>
              )}
              {nextSlug && (
                  <Link
                      href={`/projects/${nextSlug}`}
                      className="nav-button"
                  >
                      <MdNavigateNext />
                  </Link>
              )}
          </div>
        </div>
      </section>
    );
};



export default ProjectPage;