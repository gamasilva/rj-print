"use client";

import { useEffect, useState } from "react";

const CLIENT_LOGOS = [
  "Microsoft",
  "Petrobras",
  "Vale",
  "Localiza",
  "Itaú",
  "Bradesco",
  "Ambev",
  "Gerdau",
  "Globo",
  "Embraer"
];

export default function ClientsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-12 sm:py-20">
      {/* Orb decorativo conectando com a próxima seção */}
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
            Nossos Clientes
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
            Mais de 2.000 empresas confiam em nós
          </h2>
        </div>

        {/* CSS Marquee para logos com Fade nas Bordas (Mask) */}
        <div 
          className="relative mt-12 flex overflow-hidden w-full"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >

          {/* Wrapper da Animação */}
          <div
            className={`flex min-w-full shrink-0 gap-10 sm:gap-20 items-center justify-around ${mounted ? "animate-marquee" : ""}`}
            style={{ width: "max-content" }}
          >
            {CLIENT_LOGOS.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-white">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicata para criar loop infinito perfeito */}
          <div
            className={`flex min-w-full shrink-0 gap-10 sm:gap-20 items-center justify-around ${mounted ? "animate-marquee" : "hidden"}`}
            aria-hidden="true"
            style={{ width: "max-content" }}
          >
            {CLIENT_LOGOS.map((logo, index) => (
              <div 
                key={`dup-${index}`} 
                className="flex items-center justify-center opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-white">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
