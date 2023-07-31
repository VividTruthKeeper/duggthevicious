import Final from "@/components/Final";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Logos from "@/components/logos/Logos";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="main">
      <h1 hidden>Aydogdy The Dugg</h1>
      <Header />
      <Hero />
      <Logos />
      <Benefits />
      <Services />
      <Final />
      <Footer />
    </main>
  );
}
