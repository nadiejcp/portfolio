"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import SmallLink from "@/components/SmallLink";
import SmallSquare from "@/components/SmallSquare";
import { useEffect } from "react";

export default function About() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang){
      setLanguage(lang);
    }
  }, [setLanguage]);

  const traductions = {
    title: language === 'EN' ? 'Projects made by Me' : 'Proyectos hechos por este pecho'
  }
  return (
    <div className="w-full m-10 flex flex-col gap-10">
      <SlideDown amount={0.1}>
        <div className="flex bg-[#1d1d1d] rounded-xl flex flex-col w-full justify-center items-center">
          <div>
            <div>Jairo</div>
          </div>
          <div>
            <div>Des 1</div>
            <div>Des 2</div>
          </div>
        </div>
      </SlideDown>
      <SlideUp amount={0.5}>
        <BigSquare blur={false} title={''} subtitle={''} width="100%">
          <SmallSquare title={"35"} subtitle={"things"}/>
          <SmallSquare title={"35"} subtitle={"things"}/>
          <SmallSquare title={"35"} subtitle={"things"}/>
        </BigSquare>
      </SlideUp>
      <SlideUp amount={0.5}>
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
      </SlideUp>
    </div>
  );
}
