import Image from "next/image";
import Container from "../Container";
import CtaBtn from "../CtaBtn";
import headline from "@/settings/data/headline";

const Hero = () => {
  return (
    <section className="hero bg-LIGHTBLUE">
      <Container className="flex flex-col py-12 items-center">
        <div className="max-w-[800px] w-full flex flex-col items-center gap-16 ">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="font-SATOSHI font-[900] text-[58px] text-center text-BLACK w-fit max-md:text-[50px] max-sm:text-[42px]">
              Transform & Grow Your Business Now 🚀
            </h2>
            <p className="font-SATOSHI font-medium text-[18px] text-center text-BLACK w-fit max-md:text-[16px] max-sm:text-[14px]">
              {headline}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center w-full">
            <CtaBtn />
            <Image
              src="/reviews.png"
              alt="reviews"
              width={300}
              height={43}
              className="object-contain w-[300px] h-[43px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
