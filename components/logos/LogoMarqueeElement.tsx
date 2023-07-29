import { IMarqueeLogo } from "@/types/marquee.types";
import Image from "next/image";

interface IProps {
  item: IMarqueeLogo;
}

const LogoMarqueeElement = ({ item }: IProps) => {
  return (
    <div className="marquee-element" style={item.size}>
      <Image
        src={item.url}
        alt="logo"
        unoptimized
        width={70}
        height={63}
        style={item.size}
      />
    </div>
  );
};

export default LogoMarqueeElement;
