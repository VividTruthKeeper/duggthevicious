import Container from "../Container";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <section className="faq bg-LIGHTBLUE">
      <Container className="py-[100px] flex flex-col gap-16">
        <h2 className="font-SATOSHI font-bold text-DARKBLUE text-[46px] text-center">
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
