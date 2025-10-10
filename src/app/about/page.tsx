"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import SmallLink from "@/components/SmallLink";
import SmallSquare from "@/components/SmallSquare";
import { useEffect, useState } from "react";

export default function About() {
  const { language, setLanguage } = useLanguage();
  const [projectQuantity, setProjectQuantity] = useState(0);

  useEffect(() => {
    const fetchProjectQuantity = async () => {
      const response = await fetch('./projectsInformation.txt')
      const text = await response.text()
      const projectsArray = text
          .split('\n')
          .filter((line) => { return line.trim(); });
      setProjectQuantity(projectsArray.length);
    };
    fetchProjectQuantity();
  }, []);

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang);
    }
  }, [setLanguage]);

  const translations = {
    title: language === 'EN' ? 'Follow Me' : 'Sígueme',
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
    nation: language === 'EN' ? 'Ecuadorian' : 'Ecuatoriano',
    p1: language === 'EN' ? `A results-driven full-stack developer with 5+ years of experience specializing in building and deploying end-to-end web solutions. I leverage modern technologies like Next.js for seamless frontends and Python/Flask for powerful backends, with a strong focus on responsive design, secure payment integrations (Stripe), and cloud deployment (AWS).`
    : `Desarrollador full-stack orientado a resultados con más de 5 años de experiencia, especializado en la creación e implementación de soluciones web integrales. Utilizo tecnologías modernas como Next.js para frontends integrados y Python/Flask para backends potentes, con un enfoque especial en diseño responsivo, integraciones de pago seguras (Stripe) e implementación en la nube (AWS).`,
    p2: language === 'EN' ? `My passion lies in creating digital tools that solve real-world problems, from enhancing a company's online presence to developing efficient, database-driven systems for specialized industries. I am committed to writing efficient code and delivering projects that are not only functional but also provide a superior user experience.`
    : `Mi pasión reside en crear herramientas digitales que resuelvan problemas del mundo real, desde mejorar la presencia online de una empresa hasta desarrollar sistemas eficientes basados ​​en bases de datos para industrias especializadas. Me comprometo a escribir código eficiente y a entregar proyectos que no solo sean funcionales, sino que también ofrezcan una experiencia de usuario superior.`
    //'Passionate about crafting efficient, user-centric applications that drive business growth and enhance user experiences. Adept at collaborating with cross-functional teams to deliver high-quality software solutions on time and within budget.'
  }

  return (
    <div className="w-full m-10 flex flex-col gap-10">
      <SlideDown amount={0.1}>
        <div className="flex bg-[#1d1d1d] rounded-xl flex flex-col w-full justify-center items-center gap-5 pt-5 pb-5">
          <div>
            <div className="text-bold text-3xl">Jairo Cabrera Pino - {translations.nation}</div>
          </div>
          <div className="flex flex-col gap-3 max-w-4xl text-justify">
            <div>{translations.p1}</div>
            <div>{translations.p2}</div>
          </div>
        </div>
      </SlideDown>
      <SlideUp amount={0.5}>
        <BigSquare blur={false} title={''} subtitle={''} width="100%">
          <SmallSquare title={String(projectQuantity)} subtitle={translations.projects}/>
          <SmallSquare title={"+5"} subtitle={translations.experience}/>
          <SmallSquare title={"CV"} subtitle={translations.download} link={language === 'EN' ? 'cv.pdf' : 'cv_es.pdf'}/>
        </BigSquare>
      </SlideUp>
      <SlideUp amount={0.5}>
        <div className="flex justify-center gap-x-10">
          <BigSquare blur={false}  title={translations.title2} subtitle={translations.subTitle2} width="50%">
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
          <BigSquare blur={false} title={translations.title} subtitle={''} width="50%">
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
