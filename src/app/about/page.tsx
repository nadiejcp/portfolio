"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import SmallLink from "@/components/SmallLink";
import { useEffect } from "react";

const component = (title:string, components: string[]) => {
  return (
    <div className="border-1 border-white rounded-xl p-5 w-[100%]">
      <div className="font-bold text-white">
        {title}
      </div>
      <ul className="text-gray-800 text-lg leading-relaxed pl-3 pt-3 flex flex-col list-disc">
        {components.map((comm) => { return <li className="text-gray-400" key={comm}>{comm}</li> })}
      </ul>
    </div>
  );
}

export default function About() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang);
    }
  }, [setLanguage]);

  const translations = {
    nation: language === 'EN' ? 'Ecuadorian' : 'Ecuatoriano',
    p1: language === 'EN' ? `A results-driven full-stack developer with 5+ years of experience specializing in building and deploying end-to-end web solutions. I leverage modern technologies like Next.js for seamless frontends and Python/Flask for powerful backends, with a strong focus on responsive design, secure payment integrations (Stripe), and cloud deployment (AWS).`
    : `Desarrollador full-stack orientado a resultados con más de 5 años de experiencia, especializado en la creación e implementación de soluciones web integrales. Utilizo tecnologías modernas como Next.js para frontends integrados y Python/Flask para backends potentes, con un enfoque especial en diseño responsivo, integraciones de pago seguras (Stripe) e implementación en la nube (AWS).`,
    p2: language === 'EN' ? `My passion lies in creating digital tools that solve real-world problems, from enhancing a company's online presence to developing efficient, database-driven systems for specialized industries. I am committed to writing efficient code and delivering projects that are not only functional but also provide a superior user experience.`
    : `Mi pasión reside en crear herramientas digitales que resuelvan problemas del mundo real, desde mejorar la presencia online de una empresa hasta desarrollar sistemas eficientes basados ​​en bases de datos para industrias especializadas. Me comprometo a escribir código eficiente y a entregar proyectos que no solo sean funcionales, sino que también ofrezcan una experiencia de usuario superior.`,
    skill1: language === 'EN' ? 'Deep Learning' : 'Aprendizaje profundo',
    skill4: language === 'EN' ? 'Databases' : 'Bases de datos',
    skill5: language === 'EN' ? 'Data Science' : 'Ciencia de datos',
    skill6: language === 'EN' ? 'Web Development' : 'Desarrollo Web',
    skill7: language === 'EN' ? 'Data Visualization' : 'Visualización de datos',
    skill8: language === 'EN' ? 'Process Automation' : 'Automatización de procesos',
    skill9: language === 'EN' ? 'Machine Learning' : 'Machine learning',
    skill10: language === 'EN' ? 'Big Data' : 'Big Data',
    skill11: language === 'EN' ? 'Problem Solving' : 'Resolución de problemas',
    skill12: language === 'EN' ? 'Critical Thinking' : 'Pensamiento crítico',
    skill13: language === 'EN' ? 'Effective Communication' : 'Comunicación eficiente',
    skill14: language === 'EN' ? 'Teamwork' : 'Trabajo en equipo',
    skill15: language === 'EN' ? 'Adaptability' : 'Adaptabilidad',
    skill16: language === 'EN' ? 'Time Management' : 'Gestión de tiempo',
    skill17: language === 'EN' ? 'Empathy' : 'Empatía',
    skills: language === 'EN' ? 'Skills' : 'Habilidades',
    softSkills: language === 'EN' ? 'Soft Skills' : 'Habilidades blandas',
    //'Passionate about crafting efficient, user-centric applications that drive business growth and enhance user experiences. Adept at collaborating with cross-functional teams to deliver high-quality software solutions on time and within budget.'
  }

  const frontEnd = ['NextJS', 'React', 'Angular', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'Jinja2'];
  const backEnd = ['Python', 'Java', 'JavaScript', 'Flask', 'NodeJS', 'ExpressJS'];
  const databases = ['MySQL', 'PostgreSQL', 'SQLite'];
  const others = ['AWS', 'Docker', 'Git', 'GitHub', 'GitLab CI/CD', 'AI Agents'];

  return (
    <div className="w-full m-10 flex flex-col gap-10">
      <SlideDown amount={0.1}>
        <div className="flex bg-[#1d1d1d] rounded-xl flex flex-col w-full justify-center items-center gap-5 pt-5 pb-5">
          <div>
            <div className="text-bold text-3xl">Jairo Cabrera Pino - {translations.nation}</div>
          </div>
          <div className="flex flex-col gap-3 max-w-4xl text-justify">
            <div>{translations.p1}</div>
            <div>{translations.p2}</div>
          </div>
        </div>
      </SlideDown>
      <SlideUp amount={0.5}>
        <BigSquare blur={false} title={''} subtitle={''} width="100%">
            {component("FrontEnd", frontEnd)}
            {component("Backend", backEnd)}
            {component(translations.skill4, databases)}
            {component("Other", others)}
        </BigSquare>
      </SlideUp>
      <SlideUp amount={0.5}>
        <div className="flex justify-center gap-x-10">
          <BigSquare blur={false}  title={translations.skills} subtitle={''} width="50%">
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill1}/>
                <SmallLink title={translations.skill4}/>
                <SmallLink title={translations.skill5}/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill8}/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill6}/>
                <SmallLink title={translations.skill7}/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill9}/>
                <SmallLink title={translations.skill10}/>
              </div>
            </div>
          </BigSquare>
          <BigSquare blur={false} title={translations.softSkills} subtitle={''} width="50%">
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill11} icon="/portfolio/icons/Icons01.svg"/>
                <SmallLink title={translations.skill12} icon="/portfolio/icons/Icons06.svg"/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill15} icon="/portfolio/icons/Icons03.svg"/>
                <SmallLink title={translations.skill14} icon="/portfolio/icons/Icons04.svg"/>
                <SmallLink title={translations.skill17} icon="/portfolio/icons/Icons07.svg"/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={translations.skill13} icon="/portfolio/icons/Icons05.svg"/>
                <SmallLink title={translations.skill16} icon="/portfolio/icons/Icons02.svg"/>
              </div>
            </div>
          </BigSquare>
        </div>
      </SlideUp>
    </div>
  );
}
