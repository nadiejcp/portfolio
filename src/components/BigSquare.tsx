

interface bigSquareProps {
    icon?: string;
    title: string;
    subtitle:string;
    width: string;
    blur: boolean;
    children?: React.ReactNode;
}
const BigSquare = ({icon, title, subtitle, width, blur, children} : bigSquareProps) => {
    const backgroundImage = {
        backgroundImage: `url(${icon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        width: {width},
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    return(
        <div className="bg-[#1d1d1d] rounded-xl flex flex-col w-full justify-center items-center"
        style={icon ? backgroundImage : {}}>
            <div className="h-[70%] mt-15 mb-3 ml-10 mr-10 flex justify-center gap-x-10">
                {children}
            </div>
            <div className="flex flex-col gap-4 w-fit">
                { blur ? <p className="backdrop-blur-md bg-black/30 p-2 rounded-xl text-[30px] text-center">{title}</p> :
                 <p className="p-2 rounded-xl text-[30px] text-center">{title}</p> }
                { blur ? <p className="backdrop-blur-md bg-black/30 p-2 rounded-xl text-[22px] text-center">{subtitle}</p> :
                <p className="p-2 rounded-xl text-[22px] text-center">{subtitle}</p>}
            </div>
        </div>
    );

}

export default BigSquare;