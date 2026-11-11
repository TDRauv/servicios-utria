
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const servicios = [
  "Mantenimiento de sistemas de refrigeración",
  "Mantenimientos preventivos",
  "Mantenimientos correctivos",
  "Torres de enfriamiento",
  "Chillers",
  "Sistemas de ventilación",
  "Mantenimientos mecánicos",
  "Sistemas HVAC",
  "Sistemas de ablandamiento",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const whatsapp = "https://wa.me/519XXXXXXXX";

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">

      <div className="max-w-[1450px] mx-auto px-6 lg:px-12">

        <div className="flex items-center justify-between min-h-[110px]">

          {/* LOGO */}
          <Link href="/" onClick={closeMenus}>
            <Image
                src="/images/logo-utria.png"
                alt="Servicios Utria S.A.C."
                width={150}
                height={150}
                priority
                className="object-contain w-[125px] h-[125px]"
            />
          </Link>

          {/* BOTÓN MÓVIL */}
          <button
            className="lg:hidden text-[#006B2E]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* NAVEGACIÓN */}
          <nav
            className={`
              ${menuOpen ? "flex" : "hidden"}
              lg:flex
              flex-col lg:flex-row
              absolute lg:static
              top-full left-0 w-full lg:w-auto
              bg-white
              px-6 lg:px-0
              pb-6 lg:pb-0
              items-stretch lg:items-center
              gap-5 lg:gap-10
              shadow-md lg:shadow-none
            `}
          >

            <Link
              href="#inicio"
              onClick={closeMenus}
              className="nav-link active"
            >
              Inicio
            </Link>

            <Link
              href="#nosotros"
              onClick={closeMenus}
              className="nav-link"
            >
              Nosotros
            </Link>

            {/* SERVICIOS */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="nav-link flex items-center gap-2"
                aria-expanded={servicesOpen}
              >
                Servicios
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MENÚ DESPLEGABLE */}
              <div
                className={`
                  ${servicesOpen ? "block" : "hidden"}
                  lg:group-hover:block
                  lg:absolute
                  lg:top-full
                  lg:left-0
                  lg:w-[340px]
                  bg-white
                  lg:shadow-xl
                  lg:border
                  border-gray-100
                  lg:rounded-md
                  py-3
                `}
              >
                {servicios.map((servicio, index) => (
                  <Link
                    key={index}
                    href="#servicios"
                    onClick={closeMenus}
                    className="block px-5 py-3 text-sm text-gray-700 hover:text-[#006B2E] hover:bg-gray-50 transition-colors"
                  >
                    {servicio}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#contacto"
              onClick={closeMenus}
              className="nav-link"
            >
              Contacto
            </Link>

            {/* BOTÓN MÓVIL WHATSAPP */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden bg-[#00551F] text-white text-center px-5 py-4 rounded font-semibold uppercase text-sm"
            >
              Solicita tu cotización
            </a>

          </nav>

          {/* BOTÓN COTIZACIÓN DESKTOP */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center bg-[#00551F] hover:bg-[#006B2E] text-white px-8 py-4 rounded font-semibold text-sm uppercase transition-colors"
          >
            Solicita tu cotización
          </a>

        </div>
      </div>
    </header>
  );
}
