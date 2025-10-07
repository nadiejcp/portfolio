
interface MedallionProps {
  title: string,
  subtitle: string
}

const Medallion = ({title, subtitle}: MedallionProps) => {
  return (
    <div className="z-20 bg-[radial-gradient(circle_farthest-corner_at_0%_0%,#48494a,#262627)] rounded-full flex flex-col justify-center items-center w-[200px] min-w-[150px] h-[200px] min-h-[150px] relative shadow-inner-custom self-center">
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};

export default Medallion;