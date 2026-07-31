"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
    const { language, setLanguage } = useLanguage();
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    const icons = language === 'EN' ? ['Home', 'Projects'] : ['Inicio', 'Proyectos'];
    const icons2 = language === 'EN' ? ['Experience', 'About me', 'Contact me'] : ['Experiencia', 'Sobre mi', 'Contactame'];
    const description = language === 'EN' ? 'Software Developer' : 'Desarrollador de Software';

    useEffect(() => {
        const lang = localStorage.getItem('language');
        if (lang) {
            setLanguage(lang as 'EN' | 'ES');
        }
    }, [setLanguage]);

    const iconRender = (text: string, link: string, href: string) => {
        const isActive = pathname === href;
        return (
            <Link href={href} key={text}>
                <div className={`flex items-center p-2 lg:p-3 rounded-xl transition-all duration-300 shrink-0
                    ${isActive ? 'bg-brand-cyan/20 text-brand-cyan shadow-sm border border-brand-cyan/30' : 'text-gray-300 hover:text-brand-cyan hover:bg-white/10 border border-transparent'}
                `}>
                    <Image src={link} alt={text} width={30} height={30} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] shrink-0" />
                    {expanded && <p className='pl-3 hidden lg:block whitespace-nowrap font-medium'>{text}</p>}
                </div>
            </Link>
        );
    }

    return (
        <aside
            className={`m-4 lg:ml-10 p-4 lg:p-[30px] lg:mt-10 rounded-2xl lg:rounded-3xl bg-brand-dark/80 backdrop-blur-xl border border-white/10 flex flex-row lg:flex-col justify-evenly lg:justify-start items-center lg:items-start transition-all duration-500 overflow-x-auto lg:overflow-visible sticky top-4 lg:top-10 z-50 shadow-2xl ${expanded ? 'lg:w-[30%]' : 'lg:w-fit'} w-auto shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <div className="flex items-center hidden lg:flex mb-0 lg:mb-10 w-full overflow-hidden shrink-0">
                <Image src='/portfolio/avatar.jpg'
                    alt='Picture of Jairo Cabrera'
                    width={100}
                    height={100}
                    className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full shrink-0 shadow-lg border border-white/10"
                />
                {expanded && <div className="flex flex-col pl-4 text-gray-200 whitespace-nowrap">
                    <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple text-lg tracking-tight">Jairo Cabrera</p>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>}
            </div>

            <div className="flex flex-row lg:flex-col gap-3 lg:gap-5 lg:pl-4 w-full">
                {iconRender(icons[0], `/portfolio/inicio.svg`, '/')}
                {iconRender(icons[1], `/portfolio/proyectos.svg`, '/projects')}
            </div>

            <div className="mx-3 lg:mx-0 lg:ml-4 lg:my-6 border-l lg:border-l-0 lg:border-t border-white/20 h-8 lg:h-px lg:w-8 shrink-0"></div>

            <div className="flex flex-row lg:flex-col gap-3 lg:gap-5 lg:pl-4 w-full">
                {iconRender(icons2[0], `/portfolio/experience.svg`, '/experience')}
                {iconRender(icons2[1], `/portfolio/sobre mi.svg`, '/about')}
                {iconRender(icons2[2], `/portfolio/contactame.svg`, '/contact')}
            </div>

            <div className="lg:mt-16 ml-3 lg:ml-4 flex items-center cursor-pointer p-2 lg:p-3 rounded-xl hover:bg-white/10 text-gray-300 hover:text-brand-cyan transition-colors border border-transparent w-full shrink-0" onClick={() => {
                setLanguage((prev) => prev === 'EN' ? 'ES' : 'EN');
                localStorage.setItem('language', language === 'EN' ? 'ES' : 'EN');
            }}>
                <Image src={'/portfolio/globe.svg'} alt='Language' width={30} height={30} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] shrink-0" />
                <p className="pl-3 font-medium hidden lg:block whitespace-nowrap">
                    {language === 'ES' ? expanded ? 'Español' : 'ES' : expanded ? 'English' : 'EN'}
                </p>
                <p className="pl-2 font-medium lg:hidden whitespace-nowrap text-sm">
                    {language === 'ES' ? 'ES' : 'EN'}
                </p>
            </div>
        </aside>
    );
};

export default SideBar;