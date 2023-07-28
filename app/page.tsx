import Final from "@/components/Final";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="main">
      <h1 hidden>Aydogdy The Dugg</h1>
      <Header />
      <Hero />
      <Final />
      <Footer />
    </main>
  );
}
