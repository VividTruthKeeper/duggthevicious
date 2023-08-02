import { IBenefit } from "@/types/benefit.types";
import Image from "next/image";

interface IProps {
  item: IBenefit;
}

const BenefitsItem = ({ item }: IProps) => {
  return (
    <div className="benefits-item py-6 px-8 flex gap-4 bg-WHITE_OPAQUE rounded-xl max-sm:py-5 max-sm:px-6">
      <Image
        src="/tick.svg"
        alt="tick"
        unoptimized
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
      <p className="font-INTER text-WHITE text-lg max-sm:text-[16px]">
        <span className="font-bold">{item.name + ": "}</span>
        <br />
        {item.text}
      </p>
    </div>
  );
};

export default BenefitsItem;
