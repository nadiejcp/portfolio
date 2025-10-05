import Image from "next/image";

const smallLink = (icon: string, title: string) => {

    return(
        <>
            <Image src={icon} alt={`Icono de ${title}`} width={20} height={20}></Image>
            <p>{title}</p>
        </>
    );

}

export default smallLink;