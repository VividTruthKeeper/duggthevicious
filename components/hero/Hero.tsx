import Container from "../Container";
import CtaBtn from "../CtaBtn";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

interface Hero {
  _id: string;
  title: string;
  description: any;
  buttonName: string;
  buttonLink: string;
  _createdAt: string;
}

const getData = async (): Promise<Hero[]> => {
  const query = `*[_type == 'hero']`;
  const data = await client.fetch(query);
  return data;
};

const Hero = async () => {
  const data = await getData();

  return (
    <section className="hero bg-LIGHTBLUE">
      <Container className="flex flex-col py-12 items-center">
        <div className="max-w-[800px] w-full flex flex-col items-center gap-16 ">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="font-SATOSHI font-[900] text-[58px] text-center text-BLACK w-fit max-md:text-[50px] max-sm:text-[42px]">
              {data[0] ? data[0].title : null}
            </h2>
            <div className="font-SATOSHI font-medium text-[18px] text-center text-BLACK w-fit max-md:text-[16px] max-sm:text-[14px]">
              <PortableText value={data[0] ? data[0].description : ""}></PortableText>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center w-full">
            <CtaBtn />
            <Image
              src="/reviews.png"
              alt="reviews"
              width={300}
              height={43}
              className="object-contain w-[300px] h-[43px]"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
