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
import BigSquare from "@/components/BigSquare";

type Testimonial = {
  name: string;
  comment: string[];
};

const TwoChildren = ({ title, children }: {title: string, children: React.ReactNode }) => {
  return (
    <div className="bg-brand-dark/60 backdrop-blur-xl border border-white/10 flex flex-col w-[90%] lg:w-[45%] rounded-3xl p-6 lg:p-8 shadow-2xl justify-start">
      <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple mb-4">
        {title}
      </div>
      <div className="text-gray-300 text-lg leading-relaxed">
        {children}
      </div>
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
      setLanguage(lang as 'ES' | 'EN');
    }
  }, [setLanguage]);

  const translations = {
    keys: language === 'EN' ? 'Key Technologies & Skills' : 'Habilidades y herramientas tecnológicas',
    description: language === 'EN' ? 'Project Description' : 'Descripción del Proyecto',
    short: language === 'EN' ? 'Short Description' : 'Descripción Corta',
    click: language === 'EN' ? 'Click me to visit' : 'Haz click para visitar',
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
      if (!project.techStackTitles) return;
      const testimonialsArray: Testimonial[] = (language === 'EN' ? project.techStackTitles : project.techStackTitlesES).map(
        (title, index) => {
          return {
            name: title,
            comment: (language === 'EN'
              ? project.techStackDetails[index]?.split(',')
              : project.techStackDetailsES[index]?.split(',')
            ) || [],
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
    <div className="w-full p-4 lg:p-10 flex flex-col gap-10 overflow-x-hidden">
      <SlideUp amount={0.1}>
        <div className="bg-brand-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 flex justify-center items-center shadow-2xl">
          <h1 className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple text-center">
            {project.title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-8 gap-8 w-full items-center lg:items-stretch">
          <Link href={project.url} target="_blank" className="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/20 rounded-3xl bg-brand-dark/60 backdrop-blur-xl border border-white/10 hover:border-brand-cyan/40 w-[90%] lg:w-[45%] p-6 lg:p-8 flex flex-col justify-center items-center gap-6 group">
            <div className="font-semibold text-xl text-gray-300 group-hover:text-brand-cyan transition-colors">{translations.click}</div>
            <div className="relative w-full aspect-video flex items-center justify-center">
              <Image 
                src={`/portfolio/projects/${project.name}.png`} 
                alt={project.title} 
                fill
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
          <TwoChildren title={translations.short}>
            <p>
              {project.shortDescription?.split('--')[language === 'EN' ? 0 : 1]}
            </p>
          </TwoChildren>
        </div>
      </SlideUp>
      
      {project.screens && project.screens.length > 0 && (
        <SlideUp amount={0.3}>
          <div className="mt-4">
            <AnimatedServices services={project.screens} autoplay={true} name={project.name} />
          </div>
        </SlideUp>
      )}
      
      {testimonials.length > 0 && (
        <SlideUp amount={0.4}>
          <div className="mb-20 mt-4">
            <Clients testimonials={testimonials} title={translations.keys} />
          </div>
        </SlideUp>
      )}
    </div>
  );
};

export default Project;