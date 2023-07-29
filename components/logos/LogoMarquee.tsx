import { IMarqueeLogo } from "@/types/marquee.types";
import Marquee from "react-fast-marquee";
import LogoMarqueeElement from "./LogoMarqueeElement";
import { v4 } from "uuid";

const LogoMarquee = () => {
  const items: IMarqueeLogo[] = [
    {
      url: "/logo_1.svg",
      size: {
        width: 174,
        height: 63,
      },
    },
    {
      url: "/logo_2.svg",
      size: {
        width: 83,
        height: 63,
      },
    },
    {
      url: "/logo_3.svg",
      size: {
        width: 83,
        height: 63,
      },
    },
    {
      url: "/logo_4.svg",
      size: {
        width: 83,
        height: 63,
      },
    },
    {
      url: "/logo_5.svg",
      size: {
        width: 180,
        height: 63,
      },
    },
    {
      url: "/logo_6.svg",
      size: {
        width: 70,
        height: 63,
      },
    },
    {
      url: "/logo_7.svg",
      size: {
        width: 70,
        height: 63,
      },
    },
    {
      url: "/logo_8.svg",
      size: {
        width: 70,
        height: 63,
      },
    },
  ];
  return (
    <Marquee autoFill speed={50}>
      <div className="flex items-center gap-12 pr-12">
        {items.map((item) => (
          <LogoMarqueeElement item={item} key={v4()} />
        ))}
      </div>
    </Marquee>
  );
};

export default LogoMarquee;
