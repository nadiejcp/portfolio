"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SlideDown from "@/components/SlideDown";
import SlideUp from "@/components/SlideUp";
import SmallSquare from "@/components/SmallSquare";

export default function About() {
  const { language } = useLanguage();
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
    <div className="w-full m-10 flex flex-col gap-10">
      <div className="text-2xl">{translations.contact}</div>
      <SlideDown amount={0.1}>
        <BigSquare blur={false} title={translations.title2} subtitle={translations.subTitle2} width="100%">
          <SmallSquare icon={"/icons/wpp.svg"} subtitle={"WhatsApp"}/>
          <SmallSquare icon={"/icons/mail.svg"} subtitle={translations.contact1}/>
          <SmallSquare icon={"/icons/phone.svg"} subtitle={translations.contact2}/>
        </BigSquare>
      </SlideDown>
      <div className="text-2xl">{translations.social}</div>
      <BigSquare blur={false}  title={translations.title} subtitle={translations.subTitle2} width="50%">
        <div className="flex flex-col gap-y-5">
          <SlideUp amount={0.5}>
            <div className="flex gap-5 justify-center">
              <SmallSquare icon={'/icons/linkedin.svg'} subtitle="LinkedIn"/>
              <SmallSquare icon={'/icons/ig.svg'} subtitle="Instagram"/>
              <SmallSquare icon={'/icons/github.svg'} subtitle="GitHub"/>
            </div>
          </SlideUp>
          <SlideUp amount={0.6}>
            <div className="flex gap-5 justify-center">
              <SmallSquare icon={'/icons/twitch.svg'} subtitle="Twitch"/>
              <SmallSquare icon={'/icons/fb.svg'} subtitle="Facebook"/>
              <SmallSquare icon={'/icons/twitter.svg'} subtitle="X"/>
            </div>
          </SlideUp>
        </div>
      </BigSquare>
    </div>
  );
}
