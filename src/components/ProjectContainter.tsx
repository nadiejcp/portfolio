import Image from 'next/image';
import { useProject } from './ProjectContext';
import { useRouter } from 'next/navigation';
import { useLanguage } from './LanguageContext';

interface Project {
  id: number;
  name: string;
  title: string;
  typo: 'W' | 'W1' | 'D';
  url: string;
}

type ContainerProps = {
  project: Project
}

type TranslationKey = 'W' | 'W1' | 'D';

const ProjectContainer = ({ project }: ContainerProps) => {
  const { language } = useLanguage();
  const { setProject } = useProject();
  const router = useRouter();
  
  const translations: Record<TranslationKey, string> = {
    W: language === 'EN' ? 'WebSite' : 'Página Web',
    W1: language === 'EN' ? 'FullStack WebSite' : 'Página Web FullStack',
    D: language === 'EN' ? 'Data Science' : 'Ciencia de Datos',
  }
  
  return (
    <div className="flex flex-col justify-evenly w-[30%] bg-[#1d1d1d] hover:bg-[#111] pt-5 pl-5 pr-5 rounded-3xl"
    onClick={() => { 
      setProject(project);
      localStorage.setItem('project', JSON.stringify(project));
      router.push('/projects/project');
    }}>
      <Image src={`/projects/${project.name}.png`} alt='' width={100} height={100}
      style={{
        width: '100%',
        height: '60%',
        objectFit: 'cover',
      }}/>
      <div className='flex flex-col gap-2 mt-3 mb-2'>
        <p>{project.title}</p>
        <p>{translations[project.typo]}</p>
      </div>
    </div>
  );
}

export default ProjectContainer;