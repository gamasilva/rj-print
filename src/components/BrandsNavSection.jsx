"use client";

import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";

const brands = [
  {
    id: "hp",
    name: "HP",
    accent: "#0096D6",
    gradient: "from-[#0096D6] to-[#0073B1]",
    bgLight: "bg-blue-50",
    borderActive: "border-[#0096D6]",
    logo: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8.5l2-8H13l-2 8zm5 0h-2.5l2-8H18l-2 8z" />
      </svg>
    ),
  },
  {
    id: "epson",
    name: "Epson",
    accent: "#00559E",
    gradient: "from-[#00559E] to-[#0EA5E9]",
    bgLight: "bg-sky-50",
    borderActive: "border-[#0EA5E9]",
    logo: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 15H5v-2h3v2zm0-4H5V9h3v2zm5 4h-3v-2h3v2zm0-4h-3V9h3v2zm5 4h-3v-2h3v2zm0-4h-3V9h3v2z" />
      </svg>
    ),
  },
  {
    id: "brother",
    name: "Brother",
    accent: "#004B8D",
    gradient: "from-[#004B8D] to-[#818CF8]",
    bgLight: "bg-indigo-50",
    borderActive: "border-[#818CF8]",
    logo: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z" />
      </svg>
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
      <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
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
    <section id="marcas" className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="mx-auto max-w-2xl mb-12 sm:mb-16">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por produto ou impressora (ex: Deskjet 1516)..."
              className="block w-full pl-11 pr-12 py-4 sm:py-5 border-2 border-gray-100 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-base sm:text-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-gray-900 font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
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
               <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">
                 {filteredProducts.length > 0 ? "Resultados da Busca" : "Nenhum resultado encontrado"}
               </h3>
               <p className="mt-3 text-base sm:text-lg text-gray-500">
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
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                Catálogo Completo
              </span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Selecione uma{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  marca
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg">
                Todas as linhas com preço de distribuidor e estoque imediato.
              </p>
            </div>

            <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 sm:max-w-4xl sm:grid-cols-4 sm:gap-6">
              {brands.map((brand) => {
                const isActive = activeBrand === brand.id;
                return (
                  <button
                    key={brand.id}
                    onClick={() => handleBrandClick(brand.id)}
                    className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-6 sm:p-8 transition-all duration-300 active:scale-95 overflow-hidden
                      ${
                        isActive
                          ? `${brand.bgLight} ring-2 shadow-2xl scale-[1.02]`
                          : "bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-2"
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
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${brand.gradient} transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    
                    <div 
                      className={`p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? "bg-white shadow-lg scale-110" 
                          : "bg-gray-50 group-hover:bg-white group-hover:shadow-md"
                      }`}
                      style={{ color: brand.accent }}
                    >
                      {brand.logo}
                    </div>
                    <div className="text-center">
                      <span
                        className={`block text-sm sm:text-base font-black uppercase tracking-wider transition-colors duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {brand.name}
                      </span>
                      <span
                        className={`mt-1 block text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                          isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-600"
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
        <div className="mt-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-12 text-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${activeBrandData?.accent || "#3B82F6"}, ${activeBrandData?.accent || "#3B82F6"}88)` }}
              >
                <span className="animate-pulse">●</span> Catálogo {activeBrandData?.name}
              </span>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-gray-900 sm:text-4xl">
                Suprimentos Originais {activeBrandData?.name}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
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
