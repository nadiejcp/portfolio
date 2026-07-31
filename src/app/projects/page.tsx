"use client";

import LoadingSpinner from "@/components/Loading";
import ProjectContainer from "@/components/ProjectContainer";
import { PROJECTS } from "@/components/ProjectContext";
import SlideDown from "@/components/SlideDown";
import { useEffect, useState } from "react";

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
  techStackDetailsES: string[];
  screens: {
    name: string;
    description: string;
    details: string;
    image: string;
  }[];
}

export default function About() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadProjects() {
      try {
        const validProjects = PROJECTS.filter(isValidProject);
        setProjects(validProjects)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  if (loading) return <LoadingSpinner />

  return (
    <div className="w-full p-4 lg:p-10 flex flex-col gap-10">
      <SlideDown amount={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 w-full pb-20">
          {projects.map((project, i) => (
             <ProjectContainer key={`project-${i}`} project={project} />
          ))}
        </div>
      </SlideDown>
    </div>
  );
}

function isValidProject(data: { id: number; name: string; title: string; typo: string; url: string }): data is Project {
  return (
    typeof data.id === 'number' &&
    typeof data.name === 'string' &&
    typeof data.title === 'string' &&
    (data.typo === 'W' || data.typo === 'W1' || data.typo === 'D') &&
    typeof data.url === 'string'
  );
}
