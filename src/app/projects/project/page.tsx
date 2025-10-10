"use client";

import { AnimatedServices } from "@/components/AnimatedServices";
import Clients from "@/components/Clients";
import { useLanguage } from "@/components/LanguageContext";
import LoadingSpinner from "@/components/Loading";
import { useProject } from "@/components/ProjectContext";
import SlideUp from "@/components/SlideUp";
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

type Testimonial = {
  name: string;
  comment: string[];
};

const TwoChildren = ({ title, children }: {title: string, children: React.ReactNode }) => {
  return (
    <div className="bg-[#1d1d1d] p-2 flex flex-col mt-5 w-[40%] rounded-2xl p-5 justify-between pt-8 pb-8">
      <div className="font-bold">
        {title}
      </div>
      {children}
    </div>
  );
}

const Project = () => {
  const { project, setProject } = useProject();
  const [projectScreens, setProjectScreens] = useState<Service[]>([]);
  const [projectInfo, setProjectInfo] = useState<string[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang);
    }
  }, [setLanguage]);

  const translations = {
    keys: language === 'EN' ? 'Key Technologies & Skills' : 'Habilidades y herramientas tecnológicas',
    description: language === 'EN' ? 'Project Description' : 'Descripción del Proyecto',
    short: language === 'EN' ? 'Short Description' : 'Descripción Corta',
    click: language === 'EN' ? 'Click me' : 'Haz click aquí',
  };

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
            const [name, subtitle, description, src] = line.split('%').map((item) => item.trim());
            return {
              name: name ? (language === 'EN' ? name.split('--')[0] : name.split('--')[1]) : '',
              description: description ? (language === 'EN' ? description.split('--')[0] : description.split('--')[1]) : '',
              subtitle: subtitle ? (language === 'EN' ? subtitle.split('--')[0] : subtitle.split('--')[1]) : '',
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
        const titles = projectsArray.length > 1 ? (language === 'EN' ? projectsArray[1].split('%')[0] : projectsArray[1].split('%')[1]).split(',').filter((info) => { return info.trim(); }).map((info) => { return info.trim(); }) : [];
        const comments = projectsArray.length > 2 ? (language === 'EN' ? projectsArray[2].split('%%')[0].split('%') : projectsArray[2].split('%%')[1].split('%')) : [];
        const testimonialsArray = titles.map((title, index) => {
          return {
            name: title,
            comment: comments[index].split(',').map((info) => { return info.trim(); }) || []
          };
        });
        setTestimonials(testimonialsArray);
        setProjectInfo(projectsArray);
      } catch (error) {
        console.error('Error fetching project info:', error);
        setProjectInfo([]);
      }
      setIsLoading(false);
    }

    getProjectInfo();
  }, [language, project, project.name, project.url, setProject]);

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

  return (
    <div className="w-[100%] m-10 flex flex-col gap-4">
      <SlideUp>
        <div className="bg-[#1d1d1d] p-2 flex justify-center text-4xl rounded-2xl font-bold">
          {project.title}
        </div>
        <div className="flex justify-center mt-5 justify-evenly w-full">
          <Link href={project.url} target="_blank" className="transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:bg-[#222] rounded-2xl bg-[#1d1d1d] w-[40%] p-2 flex justify-center cursor-pointer flex-col items-center gap-5">
            <div>{translations.click}</div>
            <Image 
              src={`/projects/${project.name}.png`} 
              alt='' 
              width={100} 
              height={100}
              style={{
                width: '80%',
                height: '60%',
                objectFit: 'contain',
              }}
            />
          </Link>
          <TwoChildren title={translations.short}>
            <div>
              {projectInfo.length && language === 'EN' ? projectInfo[0].split('%')[0] : projectInfo[0].split('%')[1]}
            </div>
          </TwoChildren>
        </div>
      </SlideUp>
      <AnimatedServices services={projectScreens} autoplay={true} />
      <Clients testimonials={testimonials} title={translations.keys} />
    </div>
  );
};

export default Project;