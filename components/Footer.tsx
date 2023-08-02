import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  const date: Date = new Date();
  return (
    <footer className="footer bg-DARKBLUE pt-[60px] pb-[30px]">
      <Container className="flex justify-between gap-10 pt-[30px] border-t border-solid border-WHITE items-center max-md:flex-col max-md:gap-5">
        <Logo isWhite />
        <span className="text-WHITE text-lg font-INTER max-md:text-base">
          {`duggthevicious © ${date.getFullYear()}`}
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
