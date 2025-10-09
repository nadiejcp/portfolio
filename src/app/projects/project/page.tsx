"use client";

import { AnimatedServices } from "@/components/animated-services";
import { useLanguage } from "@/components/LanguageContext";
import LoadingSpinner from "@/components/Loading";
import { useProject } from "@/components/ProjectContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Service = {
  description: string;
  name: string;
  subtitle: string;
  src: string;
};

const Project = () => {
  const { project, setProject } = useProject();
  const [projectScreens, setProjectScreens] = useState<Service[]>([]);
  const [projectInfo, setProjectInfo] = useState<string[]>([]);
  const { language } = useLanguage();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!project.name || !project.url) {
      const savedProject = localStorage.getItem('project');
      if (savedProject) {
        setProject(JSON.parse(savedProject));
      } else {
        setIsLoading(false);
        setShouldRedirect(true);
        return;
      }
    }

    async function getProjectInfo() {
      if (!project.name) return;
      try {
        const response = await fetch(`/projects/additional/${project.name}-screens.txt`);
        const text = await response.text();
        const projectsArray = text
          .split('\n')
          .filter((line) => line.trim())
          .map((line) => {
            const [name, description, subtitle, src] = line.split('%').map((item) => item.trim());
            return {
              name: name || '',
              description: description || '',
              subtitle: subtitle || '',
              src: src ? `/projects/${project.name}/${project.name}${src}` : ''
            };
          });
        setProjectScreens(projectsArray);
      } catch (error) {
        console.error('Error fetching project screens:', error);
        setProjectScreens([]);
      }
      try {
        const response = await fetch(`/projects/additional/${project.name}-general.txt`);
        const text = await response.text();
        const projectsArray = text
          .split('\n')
          .filter((line) => line.trim());
        console.log('asdasd', projectsArray)
        setProjectInfo(projectsArray);
      } catch (error) {
        console.error('Error fetching project info:', error);
        setProjectInfo([]);
      }
      setIsLoading(false);
    }

    getProjectInfo();
  }, [project, project.name, project.url, setProject]);

  // Handle redirect in a separate useEffect
  useEffect(() => {
    if (shouldRedirect) {
      router.push('/projects');
    }
  }, [shouldRedirect, router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (shouldRedirect) {
    return <></>;
  }

  const translations = {
    keys: language === 'EN' ? 'Key Technologies & Skills' : 'Habilidades y herramientas tecnologicas',
    description: language === 'EN' ? 'Project Description' : 'Descripción del Proyecto',
  };

  return (
    <div className="w-full m-10 flex flex-col gap-4">
      <div className="bg-[#1d1d1d] p-2 flex justify-center">
        {project.title}
      </div>
      <div className="flex justify-center mt-5 space-evenly w-full">
        <div className="bg-[#1d1d1d] p-2 flex justify-center w-[40%]">
          {projectInfo.length && projectInfo[0]}
        </div>
        <Link href={project.url} target="_blank" className="bg-[#1d1d1d] p-2 flex justify-center cursor-pointer">
          <Image 
            src={`/projects/${project.name}.png`} 
            alt='' 
            width={100} 
            height={100}
            style={{
              width: '100%',
              height: '60%',
              objectFit: 'cover',
            }}
          />
        </Link>
      </div>
      <div className="flex w-full justify-evenly">
        <div className="bg-[#1d1d1d] p-2 flex flex-col justify-center mt-5">
          <div>
            {translations.keys}
          </div>
          <div>
            {projectInfo.length > 1 && projectInfo[1].split(',').filter((info) => { return info.trim(); }).map((info) => {
              return <div key={info}>{info}</div>
            })}
          </div>
        </div>
        <div className="bg-[#1d1d1d] p-2 flex flex-col justify-center mt-5">
          <div>
            {translations.description}
          </div>
          <div>
            {projectInfo.length > 2 && <div key={projectInfo[2]}>{projectInfo[2]}</div>}
          </div>
        </div>
      </div>
      <AnimatedServices services={projectScreens} autoplay={true} />
    </div>
  );
};

export default Project;