"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideUp from "@/components/SlideUp";
import SmallSquare from "@/components/SmallSquare";
import { useEffect } from "react";

export default function About() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang as 'EN' | 'ES');
    }
  }, [setLanguage]);

  const translations = {
    contact: language === 'EN' ? 'CONTACT ME' : 'CONTACTO',
    social: language === 'EN' ? 'SOCIAL NETWORKS' : 'REDES SOCIALES',
    title: language === 'EN' ? 'Follow me' : 'Sígueme en redes',
    title2: language === 'EN' ? 'For my clients' : 'Para mis clientes',
    subTitle2: language === 'EN' ? '' : '',
    contact1: language === 'EN' ? 'Email' : 'Correo',
    contact2: language === 'EN' ? 'Cellphone' : 'Celular',
    contact3: language === 'EN' ? '' : '',
  }
  return (
    <div className="w-full p-4 lg:p-10 flex flex-col gap-10">
      <div className="text-2xl font-bold">{translations.contact}</div>
      <BigSquare blur={false} title={translations.title2} subtitle={translations.subTitle2} width="w-full">
        <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center">
          <SmallSquare icon={"/portfolio/icons/wpp.svg"} subtitle={"WhatsApp"} link='https://wa.me/+593988988079'/>
          <SmallSquare icon={"/portfolio/icons/mail.svg"} subtitle={translations.contact1}/>
          <SmallSquare icon={"/portfolio/icons/phone.svg"} subtitle={translations.contact2}/>
        </div>
      </BigSquare>
      <div className="text-2xl font-bold">{translations.social}</div>
      <BigSquare blur={false}  title={translations.title} subtitle={translations.subTitle2} width="w-full">
        <div className="flex flex-col gap-y-5">
          <SlideUp amount={0.3}>
            <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center items-center">
              <SmallSquare icon={'/portfolio/icons/linkedin.svg'} subtitle="LinkedIn" openLink='https://www.linkedin.com/in/nadiejcp/'/>
              <SmallSquare icon={'/portfolio/icons/ig.svg'} subtitle="Instagram" openLink='https://www.instagram.com/nadiejcp7'/>
              <SmallSquare icon={'/portfolio/icons/github.svg'} subtitle="GitHub" openLink='https://github.com/nadiejcp'/>
            </div>
          </SlideUp>
          <SlideUp amount={0.1}>
            <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center items-center">
              <SmallSquare icon={'/portfolio/icons/twitch.svg'} subtitle="Twitch" openLink='https://www.twitch.tv/nadiejcp'/>
              <SmallSquare icon={'/portfolio/icons/fb.svg'} subtitle="Facebook" openLink='https://www.facebook.com/nadiejcp7'/>
              <SmallSquare icon={'/portfolio/icons/x.svg'} subtitle="X" openLink='https://x.com/JairoCP_'/>
            </div>
          </SlideUp>
        </div>
      </BigSquare>
    </div>
  );
}
