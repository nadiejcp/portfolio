'use client';
type SmallSquareProps = {
  title: string;
  subtitle: string;
};

export default function SmallSquare({ title, subtitle }: SmallSquareProps) {
    return(
        <div className="p-7 w-[230px] flex flex-col items-center rounded-3xl bg-[radial-gradient(circle_farthest-corner_at_0%_0%,#48494a,#262627)]">
          <p className="text-[48px] bg-gradient-to-br from-white via-gray-500 to-white bg-clip-text text-transparent">{title}</p>
          <p className="text-[18px]">{subtitle}</p>
        </div>
    );
}
