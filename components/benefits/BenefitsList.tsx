import { v4 } from "uuid";
import BenefitsItem from "./BenefitsItem";
import benefits from "@/settings/data/benefits";

const BenefitsList = () => {
  return (
    <div className="benefits-list flex flex-col gap-3 max-w-[540px] w-full">
      {benefits.map((item) => (
        <BenefitsItem item={item} key={v4()} />
      ))}
    </div>
  );
};

export default BenefitsList;
