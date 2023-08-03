import { v4 } from "uuid";
import BenefitsItem from "./BenefitsItem";
import benefits from "@/settings/data/benefits";
import AnimateInView from "../AnimateInView";

const BenefitsList = () => {
  return (
    <div className="benefits-list flex flex-col gap-3 max-w-[540px] w-full max-sm:max-w-none">
      {benefits.map((item, index) => (
        <AnimateInView type="toTopOpacity" margin={`-${10 + index * 10}%`}>
          <BenefitsItem item={item} key={v4()} />
        </AnimateInView>
      ))}
    </div>
  );
};

export default BenefitsList;
