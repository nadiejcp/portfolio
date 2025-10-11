"use client";

import LoadingSpinner from "@/components/Loading";
import ProjectContainer from "@/components/ProjectContainer";
import { PROJECTS } from "@/components/ProjectContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
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
  techStackDetailesES: string[];
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

  const containers = Math.trunc(projects.length / 3) + 1;
  return (
    <div className="w-full m-10 flex flex-col gap-10">
      {Array.from({ length: containers }).map((_, i) =>
        i === 0 ?
          <SlideDown amount={0.3} key={`slider-${i}`}>
            <div className="flex justify-evenly" key={i}>
              {Array.from({ length: Math.min(3, projects.length - 3*i)}).map((_, j) => (
                <ProjectContainer
                  key={`project-${j}`}
                  project={projects[i*3+j]}
                />
              ))}
            </div>
          </SlideDown> :
          <SlideUp amount={0.5} key={`slider-${i}`}>
            <div className="flex justify-evenly" key={i}>
              {Array.from({ length: Math.min(3, projects.length - 3*i)}).map((_, j) => (
                <ProjectContainer
                  key={`project-${j}`}
                  project={projects[i*3+j]}
                />
              ))}
            </div>
          </SlideUp>
      )}
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
