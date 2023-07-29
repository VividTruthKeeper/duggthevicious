import React from "react";
import Container from "./Container";
import CtaBtn from "./CtaBtn";
import final from "@/settings/data/final";

const Final = () => {
  return (
    <section className="bg-DARKBLUE">
      <Container className="flex flex-col gap-9 pt-[100px] pb-9 items-center">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[#E8E5FF] font-SATOSHI font-[900] text-[58px] text-center">
            Ready To Start?
          </h2>
          <p className="text-WHITE font-INTER font-medium text-[22px] max-w-2xl text-center">
            {final}
          </p>
        </div>
        <CtaBtn isWhite />
      </Container>
    </section>
  );
};

export default Final;
