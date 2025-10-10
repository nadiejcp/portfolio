import Image from "next/image";
import Link from "next/link";

interface SmallLinkProps {
    icon?: string;
    title: string;
    link?: string
}

const content = (icon:string | undefined, title: string) => {
    return (
        <div className="p-1 pl-3 pr-3 w-fit flex justify-center items-center gap-2 bg-[radial-gradient(circle,#48494a99,#26262799)] border border-solid border-[#ffffff1a] rounded-[40px] hover:border-white">
            {icon && <Image src={icon} alt={`Icono de ${title}`} width={30} height={30}></Image>}
            <p>{title}</p>
        </div>
    );
}

const SmallLink = ({ icon, title, link }: SmallLinkProps) => {
    const innerContent = content(icon, title);
    if (link) {
        return (
            <Link href={link} target="_blank" className="cursor-pointer">{content(icon, title)}</Link>
        );
    }
    return (innerContent);
}

export default SmallLink;