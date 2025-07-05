
import Image from "next/image";

const iconRender = (text: string) => {
    return (
        <div key={text} style={{display:'flex', alignItems:'center'}}>
            <Image src={`/${text.toLowerCase()}.svg`} alt='Inicio' width={20} height={20}></Image>
            <p style={{color:'#fff', paddingLeft: '10px'}}>{text}</p>
        </div>
    );
}

const sideBar = () => {
    const icons = ['Inicio', 'Proyectos']
    const icons2 = ['Sobre mi', 'Contactame']
    return (
        <div style={{width: '10%'}}>
            <Image src='/avatar.jpg' alt='Picture of Jairo Cabrera' width={500} height={300}></Image>
            {icons.map(iconRender)}
            <div>Line</div>
            {icons2.map(iconRender)}
        </div>
    );
}

export default sideBar;