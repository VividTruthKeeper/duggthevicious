import AnimateInView from "../AnimateInView";
import { Benefits } from "./Benefits";
import BenefitsItem from "./BenefitsItem";
import { v4 } from "uuid";

interface IProps {
  items: Benefits["items"];
}

const BenefitsList = ({ items }: IProps) => {
  return (
    <div className="benefits-list flex flex-col gap-3 max-w-[540px] w-full max-sm:max-w-none">
      {items.map((item, index) => (
        <AnimateInView type="toTopOpacity" margin={`-${10 + index * 10}%`}>
          <BenefitsItem item={item} key={v4()} />
        </AnimateInView>
      ))}
    </div>
  );
};

export default BenefitsList;
