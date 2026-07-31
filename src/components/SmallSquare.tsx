'use client';

import Image from 'next/image';

type SmallSquareProps = {
  title?: string;
  subtitle: string;
  icon?: string;
  link?: string;
  openLink?: string;
};

export default function SmallSquare({ title, subtitle, icon, link, openLink }: SmallSquareProps) {
    return(
      <div
        className="p-7 w-[230px] flex flex-col items-center rounded-3xl bg-[radial-gradient(circle_farthest-corner_at_0%_0%,rgba(72,73,74,0.4),rgba(38,38,39,0.4))] backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-3 hover:bg-brand-dark-alt/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer"
        onClick={
          link
            ? () => {
                const a = document.createElement('a');
                a.href = `./${link}`;
                a.download = link;
                a.click();
              }
            : ( openLink ? () => window.open(openLink) : undefined)
        }
      >
        {icon ? <Image src={icon} alt={'Icon for Social Network'} width={50} height={50}/> 
        : <p className="text-[48px] font-bold bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-pink bg-clip-text text-transparent">{title}</p>}
        <p className="text-[18px] text-center font-medium text-brand-purple-light mt-2">{subtitle}</p>
      </div>
    );
}
