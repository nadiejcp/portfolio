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
    title: language === 'EN' ? 'Projects made by Me' : 'Proyectos hechos por este pecho',
    subTitle: language === 'EN' ? '+35 projects' : '+35 proyectos',
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
    experience: language === 'EN' ? 'years of experience' : 'años de experiencia',
    download: language === 'EN' ? 'Download CV' : 'Descargar CV',
    projects: language === 'EN' ? 'Projects' : 'Proyectos',
    programming: language === 'EN' ? 'Programming Languages' : 'Lenguages de Programación',
    title3: language === 'EN' ? 'My hobbies' : 'Mis hobbies',
    subTitle3: language === 'EN' ? '' : '',
    title4: language === 'EN' ? 'Check my social profile' : 'Revisa mis redes sociales',
    subTitle4: language === 'EN' ? '' : '',
  }
 
  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang);
    }
  }, [setLanguage]);

  return (
    <div className="w-full m-10 flex flex-col gap-10">
      <SlideDown>
        <div className="flex justify-center gap-x-10">
          <BigSquare blur={false} title={translations.title} subtitle={''} width="50%">
            <Medallion title={String(PROJECTS.length)}/>
          </BigSquare>
          <BigSquare blur={true} icon={'./jairo.jpg'} title={translations.title2} subtitle={translations.subTitle2} width="50%">
          </BigSquare>
        </div>
      </SlideDown>
      <SlideUp amount={0.3}>
        <BigSquare blur={false} title={translations.title2} subtitle={''} width="100%">
          <SmallSquare title={String(PROJECTS.length)} subtitle={translations.projects}/>
          <SmallSquare title={"+5"} subtitle={translations.experience}/>
          <SmallSquare title={"CV"} subtitle={translations.download} link={language === 'EN' ? 'CV_Jairo_Cabrera.pdf' : 'CV_Jairo_Cabrera_ES.pdf'}/>
        </BigSquare>
      </SlideUp>
      <SlideUp amount={0.5}>
        <div className="flex justify-center gap-x-10">
          <BigSquare blur={false}  title={translations.title3} subtitle={translations.subTitle3} width="50%">
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-5 justify-center">
                <SmallLink title={`🎹 ${translations.passion1}`}/>
                <SmallLink title={`⚽ ${translations.passion2}`}/>
                <SmallLink title={`♞ ${translations.passion3}`}/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={`🏔️ ${translations.passion4}`}/>
                <SmallLink title={`🍿 ${translations.passion5}`}/>
                <SmallLink title={`🗿 ${translations.passion6}`}/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={`🍳 ${translations.passion7}`}/>
                <SmallLink title={`🎮 ${translations.passion8}`}/>
              </div>
            </div>
          </BigSquare>
          <BigSquare blur={false} title={translations.title4} subtitle={translations.subTitle4} width="50%">
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-5 justify-center">
                <SmallLink title={"GitHub"} icon={"./icons/github.svg"} link='https://github.com/nadiejcp'/>
                <SmallLink title={"Twitch"} icon={"./icons/twitch.svg"} link='https://www.twitch.tv/nadiejcp'/>
                <SmallLink title={"Email"} icon={"./icons/mail.svg"} link='mailto:jairocabrera87@hotmail.com'/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={"LinkedIn"} icon={"./icons/linkedin.svg"} link='https://www.linkedin.com/in/nadiejcp/'/>
                <SmallLink title={"WhatsApp"} icon={"./icons/wpp.svg"} link='https://wa.me/+593988988079'/>
              </div>
              <div className="flex gap-5 justify-center">
                <SmallLink title={"Instagram"} icon={"./icons/ig.svg"} link='https://www.instagram.com/nadiejcp7'/>
                <SmallLink title={translations.iconTitle} icon={"./icons/phone.svg"} link='tel:+593988988079'/>
              </div>
            </div>
          </BigSquare>
        </div>
      </SlideUp>
    </div>
  );
}
