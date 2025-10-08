"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";
import SmallLink from "@/components/SmallLink";
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
      <div>{translations.contact}</div>
      <BigSquare blur={false} title={translations.title2} subtitle={translations.subTitle2} width="100%">
        <SmallSquare icon={"/icons/wpp.svg"} subtitle={"WhatsApp"}/>
        <SmallSquare icon={"/icons/mail.svg"} subtitle={translations.contact1}/>
        <SmallSquare icon={"/icons/phone.svg"} subtitle={translations.contact2}/>
      </BigSquare>
      <div>{translations.social}</div>
      <BigSquare blur={false}  title={translations.title} subtitle={translations.subTitle2} width="50%">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-5 justify-center">
            <SmallSquare icon={'/icons/linkedin.svg'} subtitle="LinkedIn"/>
            <SmallSquare icon={'/icons/ig.svg'} subtitle="Instagram"/>
            <SmallSquare icon={'/icons/github.svg'} subtitle="GitHub"/>
          </div>
          <div className="flex gap-5 justify-center">
            <SmallSquare icon={'/icons/twitch.svg'} subtitle="Twitch"/>
            <SmallSquare icon={'/icons/fb.svg'} subtitle="Facebook"/>
            <SmallSquare icon={'/icons/twitter.svg'} subtitle="X"/>
          </div>
        </div>
      </BigSquare>
    </div>
  );
}
