'use client';

import Image from 'next/image';

type SmallSquareProps = {
  title?: string;
  subtitle: string;
  icon?: string;
  link?: string;
};

export default function SmallSquare({ title, subtitle, icon, link }: SmallSquareProps) {
    return(
      <div
        className="p-7 w-[230px] flex flex-col items-center rounded-3xl bg-[radial-gradient(circle_farthest-corner_at_0%_0%,#48494a,#262627)] shadow-md shadow-white/50 hover:-translate-y-3 hover:bg-[#222] cursor-pointer"
        onClick={
          link
            ? () => {
                const a = document.createElement('a');
                a.href = `/${link}`;
                a.download = link;
                a.click();
              }
            : undefined
        }
      >
        {icon ? <Image src={icon} alt={'Icon for Social Network'} width={50} height={50}/> 
        : <p className="text-[48px] bg-gradient-to-br from-white via-gray-500 to-white bg-clip-text text-transparent">{title}</p>}
        <p className="text-[18px]">{subtitle}</p>
      </div>
    );
}
