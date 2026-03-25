"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

/* ─── Brand config ──────────────────────── */
const brands = [
  {
    id: "hp",
    name: "HP",
    accent: "#3B82F6",
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8.5l2-8H13l-2 8zm5 0h-2.5l2-8H18l-2 8z" />
      </svg>
    ),
  },
  {
    id: "epson",
    name: "Epson",
    accent: "#0EA5E9",
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 15H5v-2h3v2zm0-4H5V9h3v2zm5 4h-3v-2h3v2zm0-4h-3V9h3v2zm5 4h-3v-2h3v2zm0-4h-3V9h3v2z" />
      </svg>
    ),
  },
  {
    id: "brother",
    name: "Brother",
    accent: "#818CF8",
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z" />
      </svg>
    ),
  },
  {
    id: "canon",
    name: "Canon",
    accent: "#F43F5E",
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
    ),
  },
];

export default function HeroSection({ brandProducts = {} }) {
  const [activeBrand, setActiveBrand] = useState(null);
  const panelRef = useRef(null);

  /* Scroll suave até o painel quando abre */
  useEffect(() => {
    if (activeBrand && panelRef.current) {
      setTimeout(() => {
        panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 200);
    }
  }, [activeBrand]);

  const handleBrandClick = (brandId) => {
    setActiveBrand((prev) => (prev === brandId ? null : brandId));
  };

  const activeBrandData = brands.find((b) => b.id === activeBrand);
  const activeProducts = activeBrand ? brandProducts[activeBrand] || [] : [];

  return (
    <section
      className="relative overflow-hidden min-h-[100dvh] sm:min-h-[90vh] flex flex-col"
      style={{
        background: "linear-gradient(180deg, #1E1E24 0%, #121217 100%)",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background pattern sutil */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(200,210,230,0.6) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Watermark Logo enviada pelo usuário */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none sm:opacity-[0.06] -translate-y-24 sm:-translate-y-40">
        <Image
          src="/logo_apenas_imagem.png"
          alt="Watermark RJ Print"
          width={800}
          height={800}
          className="h-[60vh] w-auto object-contain sm:h-[80vh]"
          priority
        />
      </div>

      {/* Orb decorativo — acompanha a cor da marca ativa */}
      <div
        className="absolute -top-20 -right-20 z-0 h-56 w-56 rounded-full blur-[100px] opacity-15 transition-colors duration-700 sm:h-80 sm:w-80 sm:-top-32 sm:-right-32"
        style={{ background: activeBrandData?.accent || "#3B82F6" }}
        aria-hidden="true"
      />

      {/* ── Copy principal ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28 flex-1 flex flex-col w-full justify-center">
        <div className="text-center animate-fade-in">
          {/* Headline — mobile compact */}
          <h1
            id="hero-heading"
            className="mx-auto max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-[#E8ECF1] sm:max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Preço de Distribuidor{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              para sua Empresa.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#8690A2] sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Estoque completo de HP, Epson, Brother e Canon.{" "}
            <strong className="text-[#C5CCD8] font-semibold">
              Revendas, escritórios e empresas.
            </strong>
          </p>

          {/* Badges de Garantia — horizontal scroll no mobile */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 justify-start sm:justify-center sm:mt-8 sm:gap-4 sm:overflow-visible sm:flex-wrap scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { icon: "🏆", label: "Qualidade Original" },
              { icon: "💧", label: "Não Danifica" },
              { icon: "✅", label: "100% Testado" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex-shrink-0 flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#C5CCD8] backdrop-blur-sm sm:gap-1.5 sm:px-4 sm:py-2 sm:text-sm"
              >
                <span className="text-sm sm:text-lg">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Brand Navigation ── */}
        <nav
          className="mt-8 pb-8 animate-slide-up sm:mt-14 sm:pb-14"
          style={{ animationDelay: "300ms" }}
          aria-label="Navegação por marcas"
        >
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
            Selecione uma marca
          </p>

          {/* Grid 2x2 mobile, 4 col desktop */}
          <div className="mx-auto grid max-w-sm grid-cols-2 gap-2.5 sm:max-w-3xl sm:grid-cols-4 sm:gap-4">
            {brands.map((brand) => {
              const isActive = activeBrand === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => handleBrandClick(brand.id)}
                  className={`group relative flex items-center gap-2.5 rounded-xl p-3 text-[#D1D5DB] transition-all duration-300 active:scale-95 sm:flex-col sm:gap-2.5 sm:rounded-2xl sm:p-5
                    ${
                      isActive
                        ? "bg-white/10 border-2 shadow-lg"
                        : "bg-white/[0.04] border border-white/[0.06] hover:-translate-y-1 hover:border-[var(--brand-color)] hover:bg-white/[0.08] hover:text-white"
                    }
                  `}
                  style={{
                    "--brand-color": brand.accent,
                    borderColor: isActive ? brand.accent : undefined,
                    boxShadow: isActive
                      ? `0 4px 20px ${brand.accent}20`
                      : undefined,
                    minHeight: "48px",
                  }}
                  aria-label={`${isActive ? "Fechar" : "Ver"} linha ${brand.name}`}
                  aria-expanded={isActive}
                >
                  <span
                    className="transition-colors duration-300"
                    style={{ color: isActive ? brand.accent : undefined }}
                  >
                    {brand.logo}
                  </span>
                  <div className="flex flex-col items-start sm:items-center gap-0.5">
                    <span
                      className={`text-[11px] font-bold tracking-wide uppercase transition-colors duration-300 sm:text-sm ${
                        isActive ? "text-white" : "text-[#9CA3AF] group-hover:text-white"
                      }`}
                    >
                      Linha {brand.name}
                    </span>
                    <span
                      className={`flex items-center gap-0.5 text-[10px] font-medium leading-none tracking-wider transition-colors duration-300 sm:text-[10px] uppercase ${
                        isActive ? "text-white/70" : "text-[#4B5563] group-hover:text-[var(--brand-color)]"
                      }`}
                    >
                      {isActive ? "Fechar" : "Ver produtos"}
                      <svg
                        className={`h-2.5 w-2.5 transition-transform duration-300 sm:h-3 sm:w-3 ${
                          isActive ? "rotate-180" : "group-hover:translate-y-0.5"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* ── Painel Expansível de Produtos ── */}
      <div
        ref={panelRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: activeBrand ? "5000px" : "0px",
          opacity: activeBrand ? 1 : 0,
        }}
      >
        <div className="bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
            {/* Header da seção */}
            <div className="mb-6 text-center sm:mb-10">
              <span
                className="mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F7F8FA] sm:px-4 sm:py-1 sm:text-xs"
                style={{ background: activeBrandData?.accent || "#3B82F6" }}
              >
                {activeBrandData?.name}
              </span>
              <h2 className="mt-2 text-xl font-extrabold tracking-tight text-text-primary sm:mt-3 sm:text-3xl">
                Linha Completa{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      activeBrandData?.accent || "#3B82F6"
                    }, ${activeBrandData?.accent || "#3B82F6"}88)`,
                  }}
                >
                  {activeBrandData?.name}
                </span>
              </h2>
              <div
                className="mx-auto mt-3 h-0.5 w-12 rounded-full sm:mt-4 sm:h-1 sm:w-16"
                style={{ background: activeBrandData?.accent || "#3B82F6" }}
              />
            </div>

            {/* Grid de Produtos — 1 col mobile, 2 col sm, 4 col lg */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {activeProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  brandName={activeBrandData?.name || ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
