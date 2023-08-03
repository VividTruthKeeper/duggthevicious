import AnimateInView from "../AnimateInView";
import Container from "../Container";
import CtaBtn from "../CtaBtn";
import BenefitsList from "./BenefitsList";

const Benefits = () => {
  return (
    <section className="benefits bg-DARKBLUE py-[72px]">
      <Container className="flex justify-center">
        <div className="max-w-[940px] w-full flex flex-col gap-[70px]">
          <div className="flex justify-between gap-8 max-lg:flex-col items-center">
            <AnimateInView type="toRightOpacity" delay="0" margin="0%">
              <h2 className="font-SATOSHI font-bold text-WHITE text-[48px] max-lg:text-[44px] max-md:text-[36px] max-sm:text-[32px]">
                What You're Getting
              </h2>
            </AnimateInView>
            <BenefitsList />
          </div>
          <AnimateInView type="toBottomOpacity" margin="-35%">
            <div className="flex justify-center">
              <CtaBtn isWhite />
            </div>
          </AnimateInView>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
