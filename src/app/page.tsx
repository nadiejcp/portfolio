"use client";

import BigSquare from "@/components/BigSquare";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const traductions = {
    title: language === 'EN' ? 'Projects made by Me' : 'Proyectos hechos por este pecho',
    subTitle: language === 'EN' ? '+35 projects' : '+35 proyectos',
    title2: language === 'EN' ? 'About Me' : 'Sobre mí',
    subTitle2: language === 'EN' ? 'I love adventures' : 'Me gusta aventurar'
  }
  return (
    <div className="w-full m-10">
      <div className="flex justify-evenly">
        <BigSquare title={traductions.title} subtitle={traductions.subTitle}>
        </BigSquare>
        <BigSquare icon={'/jairo.jpg'} title={traductions.title2} subtitle={traductions.subTitle2}>
        </BigSquare>
      </div>
    </div>
  );
}
