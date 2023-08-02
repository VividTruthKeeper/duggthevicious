import Container from "../Container";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <section className="faq bg-LIGHTBLUE">
      <Container className="py-[100px] flex flex-col gap-16 max-lg:py-[80px] max-md:py-[48px] max-sm:py-[32px]">
        <h2 className="font-SATOSHI font-bold text-DARKBLUE text-[46px] text-center max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px]">
          FAQ
        </h2>
        <div className="flex flex-col rounded-[20px] overflow-hidden px-5 bg-FAQ">
          <FAQItem />
          <FAQItem />
          <FAQItem />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
