import AnimateInView from "../AnimateInView";
import BenefitsList from "./BenefitsList";
import Container from "../Container";
import CtaBtn from "../CtaBtn";
import { client } from "@/sanity/lib/client";
import revalidationTime from "@/revalidationTime";

export interface Benefit {
  name: string;
  description: string;
}

export interface Benefits {
  _id: string;
  _createdAt: string;
  title: string;
  items: Benefit[];
}

const getData = async (): Promise<Benefits[]> => {
  const query = `*[_type == 'benefits']`;
  const data = await client.fetch(
    query,
    {},
    {
      next: {
        revalidate: revalidationTime,
      },
    },
  );
  return data;
};

const Benefits = async () => {
  const data = await getData();
  return (
    <section className="benefits bg-DARKBLUE py-[72px]">
      <Container className="flex justify-center">
        <div className="max-w-[940px] w-full flex flex-col gap-[70px]">
          <div className="flex justify-between gap-8 max-lg:flex-col items-center">
            <AnimateInView type="toRightOpacity" delay="0" margin="0%">
              <h2 className="font-SATOSHI font-bold text-WHITE text-[48px] max-lg:text-[44px] max-md:text-[36px] max-sm:text-[32px]">
                {data[0] ? data[0].title : null}
              </h2>
            </AnimateInView>
            {data[0] ? <BenefitsList items={data[0].items} /> : null}
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
