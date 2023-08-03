import React from "react";
import Container from "./Container";
import CtaBtn from "./CtaBtn";
import final from "@/settings/data/final";
import AnimateInView from "./AnimateInView";

const Final = () => {
  return (
    <section className="bg-DARKBLUE">
      <Container className="flex flex-col gap-9 pt-[100px] pb-9 items-center">
        <div className="flex flex-col gap-6 items-center">
          <AnimateInView type="toTopOpacity" margin="-10%">
            <h2 className="text-[#E8E5FF] font-SATOSHI font-[900] text-[58px] text-center max-lg:text-[50px] max-md:text-[46px] max-sm:text-[42px]">
              Ready To Start?
            </h2>
          </AnimateInView>
          <AnimateInView type="toTopOpacity" margin="-15%">
            <p className="text-WHITE font-INTER font-medium text-[22px] max-w-2xl text-center max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]">
              {final}
            </p>
          </AnimateInView>
        </div>
        <AnimateInView type="toTopOpacity" margin="-20%">
          <div className="flex justify-center">
            <CtaBtn isWhite />
          </div>
        </AnimateInView>
      </Container>
    </section>
  );
};

export default Final;
