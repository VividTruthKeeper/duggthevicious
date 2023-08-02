import Image from "next/image";
import Container from "../Container";

const About = () => {
  return (
    <section className="about bg-WHITE py-12 max-md:py-10 max-sm:py-8">
      <Container>
        <div className="rounded-[36px] bg-GRAYBLUE p-12 grid grid-cols-ABOUT items-center gap-[42px] max-lg:px-10 max-md:px-8 max-md:flex max-md:flex-col max-md:items-start max-sm:px-6">
          <div className="rounded-full overflow-hidden w-[240px] h-[240px] bg-[#8f8f8f] max-lg:w-[180px] max-lg:h-[180px] max-md:w-[140px] max-md:h-[140px] max-sm:w-[110px] max-sm:h-[110px]">
            <Image
              src="/Aydogdy.png"
              alt="Aydogdy"
              width={240}
              height={240}
              className="w-full h-[102%] object-contain"
              unoptimized
              priority
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-SATOSHI font-bold text-WHITE text-[46px] max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px]">
                Aydogdy
              </h2>
              <div className="flex items-center gap-1">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={27}
                  height={27}
                  className="h-[27px] w-[27px] object-contain"
                />
                <a
                  href="https://twitter.com/duggthevicious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-SATOSHI text-WHITE text-lg"
                >
                  @duggthevicious
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-SATOSHI text-WHITE text-lg max-md:text-base">
                About me/us.
              </p>
              <p className="font-SATOSHI text-WHITE text-lg max-md:text-base">
                I am Aydogdy. I am a web developer with 3 years of commercial
                experience. I will help you bring your digital vision to life
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
