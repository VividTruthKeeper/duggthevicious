import Image from "next/image";

interface IProps {
  isWhite?: boolean;
}

const Logo = ({ isWhite = false }: IProps) => {
  return (
    <div className="logo">
      <Image
        src={isWhite ? "/logo.svg" : "/logo-black.svg"}
        alt="logo"
        height={65}
        width={370}
        unoptimized
        className="w-[370px] h-[65px] object-contain max-md:w-[300px] max-md:h-[60px] max-sm:w-[240px] max-sm:h-[55px]"
      />
    </div>
  );
};

export default Logo;
