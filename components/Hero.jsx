
"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const slides = [
  {
    subtitle: "SERVICIOS UTRIA",
    title: "Mantenimiento y Servicio",
    description:
      "Servicio especializado de mantenimiento, diagnóstico y reparación de sistemas de refrigeración industrial, garantizando el correcto funcionamiento de chillers y equipos HVAC. Nuestro personal técnico realiza intervenciones seguras y eficientes.",
    image: "/images/hero-1.jpeg",
  },
  {
    subtitle: "REFRIGERACIÓN INDUSTRIAL",
    title: "Soluciones para tus equipos",
    description:
      "Mantenimiento preventivo y correctivo de sistemas de refrigeración industrial, buscando conservar el rendimiento y la confiabilidad de tus instalaciones.",
    image: "/images/hero-2.jpeg",
  },
  {
    subtitle: "SERVICIOS ESPECIALIZADOS",
    title: "Experiencia y compromiso",
    description:
      "Soluciones técnicas en climatización, ventilación y mantenimiento mecánico para hogares, negocios y empresas.",
    image: "/images/hero-3.jpeg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="inicio"
      className="relative w-full h-[600px] md:h-[650px] overflow-hidden bg-gray-900"
    >
      {/* IMAGEN DE FONDO */}
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
      ))}

      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-8 h-full flex items-center">

        <div className="max-w-[720px] text-white">

          <span className="text-green-400 font-bold tracking-[4px] text-sm">
            {slide.subtitle}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
            {slide.title}
          </h1>

          <p className="text-base md:text-lg leading-8 text-gray-100 max-w-[650px]">
            {slide.description}
          </p>

          <a
            href="https://wa.me/519XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-9 px-8 py-4 bg-[#00551F] hover:bg-[#006B2E] text-white font-semibold uppercase text-sm transition-colors"
          >
            Solicitar cotización
            <ArrowUpRight size={19} />
          </a>

        </div>
      </div>

      {/* CONTROLES */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">

        <span className="text-white text-sm font-semibold">
          0{current + 1} / 0{slides.length}
        </span>

        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="w-11 h-11 border border-white/60 text-white flex items-center justify-center hover:bg-white hover:text-[#006B2E] transition"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="w-11 h-11 border border-white/60 text-white flex items-center justify-center hover:bg-white hover:text-[#006B2E] transition"
        >
          <ArrowRight size={20} />
        </button>

      </div>

      {/* INDICADORES */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ir a diapositiva ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
