"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Project {
  id: number;
  name: string;
  title: string;
  typo: string;
  url: string;
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
  },
  {
    id: 2,
    name: 'construction',
    title: 'Darwin Construction Inc',
    typo: 'W',
    url: 'https://www.darwinconstruction.com/',
  },
  {
    id: 3,
    name: 'server',
    title: 'Local Cloud',
    typo: 'W1',
    url: 'https://github.com/nadiejcp/server',
  },
];

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