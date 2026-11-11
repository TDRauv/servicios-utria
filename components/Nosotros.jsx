
import Image from "next/image";

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="max-w-[1250px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto institucional */}
          <div>
            <span className="text-[#006B2E] font-bold tracking-[3px] text-sm uppercase">
              Conócenos
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-7">
              Soluciones técnicas con calidad y compromiso
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              En Servicios Utria S.A.C. nos especializamos en brindar
              soluciones integrales para los sectores de refrigeración,
              electrónica, electricidad y climatización, ofreciendo productos
              y servicios orientados a satisfacer las necesidades de nuestros
              clientes.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Contamos con repuestos y componentes para equipos de
              refrigeración y sistemas electrónicos, además de asesoría
              técnica especializada para ayudarte a encontrar la solución
              adecuada para cada necesidad.
            </p>

            <p className="text-gray-600 leading-8">
              Brindamos atención y envíos seguros a nivel nacional, con
              cobertura en Perú y Colombia, garantizando un servicio
              responsable, eficiente y orientado a la satisfacción del cliente.
            </p>
          </div>

          {/* Fotografía institucional */}
          <div className="relative w-full h-[450px] lg:h-[550px]">
            <Image
              src="/images/nosotros.jpeg"
              alt="Personal trabajando en una operación industrial"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
