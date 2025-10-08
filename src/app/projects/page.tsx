"use client";

import { useLanguage } from "@/components/LanguageContext";
import ProjectContainer from "@/components/ProjectContainter";
import { useProject } from "@/components/ProjectContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  icon: string;
  title: string;
  typo: string;
  url: string;
}

export default function About() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/projects.txt')
        const text = await response.text()
        const projectsArray = text
          .split('\n')
          .filter((line) => {return line.trim(); })
          .map((line) => {
            const [icon, title, typo, url] = line.split(',').map((item) => { return item.trim(); })
            return {
              icon: icon || '/avatar.jpg',
              title: title || '',
              typo: typo || 'tipo',
              url: url || '#'
            }
          })
        setProjects(projectsArray)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  if (loading) return <div>Loading projects...</div>

  const containers = Math.trunc(projects.length / 3) + 1;
  return (
    <div className="w-full m-10 flex flex-col gap-10">
      {Array.from({ length: containers }).map((_, i) => (
        <div className="flex justify-evenly" key={i}>
          {Array.from({ length: Math.min(3, projects.length - 3*i)}).map((_, j) => (
            <ProjectContainer
              key={`project-${j}`}
              project={projects[i*3+j]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
