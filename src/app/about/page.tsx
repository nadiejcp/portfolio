"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import SmallLink from "@/components/SmallLink";
import { useEffect } from "react";

const component = (title:string, components: string[]) => {
  return (
    <div className="bg-black/20 border border-white/5 hover:border-brand-cyan/30 hover:bg-black/40 transition-colors rounded-xl p-5 w-full sm:w-[45%] lg:w-[18%] grow">
      <div className="font-bold text-gray-200">
        {title}
      </div>
      <ul className="text-gray-400 text-sm leading-relaxed pl-5 pt-3 flex flex-col list-disc gap-1">
        {components.map((comm) => { return <li className="hover:text-brand-cyan transition-colors" key={comm}>{comm}</li> })}
      </ul>
    </div>
  );
}

export default function About() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang as 'ES' | 'EN');
    }
  }, [setLanguage]);

  const translations = {
    nation: language === 'EN' ? 'Ecuadorian' : 'Ecuatoriano',
    p1: language === 'EN' ? `A results-driven full-stack developer with 5+ years of experience specializing in building and deploying end-to-end web solutions. I leverage modern technologies like Next.js for seamless frontends and Python/Flask for powerful backends, with a strong focus on responsive design, secure payment integrations (Stripe), and cloud deployment (AWS).`
    : `Desarrollador full-stack orientado a resultados con más de 5 años de experiencia, especializado en la creación e implementación de soluciones web integrales. Utilizo tecnologías modernas como Next.js para frontends integrados y Python/Flask para backends potentes, con un enfoque especial en diseño responsivo, integraciones de pago seguras (Stripe) e implementación en la nube (AWS).`,
    p2: language === 'EN' ? `My passion lies in creating digital tools that solve real-world problems, from enhancing a company's online presence to developing efficient, database-driven systems for specialized industries. I am committed to writing efficient code and delivering projects that are not only functional but also provide a superior user experience.`
    : `Mi pasión reside en crear herramientas digitales que resuelvan problemas del mundo real, desde mejorar la presencia online de una empresa hasta desarrollar sistemas eficientes basados en bases de datos para industrias especializadas. Me comprometo a escribir código eficiente y a entregar proyectos que no solo sean funcionales, sino que también ofrezcan una experiencia de usuario superior.`,
    p3: language === 'EN' ? `I deeply specialize in advanced Artificial Intelligence solutions, particularly Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) architectures, and Agentic AI workflows. I actively build robust data pipelines and highly scalable APIs using FastAPI to bring Machine Learning models and AI capabilities directly into high-stakes production environments.`
    : `Me especializo profundamente en soluciones avanzadas de Inteligencia Artificial, particularmente en Modelos de Lenguaje Grandes (LLMs), arquitecturas de Generación Aumentada por Recuperación (RAG) y flujos de trabajo de IA Agéntica. Construyo activamente pipelines de datos robustos y APIs altamente escalables usando FastAPI para llevar modelos de Machine Learning y capacidades de IA directamente a entornos de producción de alto nivel.`,
    
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
    aiMlTitle: language === 'EN' ? 'AI & Machine Learning' : 'IA y Machine Learning',
  }

  const frontEnd = ['Next.js', 'React', 'Angular', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'];
  const backEnd = ['Python', 'FastAPI', 'Node.js', 'Java', 'Flask', 'Express.js'];
  const aiML = ['LLMs', 'RAG Architecture', 'Machine Learning', 'Computer Vision', 'Agentic AI', 'Data Science'];
  const databases = ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'MongoDB'];
  const others = ['AWS', 'Docker', 'Git / GitHub', 'GitLab CI/CD', 'RESTful APIs', 'Linux'];

  return (
    <div className="w-full p-4 lg:p-10 flex flex-col gap-10 pb-20 overflow-x-hidden">
      <SlideDown amount={0.1}>
        <div className="flex bg-brand-dark/60 backdrop-blur-xl border border-white/10 rounded-xl flex-col w-full justify-center items-center gap-5 pt-8 pb-10 shadow-2xl transition-all duration-500">
          <div>
            <div className="font-bold text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple text-center px-4">Jairo Cabrera Pino - {translations.nation}</div>
          </div>
          <div className="flex flex-col gap-5 max-w-5xl text-justify text-gray-300 text-[16px] lg:text-lg leading-relaxed px-6 lg:px-10">
            <p>{translations.p1}</p>
            <p>{translations.p2}</p>
            <p className="text-brand-cyan/90 font-medium">{translations.p3}</p>
          </div>
        </div>
      </SlideDown>
      
      <SlideUp amount={0.3}>
        <BigSquare blur={false} title={''} subtitle={''} width="w-full">
            <div className="flex flex-row flex-wrap w-full gap-4 lg:gap-5 justify-center items-stretch px-2 lg:px-0">
              {component("FrontEnd", frontEnd)}
              {component("Backend", backEnd)}
              {component(translations.aiMlTitle, aiML)}
              {component(translations.skill4, databases)}
              {component("Other", others)}
            </div>
        </BigSquare>
      </SlideUp>
      
      <SlideUp amount={0.5}>
        <div className="flex flex-col xl:flex-row justify-center gap-5 lg:gap-10 w-full">
          <BigSquare blur={false}  title={translations.skills} subtitle={''} width="w-full xl:w-1/2">
            <div className="flex flex-col gap-y-4 lg:gap-y-5">
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                <SmallLink title="RAG Architecture"/>
                <SmallLink title="LLMs"/>
                <SmallLink title="FastAPI"/>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                <SmallLink title={translations.skill1}/>
                <SmallLink title={translations.skill9}/>
                <SmallLink title={translations.skill5}/>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                <SmallLink title={translations.skill6}/>
                <SmallLink title={translations.skill8}/>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                <SmallLink title={translations.skill10}/>
                <SmallLink title={translations.skill7}/>
              </div>
            </div>
          </BigSquare>
          <BigSquare blur={false} title={translations.softSkills} subtitle={''} width="w-full xl:w-1/2">
            <div className="flex flex-col gap-y-4 lg:gap-y-5">
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                <SmallLink title={translations.skill11} icon="/portfolio/icons/Icons01.svg"/>
                <SmallLink title={translations.skill12} icon="/portfolio/icons/Icons06.svg"/>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                <SmallLink title={translations.skill15} icon="/portfolio/icons/Icons03.svg"/>
                <SmallLink title={translations.skill14} icon="/portfolio/icons/Icons04.svg"/>
                <SmallLink title={translations.skill17} icon="/portfolio/icons/Icons07.svg"/>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
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
