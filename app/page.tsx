import Final from "@/components/Final";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Logos from "@/components/logos/Logos";

export default function Home() {
  return (
    <main className="main">
      <h1 hidden>Aydogdy The Dugg</h1>
      <Header />
      <Hero />
      <Logos />
      <Final />
      <Footer />
    </main>
  );
}
