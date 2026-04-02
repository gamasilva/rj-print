"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// ProductCard — chunk separado, só hidratado quando o painel de marca abre
const ProductCard = dynamic(() => import("./ProductCard"), { ssr: false });

// PromoCarousel — componente mais pesado (carousel + modal + Image).
// ssr:false pois usa animações e estado local que não fazem sentido no servidor.
const PromoCarousel = dynamic(() => import("./PromoCarousel"), { ssr: false });


const brands = [
  {
    id: "epson",
    name: "Epson",
    accent: "#00559E",
    gradient: "from-[#00559E] to-[#0EA5E9]",
    bgLight: "bg-sky-50",
    borderActive: "border-[#0EA5E9]",
    logo: (
      <Image
        src="/epson_logo.png"
        alt="Logo Epson"
        width={100}
        height={40}
        className="h-8 w-auto sm:h-10 object-contain drop-shadow-sm"
        loading="lazy"
      />
    ),
  },
  {
    id: "canon",
    name: "Canon",
    accent: "#CC0000",
    gradient: "from-[#CC0000] to-[#F43F5E]",
    bgLight: "bg-red-50",
    borderActive: "border-[#F43F5E]",
    logo: (
      <Image
        src="/logo_canon.png"
        alt="Logo Canon"
        width={100}
        height={40}
        className="h-8 w-auto sm:h-10 object-contain drop-shadow-sm"
        loading="lazy"
      />
    ),
  },
  {
    id: "brother",
    name: "Brother",
    accent: "#CC0000",
    gradient: "from-[#CC0000] to-[#FF6B35]",
    bgLight: "bg-orange-50",
    borderActive: "border-[#FF6B35]",
    logo: (
      <Image
        src="/logo_brother.png"
        alt="Logo Brother"
        width={120}
        height={48}
        // 👇 AQUI QUE VOCÊ EDITA O ZOOM: a propriedade scale-150
        className="h-10 w-auto sm:h-12 scale-400 object-contain drop-shadow-sm"
        loading="lazy"
      />
    ),
  },
  {
    id: "hp",
    name: "HP",
    accent: "#0096D6",
    gradient: "from-[#0096D6] to-[#00B3FF]",
    bgLight: "bg-blue-50",
    borderActive: "border-[#0096D6]",
    logo: (
      <Image
        src="/logo_hp.png"
        alt="Logo HP"
        width={100}
        height={40}
        className="h-8 w-auto sm:h-10 object-contain drop-shadow-sm"
        loading="lazy"
      />
    ),
  },
];

