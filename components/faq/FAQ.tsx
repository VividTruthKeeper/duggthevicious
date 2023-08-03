import faq from "@/settings/data/faq";
import Container from "../Container";
import FAQItem from "./FAQItem";
import { v4 } from "uuid";
import AnimateInView from "../AnimateInView";

const FAQ = () => {
  return (
    <section className="faq bg-LIGHTBLUE">
      <Container className="py-[100px] flex flex-col gap-16 max-lg:py-[80px] max-md:py-[48px] max-sm:py-[32px]">
        <AnimateInView type="toBottomOpacity" margin="-10%">
          <h2 className="font-SATOSHI font-bold text-DARKBLUE text-[46px] text-center max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px]">
            FAQ
          </h2>
        </AnimateInView>
        <AnimateInView type="toTopOpacity" margin="-10%">
          <div className="flex flex-col rounded-[20px] overflow-hidden px-5 bg-FAQ max-md:px-3">
            {faq.map((item) => (
              <FAQItem
                question={item.question}
                answer={item.answer}
                key={v4()}
              />
            ))}
          </div>
        </AnimateInView>
      </Container>
    </section>
  );
};

export default FAQ;
