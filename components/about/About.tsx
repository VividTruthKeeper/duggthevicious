import AnimateInView from "../AnimateInView";
import Container from "../Container";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import imgUrl from "@/utils/imgUrl";

export interface About {
  _id: string;
  _createdAt: string;
  name: string;
  link: string;
  handle: string;
  subtitle: string;
  description: string;
  image: SanityImageSource;
}

const getData = async (): Promise<About[]> => {
  const query = `*[_type == 'about']`;
  const data = await client.fetch(query);
  return data;
};

const About = async () => {
  const data = await getData();
  return (
    <section className="about bg-WHITE py-12 max-md:py-10 max-sm:py-8">
      <Container>
        <div className="rounded-[36px] bg-GRAYBLUE p-12 grid grid-cols-ABOUT items-center gap-[42px] max-lg:px-10 max-md:px-8 max-md:flex max-md:flex-col max-md:items-start max-sm:px-6 overflow-hidden">
          <AnimateInView type="toRightOpacity" margin="-10%">
            <div className="rounded-full overflow-hidden w-[240px] h-[240px] bg-[#8f8f8f] max-lg:w-[180px] max-lg:h-[180px] max-md:w-[140px] max-md:h-[140px] max-sm:w-[110px] max-sm:h-[110px]">
              <Image
                src={data[0] ? imgUrl(data[0].image).url() : ""}
                alt="Aydogdy"
                width={240}
                height={240}
                className="w-full h-[102%] object-contain"
                unoptimized
                priority
              />
            </div>
          </AnimateInView>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
              <AnimateInView type="toTopOpacity" margin="-10%">
                <h2 className="font-SATOSHI font-bold text-WHITE text-[46px] max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px]">
                  {data[0] ? data[0].name : null}
                </h2>
              </AnimateInView>
              <AnimateInView type="toTopOpacity" margin="-13%">
                <div className="flex items-center gap-1">
                  <Image
                    src="/twitter.svg"
                    alt="twitter"
                    width={27}
                    height={27}
                    className="h-[27px] w-[27px] object-contain"
                  />
                  <a
                    href={data[0] ? data[0].link : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-SATOSHI text-WHITE text-lg"
                  >
                    @{data[0] ? data[0].handle : null}
                  </a>
                </div>
              </AnimateInView>
            </div>
            <div className="flex flex-col gap-3">
              <AnimateInView type="toTopOpacity" margin="-16%">
                <p className="font-SATOSHI text-WHITE text-lg max-md:text-base">{data[0] ? data[0].subtitle : null}</p>
              </AnimateInView>
              <AnimateInView type="toTopOpacity" margin="-19%">
                <p className="font-SATOSHI text-WHITE text-lg max-md:text-base">
                  {data[0] ? data[0].description : null}
                </p>
              </AnimateInView>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
