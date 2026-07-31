"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import { useEffect } from "react";

export default function Experience() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang);
    }
  }, [setLanguage]);

  const translations = {
    title: language === 'EN' ? 'Experience & Education' : 'Experiencia y Educación',
    eduTitle: language === 'EN' ? 'Education' : 'Educación',
    expTitle: language === 'EN' ? 'Work Experience' : 'Experiencia Laboral',
    certTitle: language === 'EN' ? 'Certifications & Training' : 'Certificaciones y Capacitación',
    leadTitle: language === 'EN' ? 'Leadership' : 'Liderazgo',
  };

  const education = [
    {
      degree: language === 'EN' ? "Master's Degree in Data Science" : "Maestría en Ciencia de Datos",
      university: "Universidad San Francisco de Quito (USFQ) – Quito, Ecuador",
      dates: language === 'EN' ? "January 2026 - In Progress" : "Enero 2026 - En Curso",
    },
    {
      degree: language === 'EN' ? "Bachelor of Science / Engineer in Water Sciences" : "Ingeniería en Ciencias del Agua",
      university: "Universidad Regional Amazónica Ikiam – Tena, Ecuador",
      dates: language === 'EN' ? "Graduated: March 2022" : "Graduado: Marzo 2022",
    }
  ];

  const experience = [
    {
      company: "EcuaCode Forge SAS",
      roles: language === 'EN' ? "Lead Software Engineer | AI & ML Engineer" : "Ingeniero Principal de Software | Ingeniero IA y ML",
      dates: language === 'EN' ? "April 2025 – Present" : "Abril 2025 – Presente",
      description: language === 'EN' ? "Leading enterprise software solutions, AI systems, and microservices architecture." : "Liderando soluciones de software empresarial, sistemas de IA y arquitectura de microservicios."
    },
    {
      company: "Instituto Nacional de Meteorología e Hidrología (INAMHI)",
      roles: language === 'EN' ? "Data Scientist | Machine Learning Engineer" : "Científico de Datos | Ingeniero de Machine Learning",
      dates: "2022 - 2024",
      description: language === 'EN' ? "Developed ML methodologies for climate data and hydrological simulations." : "Desarrollé metodologías ML para datos climáticos y simulaciones hidrológicas."
    },
    {
      company: "Ministerio de Agricultura y Ganadería (MAG)",
      roles: language === 'EN' ? "Machine Learning Engineer | Software Developer" : "Ingeniero Machine Learning | Desarrollador de Software",
      dates: language === 'EN' ? "February 2024 – April 2024" : "Febrero 2024 - Abril 2024",
      description: language === 'EN' ? "Developed GIS pipelines, QGIS plugins, and PostgreSQL spatial databases." : "Desarrollé pipelines GIS, plugins QGIS y bases de datos espaciales PostgreSQL."
    },
    {
      company: "Quito Cómo Vamos",
      roles: language === 'EN' ? "Data Analyst" : "Analista de Datos",
      dates: "2023",
      description: language === 'EN' ? "Analyzed urban data and developed interactive dashboards for public policy evaluation." : "Analicé datos urbanos y desarrollé dashboards interactivos para la evaluación de políticas públicas."
    },
    {
      company: "PLUS Notary & Services",
      roles: language === 'EN' ? "Full-Stack Developer" : "Desarrollador Full-Stack",
      dates: "2023 - 2024",
      description: language === 'EN' ? "Developed full-stack verification systems and web platforms with Next.js and Flask." : "Desarrollé sistemas integrales de verificación y plataformas web con Next.js y Flask."
    },
    {
      company: "Universidad del Azuay",
      roles: language === 'EN' ? "Research Assistant" : "Asistente de Investigación",
      dates: "2022 - 2023",
      description: language === 'EN' ? "Contributed to data processing and applied ML algorithms in academic research." : "Contribuí al procesamiento de datos y aplicación de algoritmos ML en investigación académica."
    },
    {
      company: "Hydrologist Consultor",
      roles: language === 'EN' ? "Independent Consultant" : "Consultor Independiente",
      dates: "2022 - 2024",
      description: language === 'EN' ? "Conducted hydrological assessments and implemented simulation models." : "Realicé evaluaciones hidrológicas e implementé modelos de simulación."
    },
    {
      company: "EPMAPASC",
      roles: language === 'EN' ? "Water Resources Analyst" : "Analista de Recursos Hídricos",
      dates: "2022",
      description: language === 'EN' ? "Developed Java-based simulation software and optimized GIS networks." : "Desarrollé software de simulación basado en Java y optimicé redes GIS."
    },
  ];

  const certifications = [
    {
      title: language === 'EN' ? "Agentic AI Systems & LLM Architecture" : "Sistemas de IA Agéntica & Arquitectura LLM",
      focus: language === 'EN' ? "Context management, workflow orchestration, prompt optimization." : "Manejo de contexto, orquestación de flujos, optimización de prompts."
    },
    {
      title: language === 'EN' ? "Sequences, Time Series and Prediction" : "Secuencias, Series Temporales y Predicción",
      focus: language === 'EN' ? "Applied RNN and LSTM architectures for temporal forecasting." : "Arquitecturas RNN y LSTM aplicadas a pronósticos temporales."
    },
    {
      title: language === 'EN' ? "CS50's Introduction to Databases with SQL" : "Introducción a Bases de Datos con SQL (CS50)",
      focus: language === 'EN' ? "Harvard/edX - Relational database schema design and optimization." : "Harvard/edX - Diseño y optimización de esquemas relacionales."
    },
    {
      title: language === 'EN' ? "Computer Vision with Embedded ML" : "Visión por Computadora con ML Embebido",
      focus: language === 'EN' ? "Real-time object detection using YOLO models on Raspberry Pi." : "Detección de objetos en tiempo real usando YOLO en Raspberry Pi."
    }
  ];

  const leadership = [
    {
      role: language === 'EN' ? "Engineering & Architecture Ownership" : "Liderazgo en Ingeniería y Arquitectura",
      company: "EcuaCode Forge SAS",
      description: language === 'EN' ? "Led architectural design for production platforms, managed database schemas, enforced code review standards, and mentored junior developers." : "Lideré el diseño arquitectónico de plataformas de producción, apliqué estándares de revisión de código y orienté a desarrolladores junior."
    },
    {
      role: language === 'EN' ? "Cross-Departmental Stakeholder Bridging" : "Gestión Interdepartamental",
      company: "MAG, INAMHI, Quito Cómo Vamos",
      description: language === 'EN' ? "Translated complex analytical models into operational dashboards for non-technical executives." : "Traduje modelos analíticos complejos en paneles operativos para ejecutivos no técnicos."
    }
  ];

  return (
    <div className="w-full p-4 lg:p-10 flex flex-col gap-10 overflow-y-auto lg:pr-5 h-screen pb-20">
      <SlideDown amount={0.1}>
        <div className="bg-brand-dark/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 flex flex-col justify-center items-center shadow-2xl">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
            {translations.title}
          </h1>
        </div>
      </SlideDown>

      <SlideUp amount={0.3}>
        <BigSquare blur={false} title={translations.expTitle} subtitle="" width="w-full">
          <div className="flex flex-col w-full gap-5">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-black/20 p-5 rounded-xl border border-white/5 hover:border-brand-cyan/30 hover:bg-black/40 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center group">
                <div className="flex flex-col gap-1 w-full sm:w-3/4">
                  <h3 className="text-xl font-bold text-gray-200 group-hover:text-brand-cyan transition-colors">{exp.roles}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 max-w-2xl text-sm mt-1">{exp.description}</p>
                </div>
                <div className="mt-4 sm:mt-0 whitespace-nowrap">
                  <span className="bg-brand-dark/80 px-3 py-1 rounded-full text-sm text-brand-cyan border border-brand-cyan/20">
                    {exp.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BigSquare>
      </SlideUp>

      <div className="flex flex-col xl:flex-row gap-10 w-full">
        <div className="w-full xl:w-1/2">
          <SlideUp amount={0.4}>
            <BigSquare blur={false} title={translations.eduTitle} subtitle="" width="w-full">
              <div className="flex flex-col w-full gap-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-black/20 p-5 rounded-xl border border-white/5 hover:border-brand-cyan/30 hover:bg-black/40 transition-colors group">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-brand-cyan transition-colors">{edu.degree}</h3>
                    <p className="text-gray-300 mt-1">{edu.university}</p>
                    <p className="text-sm text-brand-cyan/70 mt-2">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </BigSquare>
          </SlideUp>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-10">
          <SlideUp amount={0.4}>
            <BigSquare blur={false} title={translations.certTitle} subtitle="" width="w-full">
              <div className="flex flex-col w-full gap-5">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-black/20 p-5 rounded-xl border border-white/5 hover:border-brand-cyan/30 hover:bg-black/40 transition-colors group">
                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-brand-cyan transition-colors">{cert.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{cert.focus}</p>
                  </div>
                ))}
              </div>
            </BigSquare>
          </SlideUp>

          <SlideUp amount={0.5}>
            <BigSquare blur={false} title={translations.leadTitle} subtitle="" width="w-full">
              <div className="flex flex-col w-full gap-5">
                {leadership.map((lead, idx) => (
                  <div key={idx} className="bg-black/20 p-5 rounded-xl border border-white/5 hover:border-brand-cyan/30 hover:bg-black/40 transition-colors group">
                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-brand-cyan transition-colors">{lead.role}</h3>
                    <p className="text-brand-purple text-sm mt-1">{lead.company}</p>
                    <p className="text-sm text-gray-400 mt-2">{lead.description}</p>
                  </div>
                ))}
              </div>
            </BigSquare>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
