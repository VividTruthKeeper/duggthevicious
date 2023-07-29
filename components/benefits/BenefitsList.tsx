import { v4 } from "uuid";
import BenefitsItem from "./BenefitsItem";

const BenefitsList = () => {
  const benefits = [
    "Put your main benefit here. Outline exactly how it will help your client.",
    "Put your main benefit here. Outline exactly how it will help your client.",
    "Put your main benefit here. Outline exactly how it will help your client.",
  ];
  return (
    <div className="benefits-list flex flex-col gap-3 max-w-[540px] w-full">
      {benefits.map((item) => (
        <BenefitsItem item={item} key={v4()} />
      ))}
    </div>
  );
};

export default BenefitsList;
