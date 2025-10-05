

interface bigSquareProps {
    icon?: string;
    title: string;
    subtitle:string;
    children?: React.ReactNode;
}
const BigSquare = ({icon, title, subtitle, children} : bigSquareProps) => {
    const backgroundImage = {
        backgroundImage: `url(${icon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    return(
        <div className="bg-[#1d1d1d] rounded-xl flex flex-col"
        style={icon ? backgroundImage : {}}>
            <div className="h-[70%]">
                {children}
            </div>
            <div className="flex flex-col gap-4">
                <p className="backdrop-blur-md bg-black/30 p-2 rounded-xl text-[30px] text-center">{title}</p>
                <p className="backdrop-blur-md bg-black/30 p-2 rounded-xl text-[22px] text-center">{subtitle}</p>
            </div>
        </div>
    );

}

export default BigSquare;