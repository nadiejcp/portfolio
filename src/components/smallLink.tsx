import Image from "next/image";

const SmallLink = (icon: string, title: string) => {

    return(
        <div className="flex">
            <Image src={icon} alt={`Icono de ${title}`} width={20} height={20}></Image>
            <p>{title}</p>
        </div>
    );

}

export default SmallLink;