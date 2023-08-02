import Container from "../Container";
import CtaBtn from "../CtaBtn";
import BenefitsList from "./BenefitsList";

const Benefits = () => {
  return (
    <section className="benefits bg-DARKBLUE py-[72px]">
      <Container className="flex justify-center">
        <div className="max-w-[940px] w-full flex flex-col gap-[70px]">
          <div className="flex justify-between gap-8 max-lg:flex-col items-center">
            <h2 className="font-SATOSHI font-bold text-WHITE text-[48px] max-lg:text-[44px] max-md:text-[36px] max-sm:text-[32px]">
              What You're Getting
            </h2>
            <BenefitsList />
          </div>
          <div className="flex justify-center">
            <CtaBtn isWhite />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
