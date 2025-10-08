
import Image from 'next/image';
import { useProject } from './ProjectContext';
import { useRouter } from 'next/navigation';
import { useLanguage } from './LanguageContext';

interface Project {
  icon: string;
  title: string;
  typo: string;
  url: string;
}

type ContainerProps = {
  project: Project
}

const ProjectContainer = ({ project }: ContainerProps) => {
  const { language } = useLanguage();
  const { setProject } = useProject();
  const router = useRouter();
  const translations = {
    tipo: language === 'EN' ? 'WebSite' : 'Página Web',
    tipo2: language === 'EN' ? 'Data Science' : 'Ciencia de Datos',
  }
  return (
    <div className="flex flex-col justify-evenly w-[30%] bg-[#1d1d1d] hover:bg-[#111] pt-5 pl-5 pr-5 rounded-3xl"
    onClick={() => { 
      setProject(project);
      router.push('/projects/project');
    }}>
      <Image src={project.icon} alt='' width={100} height={100}
      style={{
        width: '100%',
        height: '60%',
        objectFit: 'cover',
      }}/>
      <div className='flex flex-col gap-2 mt-3 mb-2'>
        <p>{project.title}</p>
        <p>{project.typo === 'W' ? translations.tipo : translations.tipo2}</p>
      </div>
    </div>
  );
}

export default ProjectContainer;