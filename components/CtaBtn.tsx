import { client } from "@/sanity/lib/client";
import colors from "@/settings/ui/colors";

interface IProps {
  isWhite?: boolean;
}

interface CTA {
  _id: string;
  name: string;
  link: string;
  _createdAt: string;
}

const getData = async (): Promise<CTA[]> => {
  const query = `*[_type == 'cta']`;
  const data = await client.fetch(query);
  return data;
};

const CtaBtn = async ({ isWhite = false }: IProps) => {
  const data = await getData();
  return (
    <a
      href={data[0] ? data[0].link : ""}
      target="__blank"
      className="flex justify-center items-center bg-BLACK py-5 px-11 rounded-xl font-SATOSHI text-WHITE text-center text-lg capitalize font-bold w-fit max-sm:w-full"
      style={isWhite ? { background: colors.WHITE, color: "#423E51" } : {}}
    >
      {data[0] ? data[0].name : ""}
    </a>
  );
};

export default CtaBtn;
