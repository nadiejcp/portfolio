

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
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    return(
        <div className="bg-brand-dark/40 backdrop-blur-3xl border border-white/20 rounded-xl flex flex-col w-full justify-center items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:bg-brand-dark/60 relative overflow-hidden"
        style={icon ? backgroundImage : {}}>
            <div className="h-[70%] mt-15 mb-3 ml-10 mr-10 flex justify-center gap-x-10">
                {children}
            </div>
            <div className="flex flex-col gap-4 w-fit">
                { blur ? <p className="backdrop-blur-xl bg-black/40 p-2 rounded-xl text-[30px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">{title}</p> :
                 <p className="p-2 rounded-xl text-[30px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">{title}</p> }
                { blur ? <p className="backdrop-blur-xl bg-black/40 p-2 rounded-xl text-[22px] text-center font-semibold text-brand-teal">{subtitle}</p> :
                <p className="p-2 rounded-xl text-[22px] text-center font-semibold text-brand-teal">{subtitle}</p>}
            </div>
        </div>
    );

}

export default BigSquare;