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