import Container from "../Container";
import CtaBtn from "../CtaBtn";
import Offer from "./Offer";

const Services = () => {
  return (
    <section className="services bg-WHITE py-[72px]">
      <Container className="flex flex-col gap-9">
        <h2 className="text-DARKBLUE text-center font-bold font-SATOSHI text-[46px]">
          What We order
        </h2>
        <div className="flex flex-col gap-[10px]">
          <Offer initiallyOpen />
          <Offer />
          <Offer />
        </div>
        <div className="flex flex-col gap-[54px] items-center">
          <h3 className="font-SATOSHI font-bold text-GRAYBLUE text-[22px]">
            Book a call with us and see which package suits you best.
          </h3>
          <CtaBtn />
        </div>
      </Container>
    </section>
  );
};

export default Services;
