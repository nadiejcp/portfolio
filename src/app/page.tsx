"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import Medallion from "@/components/Medallion";
import SmallLink from "@/components/SmallLink";
import SmallSquare from "@/components/SmallSquare";

export default function Home() {
  const { language } = useLanguage();
  const traductions = {
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
    passion8: language === 'EN' ? 'Videogames' : 'Videojuegos'
  }
  return (
    <div className="w-full m-10 flex flex-col gap-10">
      <div className="flex justify-center gap-x-10">
        <BigSquare blur={false} title={traductions.title} subtitle={traductions.subTitle} width="50%">
          <Medallion title={'35'} subtitle={'Projects'}/>
        </BigSquare>
        <BigSquare blur={true} icon={'/jairo.jpg'} title={traductions.title2} subtitle={traductions.subTitle2} width="50%">
        </BigSquare>
      </div>
      <BigSquare blur={false} title={traductions.title2} subtitle={traductions.subTitle2} width="100%">
        <SmallSquare title={"35"} subtitle={"things"}/>
        <SmallSquare title={"35"} subtitle={"things"}/>
        <SmallSquare title={"35"} subtitle={"things"}/>
      </BigSquare>
      <div className="flex justify-center gap-x-10">
        <BigSquare blur={false}  title={traductions.title2} subtitle={traductions.subTitle2} width="50%">
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-5 justify-center">
              <SmallLink title={`🎹 ${traductions.passion1}`}/>
              <SmallLink title={`⚽ ${traductions.passion2}`}/>
              <SmallLink title={`♞ ${traductions.passion3}`}/>
            </div>
            <div className="flex gap-5 justify-center">
              <SmallLink title={`🏔️ ${traductions.passion4}`}/>
              <SmallLink title={`🍿 ${traductions.passion5}`}/>
              <SmallLink title={`🗿 ${traductions.passion6}`}/>
            </div>
            <div className="flex gap-5 justify-center">
              <SmallLink title={`🍳 ${traductions.passion7}`}/>
              <SmallLink title={`🎮 ${traductions.passion8}`}/>
            </div>
          </div>
        </BigSquare>
        <BigSquare blur={false} title={traductions.title} subtitle={traductions.subTitle} width="50%">
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-5 justify-center">
              <SmallLink title={"GitHub"} icon={"/icons/github.svg"} link='https://github.com/nadiejcp'/>
              <SmallLink title={"Twitch"} icon={"/icons/twitch.svg"} link='https://www.twitch.tv/nadiejcp'/>
              <SmallLink title={"Email"} icon={"/icons/mail.svg"} link='mailto:jairocabrera87@hotmail.com'/>
            </div>
            <div className="flex gap-5 justify-center">
              <SmallLink title={"LinkedIn"} icon={"/icons/linkedin.svg"} link='https://www.linkedin.com/in/nadiejcp/'/>
              <SmallLink title={"WhatsApp"} icon={"/icons/wpp.svg"} link='https://wa.me/+593988988079'/>
            </div>
            <div className="flex gap-5 justify-center">
              <SmallLink title={"Instagram"} icon={"/icons/ig.svg"} link='https://www.instagram.com/nadiejcp7'/>
              <SmallLink title={traductions.iconTitle} icon={"/icons/phone.svg"} link='tel:+593988988079'/>
            </div>
          </div>
        </BigSquare>
      </div>
    </div>
  );
}