export default function BrandsNavSection({ brandProducts = {} }) {
  const [activeBrand, setActiveBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const panelRef = useRef(null);

  const allProducts = Object.keys(brandProducts).reduce((acc, brandId) => {
    const productsWithBrand = brandProducts[brandId].map(p => ({
      ...p,
      brandId
    }));
    return [...acc, ...productsWithBrand];
  }, []);

  const loweredSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = loweredSearch
    ? allProducts.filter(product => {
      const titleMatch = product.name.toLowerCase().includes(loweredSearch);
      const descMatch = product.description.toLowerCase().includes(loweredSearch);
      const tagsMatch = product.tags.some(tag => tag.toLowerCase().includes(loweredSearch));
      return titleMatch || descMatch || tagsMatch;
    })
    : [];

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
    <section id="marcas" className="relative pt-32 pb-16 sm:py-24 bg-transparent">
      {/* Decorative elements — contidos dentro da section */}
      <div className="absolute top-0 left-0 w-72 h-72 max-w-[80vw] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 max-w-[80vw] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        {/* ── Carousel de Promoções ─────────────────────── */}
        <div className="mb-10 sm:mb-14">
          <PromoCarousel />
        </div>

        {/* Search Bar - Highlighted */}
        <div className="mx-auto max-w-3xl mb-12 sm:mb-16 relative group z-20">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-theme-accent to-theme-accent-light opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
          <div className="relative flex items-center bg-theme-bg-card/80 backdrop-blur-md rounded-2xl border border-theme-border shadow-2xl overflow-hidden">
            <div className="pl-5 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-theme-accent group-focus-within:text-theme-accent-light transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por produto ou impressora (ex: Deskjet 1516)..."
              className="block w-full pl-4 pr-12 py-5 sm:py-6 bg-transparent border-none placeholder-theme-text-muted text-theme-text-primary focus:outline-none focus:ring-0 text-base sm:text-xl font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 p-2 flex items-center justify-center text-theme-text-muted hover:text-theme-text-primary transition-colors bg-theme-bg-glass rounded-full hover:bg-theme-bg-start"
                aria-label="Limpar busca"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {searchTerm ? (
          /* Search Results */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-black text-theme-text-primary sm:text-3xl">
                {filteredProducts.length > 0 ? "Resultados da Busca" : "Nenhum resultado encontrado"}
              </h3>
              <p className="mt-3 text-base sm:text-lg text-theme-text-secondary">
                {filteredProducts.length > 0
                  ? `Encontramos ${filteredProducts.length} ${filteredProducts.length === 1 ? "produto" : "produtos"} para "${searchTerm}"`
                  : `Não encontramos nada parecido com "${searchTerm}". Tente buscar pelo modelo da sua impressora ou cartucho.`}
              </p>
            </div>
            {filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => {
                  const brandData = brands.find(b => b.id === product.brandId);
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      brandName={brandData?.name || ""}
                    />
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Default View (Grid de Marcas) */
          <>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-theme-accent/20 bg-theme-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-theme-accent mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-theme-accent animate-pulse" />
                Catálogo Completo
              </span>
              <h2 className="text-3xl font-black tracking-tight text-theme-text-primary sm:text-4xl lg:text-5xl">
                Selecione uma{" "}
                <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                  marca
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-theme-text-secondary sm:text-lg">
                Todas as linhas com preço de distribuidor e estoque imediato.
              </p>
            </div>

            <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 sm:max-w-3xl sm:grid-cols-3 sm:gap-6">
              {brands.map((brand) => {
                const isActive = activeBrand === brand.id;
                return (
                  <button
                    key={brand.id}
                    onClick={() => handleBrandClick(brand.id)}
                    className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-6 sm:p-8 transition-all duration-300 active:scale-95 overflow-hidden
                      ${isActive
                        ? `bg-theme-bg-glass ring-2 ring-theme-border shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.05)] scale-[1.02] border border-theme-border`
                        : "bg-theme-bg-card border-2 border-theme-border/50 hover:border-theme-border hover:bg-theme-bg-glass hover:-translate-y-2"
                      }
                    `}
                    style={{
                      ringColor: isActive ? brand.accent : "transparent",
                    }}
                    aria-label={`Ver linha ${brand.name}`}
                    aria-expanded={isActive}
                  >
                    {/* Colored gradient bar at top */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${brand.gradient} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                    />

                    <div
                      className={`p-3 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-center ${isActive
                        ? "bg-theme-text-primary text-theme-bg-primary shadow-lg scale-110"
                        : "bg-theme-bg-glass group-hover:bg-theme-text-primary group-hover:shadow-md group-hover:text-theme-bg-primary"
                        }`}
                      style={{ color: isActive ? brand.accent : brand.accent }}
                    >
                      {brand.logo}
                    </div>
                    <div className="text-center">
                      <span
                        className={`block text-sm sm:text-base font-black uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-theme-text-primary" : "text-theme-text-secondary group-hover:text-theme-text-primary"
                          }`}
                      >
                        {brand.name}
                      </span>
                      <span
                        className={`mt-1 block text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-theme-accent" : "text-theme-text-muted group-hover:text-theme-text-secondary"
                          }`}
                      >
                        {isActive ? "✓ Selecionada" : "Ver produtos →"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Painel Expansível de Produtos */}
      <div
        ref={panelRef}
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          maxHeight: activeBrand && !searchTerm ? "5000px" : "0px",
          opacity: activeBrand && !searchTerm ? 1 : 0,
        }}
      >
        <div className="mt-16 border-t border-theme-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-12 text-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest bg-theme-accent text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${activeBrandData?.accent || "var(--theme-accent)"}, ${activeBrandData?.accent || "var(--theme-accent-light)"}88)` }}
              >
                <span className="animate-pulse">●</span> Catálogo {activeBrandData?.name}
              </span>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-theme-text-primary sm:text-4xl">
                Suprimentos Originais {activeBrandData?.name}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-theme-text-secondary">
                Todos os produtos são 100% originais e genuínos com garantia de fábrica.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
