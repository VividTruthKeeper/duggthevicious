import colors from "@/settings/ui/colors";

interface IProps {
  isWhite?: boolean;
}

const CtaBtn = ({ isWhite = false }: IProps) => {
  return (
    <a
      href="https://calendly.com/duggthevicious"
      target="__blank"
      className="flex justify-center items-center bg-BLACK py-5 px-11 rounded-xl font-SATOSHI text-WHITE text-center text-lg capitalize font-bold w-fit max-sm:w-full"
      style={isWhite ? { background: colors.WHITE, color: "#423E51" } : {}}
    >
      Book A Call Now →
    </a>
  );
};

export default CtaBtn;
