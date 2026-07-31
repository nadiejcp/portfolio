"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";

const iconRender = (text: string, link: string, expanded:boolean, href:string) => {
    return (
        <Link href={href}>
            <div key={text} className='flex items-center text-gray-300 hover:text-brand-cyan transition-colors'>
                <Image src={link} alt='Inicio' width={30} height={30}></Image>
                {expanded && <p className='pl-3'>{text}</p>}
            </div>
        </Link>
    );
}

const SideBar = () => {
    const { language, setLanguage } = useLanguage();
    const [ expanded, setExpanded ] = useState(false);
    const icons = language === 'EN' ? ['Home', 'Projects'] : ['Inicio', 'Proyectos']
    const icons2 = language === 'EN' ? ['Experience', 'About me', 'Contact me'] : ['Experiencia', 'Sobre mi', 'Contactame']
    const description = language === 'EN' ? 'Software Developer' : 'Desarrollador de Software';

    useEffect(() => {
        const lang = localStorage.getItem('language');
        if (lang){
            setLanguage(lang);
        }
    }, [setLanguage]);

    return (
        <div className={`ml-10 p-[30px] mt-10 w-fit rounded-xl bg-brand-dark/60 backdrop-blur-xl border border-white/10 flex flex-col items-left transition-all duration-500 h-fit`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            style={{
                width: expanded ? '30%' : 'fit-content',
            }}
        >
            <div className="flex items-center">
                <Image src='/portfolio/avatar.jpg'
                alt='Picture of Jairo Cabrera'
                width={100}
                height={100}
                className="rounded-full"/>
                {expanded && <div className="flex flex-col pl-5 text-gray-200">
                    <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Jairo Cabrera</p>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>}
            </div>
            <div className="mt-10 mb-10 flex flex-col gap-7 pl-7">
                {iconRender(icons[0], `/portfolio/inicio.svg`, expanded, '/')}
                {iconRender(icons[1], `/portfolio/proyectos.svg`, expanded, '/projects')}
            </div>
            <div className="mt-2 mb-2 border-1"></div>
            <div className="mt-10 flex flex-col gap-7 pl-7">
                {iconRender(icons2[0], `/portfolio/experience.svg`, expanded, '/experience')}
                {iconRender(icons2[1], `/portfolio/sobre mi.svg`, expanded, '/about')}
                {iconRender(icons2[2], `/portfolio/contactame.svg`, expanded, '/contact')}
            </div>
            <div className="mt-10 flex items-center cursor-pointer pl-7 text-gray-300 hover:text-brand-cyan transition-colors" onClick={() => {
                    setLanguage((prev) => prev === 'EN' ? 'ES' : 'EN');
                    localStorage.setItem('language', language === 'EN' ? 'ES' : 'EN');
                }}>
                <Image src={'/portfolio/globe.svg'} alt='language icon' width={30} height={30}/>
                <p className="pl-3">{language === 'ES' ? expanded ? 'Español' : 'ES' : expanded ? 'English' : 'EN'}</p>
            </div>
        </div>
    );
};

export default SideBar;