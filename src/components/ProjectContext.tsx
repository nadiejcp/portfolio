"use client";

import Server from 'next/dist/server/base-server';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Project {
  id: number;
  name: string;
  title: string;
  typo: string;
  url: string;
  shortDescription: string;
  techStackTitles: string[];
  techStackTitlesES: string[];
  techStackDetails: string[];
  techStackDetailesES: string[];
  screens: {
    name: string;
    description: string;
    details: string;
    image: string;
  }[];
}

interface ProjectContextType {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Projects list — mapped from CSV lines provided by the user.
// CSV format: id,slug,name,tag,url
// Mapping assumptions: "name" -> slug, "title" -> display name, "typo" -> tag
export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'plus',
    title: 'Plus Service & Notary',
    typo: 'W1',
    url: 'https://www.plusnotary.net/',
    shortDescription: `A full-stack web application that digitizes the verification of Powers of Attorney. The system generates unique QR codes for each document, which, when scanned, redirect to a secure portal for instant online verification and payment processing via Stripe. Features a Flask backend and an AWS-hosted database.--Una aplicación web integral que digitaliza la verificación de poderes notariales. El sistema genera códigos QR únicos para cada documento, que, al escanearse, redirigen a un portal seguro para la verificación en línea instantánea y el procesamiento de pagos a través de Stripe. Cuenta con un backend Flask y una base de datos alojada en AWS.`,
    techStackTitles: ['Backend & Server', 'Database & Cloud', 'Frontend & Payment', 'DevOps & Deployment'],
    techStackTitlesES: ['Backend & Servidor', 'Base de Datos & Nube', 'Frontend & Pago', 'DevOps & Despliegue'],
    techStackDetails: ['Python, Flask, RESTful API Development, Authentication & Authorization', 'AWS (EC2/RDS), Relational Database (MySQL/SQLite3), Database Design & Management','NextJS, Stripe API Integration, QR Code Generation & Integration', 'Version Control (Git), Web Server Deployment'],
    techStackDetailesES: ['Python, Flask, Desarrollo de RESTful APIs, Autenticación & Autorización', 'AWS (EC2/RDS), Bases de Datos Relacionales (MySQL/SQLite3), Diseño y Manejo de Bases de Datos', 'NextJS, Integración de Stripe API, Generación e Integración de códigos QR', 'Control de versión (Git), Despliegue de servidores Web'],
    screens: [
      {
        name: 'Power of Attorney Portal--Portal de poderes notariales',
        description: 'Streamlined Verification & Administration--Verificación y administración optimizadas',
        details: `It seamlessly integrates live system data, recent verifications, and management tools, offering a frictionless user experience for notary personnel to oversee and control the digital verification ecosystem.--Integra a la perfección datos del sistema en vivo, verificaciones recientes y herramientas de gestión, ofreciendo una experiencia de usuario sin inconvenientes para que el personal notarial supervise y controle el ecosistema de verificación digital.`,
        image: '1.png'
      },
      {
        name: 'Performance Analytics--Análisis de rendimiento',
        description: 'Data-Driven Insights at a Glance--Perspectivas basadas en datos de un vistazo',
        details: `This site provides a clear, visual summary of the notary's key business metrics. It tracks and displays total clients served, average client rating, and the volume of documents created, offering valuable insights into business growth and client satisfaction.--Este sitio ofrece un resumen claro y visual de las métricas clave del negocio del notario. Registra y muestra el total de clientes atendidos, su calificación promedio y el volumen de documentos generados, ofreciendo información valiosa sobre el crecimiento del negocio y la satisfacción del cliente.`,
        image: '2.png'
      },
      {
        name: 'Expertise & Services--Experiencia y servicios',
        description: 'A Full Suite of Notarial Acts--Un conjunto completo de actos notariales',
        details: `A strategically organized display of the six primary service areas. The balanced grid layout communicates professionalism and clarity, effectively guiding clients through the available options and reinforcing the enterprise's capability and specialization.--Una presentación estratégicamente organizada de las seis áreas de servicio principales. El diseño de cuadrícula equilibrada transmite profesionalismo y claridad, guiando eficazmente a los clientes a través de las opciones disponibles y reforzando la capacidad y especialización de la empresa.`,
        image: '3.png'
      },
      {
        name: 'Get In Touch--Contáctanos',
        description: `We're Here to Assist You--Estamos aquí para ayudarle`,
        details: `A streamlined contact page designed for convenience. It features an embedded map for easy location finding and direct-click links to initiate contact via email, phone call, or WhatsApp, ensuring help is just one click away.--Una página de contacto optimizada y práctica. Incluye un mapa integrado para facilitar la localización y enlaces directos para contactar por correo electrónico, llamada telefónica o WhatsApp, lo que garantiza que la ayuda esté a un solo clic.`,
        image: '4.png'
      },
    ]
  },
  {
    id: 2,
    name: 'construction',
    title: 'Darwin Construction Inc',
    typo: 'W',
    url: 'https://www.darwinconstruction.com/',
    shortDescription: `A modern, responsive website for a Canadian construction company, built to showcase their services and establish a strong online presence. The site features a fast, seamless user experience across all devices, from desktops to mobile phones, and was developed using a cutting-edge React framework.--Un sitio web moderno y adaptable para una empresa constructora canadiense, diseñado para mostrar sus servicios y consolidar su presencia en línea. El sitio ofrece una experiencia de usuario rápida y fluida en todos los dispositivos, desde computadoras de escritorio hasta teléfonos móviles, y se desarrolló con un framework React de vanguardia.`,
    techStackTitles: ['Frontend & Framework', 'Core Web Development', 'Performance & Deployment'],
    techStackTitlesES: ['Frontend y Framework', 'Desarrollo Web Avanzado', 'Rendimiento e Implementación'],
    techStackDetails: ['Next.js 15 (App Router),React,Tailwind CSS', 'Responsive Web Design (RWD),Mobile-First Development,Component-Based Architecture', 'Static Site Generation (SSG),Fast Loading & SEO Optimization,Vercel Platform'],
    techStackDetailesES: ['Next.js 15 (App Router),React,Tailwind CSS', 'Diseño web adaptable (RWD),Desarrollo móvil,Arquitectura basada en componentes', 'Generación de sitios estáticos (SSG),Carga rápida y optimización SEO,Plataforma Vercel'],
    screens: [
      {
        name: 'Dynamic Landing Page--Página de destino dinámica',
        description: 'Multiple Ways to Connect--Múltiples formas de conectarse',
        details: `A user-focused contact interface that eliminates friction. Visitors can instantly see our location on the embedded map and choose their preferred method of communication—email, voice call, or WhatsApp message—directly from the page.--Una interfaz de contacto centrada en el usuario que elimina la frjicción. Los visitantes pueden ver nuestra ubicación al instante en el mapa integrado y elegir su método de comunicación preferido (correo electrónico, llamada de voz o mensaje de WhatsApp) directamente desde la página.`,
        image: '1.png'
      },
      {
        name: 'Built to Last--Construido para durar',
        description: 'A Showcase of Quality and Craftsmanship--Una muestra de calidad y artesanía',
        details: `This gallery presents a curated selection of the company's completed construction projects. Each building is featured with key construction details—such as materials used, project scope, and timelines—providing tangible proof of their expertise and the high standard of their work.--Esta galería presenta una selección de los proyectos de construcción completados por la empresa. Cada edificio se presenta con detalles clave de construcción, como los materiales utilizados, el alcance del proyecto y los plazos, lo que demuestra su experiencia y la alta calidad de su trabajo.`,
        image: '2.png'
      },
      {
        name: 'Specialized Systems--Sistemas especializados',
        description: 'Mastery in Every Component--Maestría en cada componente',
        details: `This section delves into the specific building systems the company excels in, such as roof trusses and wall panels. Each component is showcased with detailed imagery and descriptions, highlighting their technical expertise, precision engineering, and the quality of their prefabricated solutions.--Esta sección profundiza en los sistemas de construcción específicos en los que la empresa destaca, como cerchas y paneles de pared. Cada componente se presenta con imágenes y descripciones detalladas, destacando su experiencia técnica, ingeniería de precisión y la calidad de sus soluciones prefabricadas.`,
        image: '3.png'
      },
      {
        name: 'Lead Generation Footer--Generación de clientes potenciales',
        description: 'Your Project Starts Here--Tu proyecto empieza aquí',
        details: `This footer section is designed to remove any final barriers for potential clients. The bold, clear offer of a "Free Consultation" provides a clear and risk-free next step, encouraging them to take action and begin their construction project with expert guidance.--Esta sección de pie de página está diseñada para eliminar cualquier obstáculo para los clientes potenciales. La oferta clara y concisa de una "Consulta Gratuita" ofrece un siguiente paso claro y sin riesgos, animándolos a actuar y comenzar su proyecto de construcción con la guía de expertos.`,
        image: '4.png'
      }
    ]
  },
  {
    id: 3,
    name: 'server',
    title: 'Local Cloud',
    typo: 'W1',
    url: 'https://github.com/nadiejcp/server',
    shortDescription: `AA self-hosted, local network file-sharing server designed to overcome slow internet speeds in a workplace environment. Functioning like an internal Google Drive, it enabled dramatically faster file transfers between colleagues by allowing one user to download a file from the internet once and upload it to the local server for everyone to access internally.--Un servidor local de intercambio de archivos en red, autoalojado, diseñado para superar las bajas velocidades de internet en entornos laborales. Funcionando como un Google Drive interno, permitió transferencias de archivos mucho más rápidas entre colegas, al permitir que un usuario descargara un archivo de internet una sola vez y lo subiera al servidor local para que todos pudieran acceder a él internamente.`,
    techStackTitles: ['Backend & Server','Frontend & Interface','Core Functionality','Problem-Solving'],
    techStackTitlesES: ['Backend & Servidor','Frontend & Interfaz','Funcionalidad principal','Solución de Problemas'],
    techStackDetails: ['Node.js,Express.js,RESTful API Development,Local Network Configuration','HTML - CSS - JavaScript,Responsive UI Design,File Upload/Download Handling','Internal File Hosting & Sharing,Network Speed Optimization,Peer-to-Peer Efficiency Solution','Workflow Automation,Bandwidth Constraint Solutions'],
    techStackDetailesES: ['Node.js,Express.js,Desarrollo de RESTful APIs,Configuración de redes locales','HTML - CSS - JavaScript,Diseño de interfaz de usuario adaptable,Gestión de carga y descarga de archivos','Alojamiento y compartición de archivos internos,Optimización de la velocidad de la red,Solución de eficiencia punto a punto','Automatización del flujo de trabajo,Soluciones para la limitación del ancho de banda.'],
    screens: [
      {
        name: 'Cosmic File Drop--Carga de archivos cósmicos',
        description: 'An Immersive Landing Experience--Una experiencia inmersiva',
        details: `The server's landing page features a captivating universe background, creating a memorable first impression. The central, vibrant green drag-and-drop box provides an intuitive and immediate interface for users to begin uploading files, blending aesthetic appeal with clear functionality.--La página de inicio del servidor presenta un cautivador fondo de universo, creando una primera impresión memorable. El cuadro central de arrastrar y soltar, de un verde vibrante, ofrece una interfaz intuitiva e inmediata para que los usuarios comiencen a subir archivos, combinando estética y funcionalidad.`,
        image: '1.png'
      },
      {
        name: 'File Repository--Repositorio de archivos',
        description: 'Organized, One-Click Access-Acceso organizado con un solo clic',
        details: `The main file library interface displays all uploaded documents in a clean, organized grid. Each file is presented with its name for clear identification, and users can download any item directly to their local machine with a single click, ensuring fast and efficient access.--La interfaz principal de la biblioteca de archivos muestra todos los documentos cargados en una cuadrícula clara y organizada. Cada archivo se presenta con su nombre para una identificación clara, y los usuarios pueden descargar cualquier elemento directamente a su equipo local con un solo clic, lo que garantiza un acceso rápido y eficiente.`,
        image: '2.png'
      }
    ]
  },
];

export const ProjectsInfo = [
  {
    projectID: 3,
  }
]

export const getProjectById = (id: number) => PROJECTS.find((p) => p.id === id);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState({
    id: 0,
    name: '',
    title: '',
    typo: '',
    url: '',
  });

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};