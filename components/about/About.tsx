import Image from "next/image";
import Container from "../Container";

const About = () => {
  return (
    <section className="about bg-WHITE py-12">
      <Container>
        <div className="rounded-[36px] bg-GRAYBLUE p-12 flex items-center gap-[42px]">
          <div className="rounded-full overflow-hidden w-[240px] h-[240px] bg-[#8f8f8f]">
            <Image
              src="/Aydogdy.png"
              alt="Aydogdy"
              width={240}
              height={240}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-SATOSHI font-bold text-WHITE text-[45px]">
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
              <p className="font-SATOSHI text-WHITE text-lg">About me/us.</p>
              <p className="font-SATOSHI text-WHITE text-lg">
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
