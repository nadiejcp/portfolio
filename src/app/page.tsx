"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import Medallion from "@/components/Medallion";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import SmallLink from "@/components/SmallLink";
import SmallSquare from "@/components/SmallSquare";
import { useEffect } from "react";
import { PROJECTS } from '@/components/ProjectContext';

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const translations = {
    title2: language === 'EN' ? 'About Me' : 'Sobre mí',
    subTitle2: language === 'EN' ? 'I love adventures' : 'Me gusta aventurar',
    iconTitle: language === 'EN' ? 'Call me' : 'Contáctame',
    passion1: language === 'EN' ? 'Good Music' : 'Buena Música',
    passion2: language === 'EN' ? 'Soccer' : 'Fútbol',
    passion3: language === 'EN' ? 'Chess' : 'Ajedrez',
    passion4: language === 'EN' ? 'Camping' : 'Acampar',
    passion5: language === 'EN' ? 'Movies' : 'Cine',
    passion6: language === 'EN' ? 'Memes' : 'Memes',
    passion7: language === 'EN' ? 'Eat' : 'Comer',
    passion8: language === 'EN' ? 'Videogames' : 'Videojuegos',
    experience: language === 'EN' ? 'Years of Experience' : 'Años de Experiencia',
    download: language === 'EN' ? 'Download CV' : 'Descargar CV',
    projects: language === 'EN' ? 'Projects made by me' : 'Proyectos hechos por mí',
    programming: language === 'EN' ? 'Programming Languages' : 'Lenguajes de Programación',
    title3: language === 'EN' ? 'My hobbies' : 'Mis hobbies',
    subTitle3: language === 'EN' ? '' : '',
    title4: language === 'EN' ? 'Check my social profile' : 'Revisa mis redes sociales',
    subTitle4: language === 'EN' ? '' : '',
  }

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang) {
      setLanguage(lang as 'EN' | 'ES');
    }
  }, [setLanguage]);

  return (
    <div className="w-full p-4 lg:p-10 flex flex-col gap-10">
      <SlideDown>
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10">
          <BigSquare blur={false} title={translations.projects} subtitle={''} width="w-full lg:w-1/2">
            <Medallion title={String(PROJECTS.length)} />
          </BigSquare>
          <BigSquare blur={true} icon={'/portfolio/jairo.jpg'} title={translations.title2} subtitle={translations.subTitle2} width="w-full">
          </BigSquare>
        </div>
      </SlideDown>
      <SlideUp amount={0.3}>
        <BigSquare blur={false} title={translations.title2} subtitle={''} width="w-full">
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
            <SmallSquare title={'7'} subtitle={translations.programming} />
            <SmallSquare title={"+5"} subtitle={translations.experience} />
            <SmallSquare title={"CV"} subtitle={translations.download} link={language === 'EN' ? 'CV_Jairo_Cabrera.pdf' : 'CV_Jairo_Cabrera_ES.pdf'} />
          </div>
        </BigSquare>
      </SlideUp>
      <SlideUp amount={0.5}>
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 pb-20">
          <BigSquare blur={false} title={translations.title3} subtitle={translations.subTitle3} width="w-full lg:w-1/2">
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-5 justify-center">
                <SmallLink title={`🎹 ${translations.passion1}`} />
                <SmallLink title={`⚽ ${translations.passion2}`} />
                <SmallLink title={`♞ ${translations.passion3}`} />
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={`🏔️ ${translations.passion4}`} />
                <SmallLink title={`🍿 ${translations.passion5}`} />
                <SmallLink title={`🗿 ${translations.passion6}`} />
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={`🍳 ${translations.passion7}`} />
                <SmallLink title={`🎮 ${translations.passion8}`} />
              </div>
            </div>
          </BigSquare>
          <BigSquare blur={false} title={translations.title4} subtitle={translations.subTitle4} width="w-full lg:w-1/2">
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-5 justify-center">
                <SmallLink title={"GitHub"} icon={"/portfolio/icons/github.svg"} link='https://github.com/nadiejcp' />
                <SmallLink title={"Twitch"} icon={"/portfolio/icons/twitch.svg"} link='https://www.twitch.tv/nadiejcp' />
                <SmallLink title={"Email"} icon={"/portfolio/icons/mail.svg"} link='mailto:jairocabrera87@hotmail.com' />
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={"LinkedIn"} icon={"/portfolio/icons/linkedin.svg"} link='https://www.linkedin.com/in/nadiejcp/' />
                <SmallLink title={"WhatsApp"} icon={"/portfolio/icons/wpp.svg"} link='https://wa.me/+593988988079' />
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={"Instagram"} icon={"/portfolio/icons/ig.svg"} link='https://www.instagram.com/nadiejcp7' />
                <SmallLink title={translations.iconTitle} icon={"/portfolio/icons/phone.svg"} link='tel:+593988988079' />
              </div>
            </div>
          </BigSquare>
        </div>
      </SlideUp>
    </div>
  );
}
