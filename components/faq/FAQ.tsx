import AnimateInView from "../AnimateInView";
import Container from "../Container";
import FAQItem from "./FAQItem";
import { client } from "@/sanity/lib/client";
import { v4 } from "uuid";

export interface FAQ {
  name: string;
  description: string;
}

export interface FAQs {
  _id: string;
  _createdAt: string;
  title: string;
  items: FAQ[];
  cta: string;
}

const getData = async (): Promise<FAQs[]> => {
  const query = `*[_type == 'faq']`;
  const data = await client.fetch(query);
  return data;
};

const FAQ = async () => {
  const data = await getData();
  return (
    <section className="faq bg-LIGHTBLUE">
      <Container className="py-[100px] flex flex-col gap-16 max-lg:py-[80px] max-md:py-[48px] max-sm:py-[32px]">
        <AnimateInView type="toBottomOpacity" margin="-10%">
          <h2 className="font-SATOSHI font-bold text-DARKBLUE text-[46px] text-center max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px]">
            {data[0] ? data[0].title : null}
          </h2>
        </AnimateInView>
        <AnimateInView type="toTopOpacity" margin="-10%">
          <div className="flex flex-col rounded-[20px] overflow-hidden px-5 bg-FAQ max-md:px-3">
            {data[0]
              ? data[0].items.map((item) => <FAQItem name={item.name} description={item.description} key={v4()} />)
              : null}
          </div>
        </AnimateInView>
      </Container>
    </section>
  );
};

export default FAQ;
