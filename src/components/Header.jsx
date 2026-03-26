"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5521964338875";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, gostaria de fazer uma cotação de cartuchos e toners no atacado."
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-center w-full px-4 pt-6 pointer-events-none">
      <header
        className={`pointer-events-auto transition-[background,box-shadow,padding,border] duration-300 rounded-full border border-white/10 ${
          scrolled 
            ? "backdrop-blur-xl shadow-2xl py-2 px-6 sm:px-8 bg-[#1a1a1a]/90" 
            : "backdrop-blur-md shadow-lg py-3 px-6 sm:px-8 bg-[#1a1a1a]/60"
        }`}
      >
        <div className="flex h-12 items-center justify-center gap-6 sm:gap-8 sm:h-14">
          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-6 sm:gap-8">
            <a href="#marcas" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200">Produtos</a>
            <a href="#quem-somos" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200">Quem Somos</a>
            <a href="#logistica" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200">Entrega</a>
            <a href="#depoimentos" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200">Clientes</a>
            <a href="#beneficios" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200">Diferenciais</a>
          </nav>

          {/* CTA WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-2.5 text-sm font-bold text-[#F7F8FA] shadow-lg transition-[background,transform,box-shadow] duration-200 hover:bg-whatsapp-dark hover:shadow-whatsapp/30 hover:scale-105 active:scale-95 sm:text-base"
            aria-label="Fazer cotação pelo WhatsApp"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.113 1.519 5.845L.052 23.548a.5.5 0 00.612.612l5.703-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.33-1.546.5.5 0 00-.396-.07l-3.547.912.912-3.547a.5.5 0 00-.07-.396A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            <span className="hidden sm:inline">Fazer Cotação</span>
            <span className="sm:hidden">Cotar</span>
          </a>
        </div>
      </header>
    </div>
  );
}
