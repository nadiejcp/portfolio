import Image from "next/image";

const bigSquare = (image: boolean, icon: string, title: string, subtitle:string) => {

    return(
        <>
            {image??<Image src={icon} alt={`Icono de ${title}`} width={20} height={20}></Image>}
            <p>{title}</p>
            <p>{subtitle}</p>
        </>
    );

}

export default bigSquare;