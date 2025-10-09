"use client";

import { AnimatedServices } from "@/components/animated-services";
import Clients from "@/components/Clients";
import { useLanguage } from "@/components/LanguageContext";
import LoadingSpinner from "@/components/Loading";
import { useProject } from "@/components/ProjectContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Project = () => {
  const { project, setProject } = useProject();
  const [loading, setLoading] = useState((!project.icon || !project.url));
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!project.icon || !project.url) {
      const savedProject = localStorage.getItem('project');
      if (savedProject) {
        setProject(JSON.parse(savedProject));
      }
      setTimeout(() => { setLoading(false); }, 500);
    }
  }, [project.icon, project.url, setProject]);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (!project || !project.icon || !project.url) {
    router.push('/projects');
    return null;
  }

  const translations = {
    keys: language === 'EN' ? 'Key Technologies & Skills' : 'Habilidades y herramientas tecnologicas',
    description: language === 'EN' ? 'Project Description' : 'Descripción del Proyecto',
  }

  return (
    <div className="w-full m-10 flex flex-col gap-4">
      <div className="bg-[#1d1d1d] p-2 flex justify-center">
        {project.title}
      </div>
      <div className="flex justify-center mt-5 space-evenly w-full">
        <div className="bg-[#1d1d1d] p-2 flex justify-center w-[40%]">
          short description
        </div>
        <Link href={project.url} target="_blank" className="bg-[#1d1d1d] p-2 flex justify-center cursor-pointer">
          <Image src={project.icon} alt='' width={100} height={100}
          style={{
            width: '100%',
            height: '60%',
            objectFit: 'cover',
          }}/>
        </Link>
      </div>
      <div className="flex w-full justify-evenly">
        <div className="bg-[#1d1d1d] p-2 flex flex-col justify-center mt-5">
          <div>
            {translations.keys}
          </div>
          <div>

          </div>
        </div>
        <div className="bg-[#1d1d1d] p-2 flex flex-col justify-center mt-5">
          <div>
            {translations.description}
          </div>
          <div>

          </div>
        </div>
      </div>
      {AnimatedServices(
        { services: [
          {
            name: 'text.name1', 
            description: 'text.description1',
            subtitle: 'text.subtitle1',
            src: "/images/solutions/AI-solutions.jpg"
          },
          {
            name: 'text.name2', 
            description: 'text.description2',
            subtitle: 'text.subtitle2',
            src: "/images/solutions/Coding.jpeg"
          },
          {
            name: 'text.name3', 
            description: 'text.description3',
            subtitle: 'text.subtitle3',
            src: "/images/solutions/documents.jpg"
          }
        ]})}
    </div>
  )
}

export default Project;