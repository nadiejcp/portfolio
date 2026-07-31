const fs = require('fs');
const path = 'c:/Users/Developer/Documents/Projects/portfolio/src/components/ProjectContext.tsx';

let content = fs.readFileSync(path, 'utf8');

const newProjects = `  ,
  {
    id: 4,
    name: 'ai_agent_cover',
    title: 'Agentic Workflow & Platform Tooling',
    typo: 'D',
    url: 'https://github.com/nadiejcp',
    shortDescription: 'Developed open-source AI agent components and FastAPI middleware for modular integration with external process engines and web interfaces.--Desarrolló componentes de agentes de IA de código abierto y middleware FastAPI para la integración modular con motores de procesos externos e interfaces web.',
    techStackTitles: ['Backend', 'AI & Agents'],
    techStackTitlesES: ['Backend', 'IA y Agentes'],
    techStackDetails: ['Python, FastAPI', 'Agentic Workflows, LLMs'],
    techStackDetailsES: ['Python, FastAPI', 'Flujos de trabajo agenticos, LLMs'],
    screens: []
  },
  {
    id: 5,
    name: 'data_science_cover',
    title: 'LSTM Precipitation Forecasting',
    typo: 'D',
    url: 'https://github.com/nadiejcp',
    shortDescription: 'Engineered an RNN-LSTM deep learning model predicting next-day precipitation using INAMHI weather station observations combined with ERA5 reanalysis data.--Diseñó un modelo de aprendizaje profundo RNN-LSTM para predecir la precipitación del día siguiente utilizando observaciones de INAMHI combinadas con datos del reanálisis ERA5.',
    techStackTitles: ['Machine Learning', 'Data Processing'],
    techStackTitlesES: ['Machine Learning', 'Procesamiento de Datos'],
    techStackDetails: ['Python, TensorFlow, Keras', 'Pandas, NumPy, ERA5, NetCDF'],
    techStackDetailsES: ['Python, TensorFlow, Keras', 'Pandas, NumPy, ERA5, NetCDF'],
    screens: []
  },
  {
    id: 6,
    name: 'gis_map_cover',
    title: 'Custom Geospatial QGIS Plugins',
    typo: 'D',
    url: 'https://github.com/nadiejcp',
    shortDescription: 'Built native C++ and Python QGIS extensions integrating segmentation and classification algorithms for satellite agricultural analysis.--Construyó extensiones nativas en C++ y Python para QGIS integrando algoritmos de segmentación y clasificación para análisis agrícola satelital.',
    techStackTitles: ['GIS & Mapping', 'Development'],
    techStackTitlesES: ['SIG y Cartografía', 'Desarrollo'],
    techStackDetails: ['QGIS, Python, GDAL', 'C++, Geospatial Analysis'],
    techStackDetailsES: ['QGIS, Python, GDAL', 'C++, Análisis Geoespacial'],
    screens: []
  },
  {
    id: 7,
    name: 'web_dev_cover',
    title: 'School Library Web Platform',
    typo: 'W1',
    url: 'https://github.com/nadiejcp',
    shortDescription: 'Built and deployed a modern Next.js / Node.js web application for academic library cataloging and student resource distribution.--Construyó e implementó una moderna aplicación web Next.js / Node.js para catalogación de bibliotecas académicas y distribución de recursos estudiantiles.',
    techStackTitles: ['Frontend', 'Backend'],
    techStackTitlesES: ['Frontend', 'Backend'],
    techStackDetails: ['Next.js, React, Tailwind CSS', 'Node.js, Express, Databases'],
    techStackDetailsES: ['Next.js, React, Tailwind CSS', 'Node.js, Express, Bases de Datos'],
    screens: []
  },
  {
    id: 8,
    name: 'ai_agent_cover',
    title: 'Smart Traffic Lights RL Agent',
    typo: 'D',
    url: 'https://github.com/nadiejcp',
    shortDescription: 'Designed a reinforcement learning agent to optimize traffic light timing and reduce congestion in Quito, Ecuador using SUMO and Python.--Diseñó un agente de aprendizaje por refuerzo para optimizar el tiempo de los semáforos y reducir la congestión en Quito, Ecuador, utilizando SUMO y Python.',
    techStackTitles: ['Machine Learning', 'Simulation'],
    techStackTitlesES: ['Machine Learning', 'Simulación'],
    techStackDetails: ['Reinforcement Learning, Python', 'SUMO Traffic Simulator'],
    techStackDetailsES: ['Aprendizaje por Refuerzo, Python', 'Simulador de Tráfico SUMO'],
    screens: []
  },
  {
    id: 9,
    name: 'web_dev_cover',
    title: 'SaaS AI for Agriculture & Construction',
    typo: 'W1',
    url: 'https://github.com/nadiejcp',
    shortDescription: 'Designed and developed a SaaS platform providing AI-powered solutions for construction, environmental, and agricultural sectors using AWS, Kubernetes, and FastAPI.--Diseñó y desarrolló una plataforma SaaS que proporciona soluciones basadas en IA para los sectores de la construcción, medioambiental y agrícola utilizando AWS, Kubernetes y FastAPI.',
    techStackTitles: ['Cloud & DevOps', 'Backend'],
    techStackTitlesES: ['Nube y DevOps', 'Backend'],
    techStackDetails: ['AWS, Kubernetes, Docker', 'Python, FastAPI, Microservices'],
    techStackDetailsES: ['AWS, Kubernetes, Docker', 'Python, FastAPI, Microservicios'],
    screens: []
  }
];

export const ProjectsInfo = [`;

content = content.replace('];\r\n\r\nexport const ProjectsInfo = [', newProjects);
content = content.replace('];\n\nexport const ProjectsInfo = [', newProjects);

fs.writeFileSync(path, content);
console.log('Successfully updated ProjectContext.tsx');
