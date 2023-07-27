import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  const date: Date = new Date();
  return (
    <footer className="footer bg-BLACK pt-[60px] pb-[30px]">
      <Container className="flex justify-between gap-10 pt-[30px] border-t border-solid border-WHITE">
        <Logo isWhite />
        <span className="text-WHITE text-sm font-INTER">
          {`Aydogdy The Dugg © ${date.getFullYear()}`}{" "}
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
