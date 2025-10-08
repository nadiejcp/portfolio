"use client";

import { useProject } from "@/components/ProjectContext";

const Project = () => {
  const { project } = useProject();
  return (
    <div className="w-full bg-white">
      {project.url}
    </div>
  )
}

export default Project;