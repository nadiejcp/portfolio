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

    function fetchTestimonials() {
      const testimonialsArray: Testimonial[] = (language === 'EN' ? project.techStackTitles : project.techStackTitlesES).map(
        (title, index) => {
          return {
            name: title,
            comment: (language === 'EN'
              ? project.techStackDetails[index].split(',')
              : project.techStackDetailsES[index].split(',')
            ),
          };
        }
      );
      setTestimonials(testimonialsArray);
      setIsLoading(false);
    };
    fetchTestimonials();
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
              src={`./${project.name}.png`} 
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
              {project.shortDescription.split('--')[language === 'EN' ? 0 : 1]}
            </div>
          </TwoChildren>
        </div>
      </SlideUp>
      <AnimatedServices services={project.screens} autoplay={true} name={project.name} />
      <Clients testimonials={testimonials} title={translations.keys} />
    </div>
  );
};

export default Project;