
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros"; 

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <Nosotros />

      <section
        id="nosotros"
        className="min-h-[400px] flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-[#006B2E]">
          Nosotros
        </h2>
      </section>

      <section id="servicios" className="min-h-[300px]">
      </section>

      <section id="contacto" className="min-h-[300px]">
      </section>
    </main>
  );
}

