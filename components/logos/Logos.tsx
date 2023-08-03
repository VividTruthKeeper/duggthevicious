import AnimateInView from "../AnimateInView";
import LogoMarquee from "./LogoMarquee";

const Logos = () => {
  return (
    <section className="logos bg-LIGHTBLUE py-14 overflow-hidden">
      <AnimateInView type="toTopOpacity" delay="0" margin="0%">
        <LogoMarquee />
      </AnimateInView>
    </section>
  );
};

export default Logos;
