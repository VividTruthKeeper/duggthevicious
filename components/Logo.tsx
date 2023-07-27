import colors from "@/settings/ui/colors";
import Image from "next/image";

interface IProps {
  isWhite?: boolean;
}

const Logo = ({ isWhite = false }: IProps) => {
  return (
    <div className="logo flex items-center gap-2">
      <Image
        src={isWhite ? "/logo.png" : "/logo-black.png"}
        alt="logo"
        height={40}
        width={40}
        unoptimized
        className="w-[40px] h-[40px] object-contain"
      />
      <h2
        className="text-2xl font-SATOSHI font-[900] text-BLACK leading-normal"
        style={isWhite ? { color: colors.WHITE } : {}}
      >
        duggthevicious
      </h2>
    </div>
  );
};

export default Logo;
