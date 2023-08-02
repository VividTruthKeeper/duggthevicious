import Container from "../Container";
import CtaBtn from "../CtaBtn";
import Offer from "./Offer";

const Services = () => {
  return (
    <section className="services bg-WHITE py-[72px]">
      <Container className="flex flex-col gap-9">
        <h2 className="text-DARKBLUE text-center font-bold font-SATOSHI text-[46px]">
          What We Offer
        </h2>
        <div className="flex flex-col gap-[10px]">
          <Offer
            initiallyOpen
            title="Tailored for you brand"
            description="Get a tailor-made website that perfectly reflect your brand and objectives."
            standout="Ensuring your utmost satisfaction with unlimited revisions until you're thrilled with the final result."
          />
          <Offer
            title="Fast and Secure"
            description="Fast-loading and secure solutions that will instill trust in your visitors."
            standout="Ensuring improved online reputation"
          />
          <Offer
            title="Interactive & Engaging User Experience"
            description="Interactive solutions that deliver captivating user experiences, leaving a lasting impression on your visitors."
            standout="Elevating engagement with seamless integration of multimedia, stunning visuals, videos and animations."
          />
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
