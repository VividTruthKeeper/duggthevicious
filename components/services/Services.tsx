import AnimateInView from "../AnimateInView";
import Container from "../Container";
import CtaBtn from "../CtaBtn";
import Offer from "./Offer";
import { client } from "@/sanity/lib/client";
import services from "@/settings/data/services";
import { v4 } from "uuid";

export interface Service {
  name: string;
  description: string;
  benefit: string;
}

export interface Services {
  _id: string;
  _createdAt: string;
  title: string;
  items: Service[];
  cta: string;
}

const getData = async (): Promise<Services[]> => {
  const query = `*[_type == 'services']`;
  const data = await client.fetch(query);
  return data;
};

const Services = async () => {
  const data = await getData();
  return (
    <section className="services bg-WHITE py-[72px]">
      <Container className="flex flex-col gap-9">
        <AnimateInView type="toTopOpacity" margin="-10%">
          <h2 className="text-DARKBLUE text-center font-bold font-SATOSHI text-[46px] max-lg:text-[42px] max-md:text-[38px] max-sm:text-[32px]">
            {data[0] ? data[0].title : null}
          </h2>
        </AnimateInView>
        <div className="flex flex-col gap-[10px]">
          {data[0]
            ? data[0].items.map((service, index) => (
                <AnimateInView type={index % 2 === 0 ? "toRightOpacity" : "toLeftOpacity"} margin="-20%">
                  <Offer name={service.name} description={service.description} benefit={service.benefit} key={v4()} />
                </AnimateInView>
              ))
            : null}
        </div>
        <div className="flex flex-col gap-[54px] items-center">
          <AnimateInView type="toBottomOpacity" margin="-10%">
            <h3 className="font-SATOSHI font-bold text-GRAYBLUE text-[22px] text-center max-md:text-[20px] max-sm:text-[18px]">
              {data[0] ? data[0].cta : null}
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
