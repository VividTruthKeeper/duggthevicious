import services from "@/settings/data/services";
import Container from "../Container";
import CtaBtn from "../CtaBtn";
import Offer from "./Offer";
import { v4 } from "uuid";
import AnimateInView from "../AnimateInView";

const Services = () => {
  return (
    <section className="services bg-WHITE py-[72px]">
      <Container className="flex flex-col gap-9">
        <AnimateInView type="toTopOpacity" margin="-10%">
          <h2 className="text-DARKBLUE text-center font-bold font-SATOSHI text-[46px] max-lg:text-[42px] max-md:text-[38px] max-sm:text-[32px]">
            What We Offer
          </h2>
        </AnimateInView>
        <div className="flex flex-col gap-[10px]">
          {services.map((offer, index) => (
            <AnimateInView
              type={index % 2 === 0 ? "toRightOpacity" : "toLeftOpacity"}
              margin="-20%"
            >
              <Offer
                title={offer.title}
                description={offer.description}
                standout={offer.standout}
                key={v4()}
              />
            </AnimateInView>
          ))}
        </div>
        <div className="flex flex-col gap-[54px] items-center">
          <AnimateInView type="toBottomOpacity" margin="-10%">
            <h3 className="font-SATOSHI font-bold text-GRAYBLUE text-[22px] text-center max-md:text-[20px] max-sm:text-[18px]">
              Book a call with us and see which package suits you best.
            </h3>
          </AnimateInView>
          <AnimateInView type="toTopOpacity" margin="-10%">
            <div className="flex justify-center">
              <CtaBtn />
            </div>
          </AnimateInView>
        </div>
      </Container>
    </section>
  );
};

export default Services;
