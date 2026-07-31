"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";

const iconRender = (text: string, link: string, expanded:boolean, href:string) => {
    return (
        <Link href={href}>
            <div key={text} className='flex items-center text-gray-300 hover:text-brand-cyan transition-colors shrink-0'>
                <Image src={link} alt='Inicio' width={30} height={30} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"></Image>
                {expanded && <p className='pl-3 hidden lg:block whitespace-nowrap'>{text}</p>}
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
        <div className={`m-4 lg:ml-10 p-4 lg:p-[30px] lg:mt-10 rounded-xl bg-brand-dark/60 backdrop-blur-xl border border-white/10 flex flex-row lg:flex-col justify-evenly lg:justify-start items-center lg:items-start transition-all duration-500 overflow-x-auto lg:overflow-visible sticky top-4 lg:top-10 z-50 ${expanded ? 'lg:w-[30%]' : 'lg:w-fit'} w-auto shrink-0`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <div className="flex items-center hidden lg:flex">
                <Image src='/portfolio/avatar.jpg'
                alt='Picture of Jairo Cabrera'
                width={100}
                height={100}
                className="rounded-full shrink-0"/>
                {expanded && <div className="flex flex-col pl-5 text-gray-200">
                    <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple whitespace-nowrap">Jairo Cabrera</p>
                    <p className="text-sm text-gray-400 whitespace-nowrap">{description}</p>
                </div>}
            </div>
            <div className="lg:mt-10 lg:mb-10 flex flex-row lg:flex-col gap-4 lg:gap-7 lg:pl-7">
                {iconRender(icons[0], `/portfolio/inicio.svg`, expanded, '/')}
                {iconRender(icons[1], `/portfolio/proyectos.svg`, expanded, '/projects')}
            </div>
            <div className="mx-4 lg:mt-2 lg:mb-2 border-l lg:border-l-0 lg:border-t border-white/20 h-8 lg:h-auto"></div>
            <div className="flex flex-row lg:flex-col gap-4 lg:gap-7 lg:pl-7">
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