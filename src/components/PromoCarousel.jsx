"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5521964338875";

// ─── Ofertas em destaque ───────────────────────────────────────────────────
const PROMOS = [
  {
    id: "epson-t544-kit",
    badge: "🔥 Mais Vendido",
    badgeColor: "bg-orange-500",
    brand: "Epson",
    name: "Kit 4 Tintas T544",
    short: "EcoTank L3110 · L3210 · L5190",
    price: "149,00",
    oldPrice: "189,00",
    saving: "R$ 40",
    image: "/EPSON-T544-KIT-4-CORES.webp",
    description:
      "Kit original com 4 cores (CMYK, 70 ml cada). Compatível com L3110, L3210, L3150, L3250, L5190, L5290 e L5590. Rendimento de até 7.500 páginas, custo de R$ 0,01/pág.",
    highlights: ["Rendimento: 70 mL/cor", "Custo R$ 0,01/pág", "4 cores CMYK"],
  },
  {
    id: "brother-tn1060",
    badge: "💸 Melhor Custo",
    badgeColor: "bg-green-600",
    brand: "Brother",
    name: "Toner TN1060 Original",
    short: "HL-1110 · DCP-1512 · MFC-1810",
    price: "99,00",
    oldPrice: "139,00",
    saving: "R$ 40",
    image: "/Toner-Brother-TN1060.webp",
    description:
      "Toner original Brother TN1060. Compatível com HL-1110, HL-1112, DCP-1512, MFC-1810, MFC-1815, DCP-1617 e outros. Impressão monocromática de alta qualidade para escritório.",
    highlights: ["Rendimento padrão BR", "Alta definição", "100% Original"],
  },
  {
    id: "canon-g3111-kit",
    badge: "⚡ Oferta Relâmpago",
    badgeColor: "bg-blue-600",
    brand: "Canon",
    name: "Kit Tintas Mega Tank",
    short: "G3111 · G4111 · G1100",
    price: "139,00",
    oldPrice: "179,00",
    saving: "R$ 40",
    image: "/Kit-Tintas-Original-Para-Canon-G3111-G3111-G4111-G4100-Gl190.webp",
    description:
      "Kit de tintas originais Canon para Pixma Maxx G1100, G2100, G3100, G3102, G3111, G4100 e G4111. Mega Tank original com alta capacidade e cores vibrantes.",
    highlights: ["Alta capacidade", "Cores vibrantes", "Mega Tank original"],
  },
  {
    id: "brother-tn116",
    badge: "🏆 Menor Preço",
    badgeColor: "bg-purple-600",
    brand: "Brother",
    name: "Toner TN116 / TN-116",
    short: "HL-L1222 · HL-L1232W · DCP-L1632W",
    price: "79,00",
    oldPrice: "99,00",
    saving: "R$ 20",
    image: "/Toner-Brother-Tn116.webp",
    description:
      "Toner original Brother TN116. Compatível com HL-L1222, HL-L1222V, HL-L1232W, HL-L1232WV e DCP-L1632W. Melhor custo por página da categoria.",
    highlights: ["Melhor custo/pág", "Qualidade original", "Pronta entrega"],
  },
  {
    id: "epson-t664-kit6",
    badge: "📦 Kit Econômico",
    badgeColor: "bg-teal-600",
    brand: "Epson",
    name: "Kit 6 Tintas T664",
    short: "L110 · L200 · L355 · L395",
    price: "199,00",
    oldPrice: "259,00",
    saving: "R$ 60",
    image: "/Kit-6-Tintas-T664-Epson.webp",
    description:
      "Kit com 6 unidades originais T664 (Preto x3, Amarelo, Ciano, Magenta x1). Para L110, L120, L200, L210, L355, L365, L455, L555, L395 e outros. Máxima economia em volume.",
    highlights: ["6 unidades no kit", "3x tinta preta", "Alta economia"],
  },
  {
    id: "brother-tn3472",
    badge: "🖨️ Corporativo",
    badgeColor: "bg-slate-600",
    brand: "Brother",
    name: "Toner TN3472 12K",
    short: "HL-L5102DW · MFC-L6902DW",
    price: "189,00",
    oldPrice: "239,00",
    saving: "R$ 50",
    image: "/Toner-Brother-Tn3472.webp",
    description:
      "Toner original Brother TN3472 com 12.000 páginas. Compatível com DCP-L5502DN, DCP-L5652DN, HL-L5102DW, HL-L6202DW, HL-L6402DW, MFC-L6902DW e outros.",
    highlights: ["12.000 páginas", "Alta capacidade", "Uso corporativo"],
  },
];

// ─── Modal ─────────────────────────────────────────────────────────────────
function PromoModal({ promo, onClose }) {
  const whatsappMsg = encodeURIComponent(
    `Olá! Vi a promoção do ${promo.name} no site da RJ Print por R$ ${promo.price}. Gostaria de fazer um pedido!`
  );

  const handleKeyDown = useCallback(
    (e) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={promo.name}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/*
        Mobile  → bottom sheet compacto: max-h-[78dvh] para não ocupar tela inteira
        Desktop → dialog centralizado: max-w-md, max-h-[80dvh]
      */}
      <div className="relative z-10 w-full sm:max-w-md mx-0 sm:mx-4 flex flex-col max-h-[78dvh] sm:max-h-[80dvh] overflow-hidden rounded-t-2xl sm:rounded-2xl bg-[#12121f] border-t sm:border border-white/15 shadow-[0_-12px_60px_rgba(0,0,0,0.7)]">

        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pt-2.5 pb-1 sm:hidden shrink-0" aria-hidden="true">
          <div className="h-[3px] w-9 rounded-full bg-white/25" />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all active:scale-90"
          aria-label="Fechar"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto overscroll-contain">
          {/* Imagem — mais compacta no mobile */}
          <div className="relative bg-white flex items-center justify-center h-32 sm:h-44 shrink-0">
            <span className={`absolute left-3 top-3 z-10 ${promo.badgeColor} rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white`}>
              {promo.badge}
            </span>
            <Image
              src={promo.image}
              alt={promo.name}
              width={200}
              height={140}
              className="h-full w-auto object-contain p-3"
            />
          </div>

          {/* Conteúdo */}
          <div className="p-4 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-theme-accent mb-0.5">{promo.brand}</p>
            <h2 className="text-lg sm:text-xl font-black text-white leading-tight">{promo.name}</h2>
            <p className="mt-0.5 text-xs text-white/50">{promo.short}</p>

            <p className="mt-3 text-sm leading-relaxed text-white/70">{promo.description}</p>

            {/* Highlights */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {promo.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/8 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-theme-accent shrink-0" />
                  {h}
                </span>
              ))}
            </div>

            {/* Bloco de preço */}
            <div className="mt-4 rounded-xl bg-white/6 border border-white/10 px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-white/40">Preço Pix</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    R$ {promo.price.split(",")[0]}
                    <span className="text-base sm:text-xl">,{promo.price.split(",")[1]}</span>
                  </span>
                  <span className="rounded-md bg-green-500/15 px-1.5 py-0.5 text-[10px] font-black text-green-400 border border-green-500/20">
                    -{promo.saving}
                  </span>
                </div>
                <p className="text-[10px] text-white/30 line-through">De R$ {promo.oldPrice}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-white/40 font-semibold">Estoque</p>
                <p className="text-xs font-black text-green-400">● Disponível</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] py-3.5 text-[14px] font-black uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:bg-[#1ebd5a] active:scale-95 transition-all"
            >
              <svg className="h-4.5 w-4.5 h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Pedir Agora — R$ {promo.price}
            </a>

            <p className="mt-2.5 text-center text-[9px] text-white/30 pb-1">
              🚚 Envio imediato &nbsp;·&nbsp; 🛡️ NF-e inclusa &nbsp;·&nbsp; ✅ Garantia 30d
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card do carousel ──────────────────────────────────────────────────────
function PromoCard({ promo, onClick }) {
  return (
    <button
      onClick={() => onClick(promo)}
      /*
        CONTRASTE: bg-theme-bg-card é opaco e theme-aware (escuro no dark, claro no light).
        Borda visível com theme-border. Sombra sutil para elevação.
        Tamanho maior: w-[260px] mobile → w-[300px] sm → w-[320px] lg
      */
      className="group relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden border border-theme-border bg-theme-bg-card shadow-md hover:shadow-xl hover:border-theme-accent/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left"
      aria-label={`Ver oferta: ${promo.name}`}
    >
      {/* Badge */}
      <span className={`absolute left-3 top-3 z-10 ${promo.badgeColor} rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-lg`}>
        {promo.badge}
      </span>

      {/* Imagem — altura generosa */}
      <div className="relative bg-white flex items-center justify-center h-[150px] sm:h-[170px] lg:h-[180px] overflow-hidden">
        <Image
          src={promo.image}
          alt={promo.name}
          width={200}
          height={170}
          className="h-full w-auto object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info — usa variáveis de tema para contraste perfeito */}
      <div className="p-4">
        {/* Marca */}
        <p className="text-[9px] font-black uppercase tracking-widest text-theme-accent">{promo.brand}</p>

        {/* Nome — alto contraste via theme-text-primary */}
        <p className="mt-0.5 text-[14px] font-black text-theme-text-primary leading-snug line-clamp-1">
          {promo.name}
        </p>

        {/* Compatibilidade — secondary para hierarquia */}
        <p className="mt-0.5 text-[11px] text-theme-text-secondary leading-tight line-clamp-1">
          {promo.short}
        </p>

        {/* Divider */}
        <div className="my-3 h-px bg-theme-border" />

        {/* Preços */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-theme-text-muted line-through">R$ {promo.oldPrice}</p>
            <p className="text-[22px] font-black text-theme-text-primary leading-tight">
              R$ {promo.price.split(",")[0]}
              <span className="text-[14px]">,{promo.price.split(",")[1]}</span>
            </p>
            <p className="text-[9px] text-theme-text-muted font-medium">no Pix</p>
          </div>
          <span className="rounded-xl bg-green-500/15 border border-green-500/25 px-2.5 py-1.5 text-[11px] font-black text-green-600 dark:text-green-400">
            -{promo.saving}
          </span>
        </div>

        {/* Botão ver oferta */}
        <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-theme-accent/10 border border-theme-accent/25 py-2.5 text-[11px] font-bold text-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all duration-200">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Ver oferta completa
        </div>
      </div>
    </button>
  );
}

// ─── Carousel principal ────────────────────────────────────────────────────
export default function PromoCarousel() {
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const items = [...PROMOS, ...PROMOS];

  return (
    <>
      <div className="relative overflow-hidden">

        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-theme-text-muted">
                Ofertas exclusivas
              </p>
              <h2 className="text-base sm:text-lg font-black text-theme-text-primary leading-tight">
                Promoções em{" "}
                <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                  Destaque
                </span>
              </h2>
            </div>
          </div>
          <span className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-theme-text-muted">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Deslize para ver mais
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Fade nas bordas */}
        <div
          className="relative pb-1"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-4 w-max"
            style={{
              animation: "promo-scroll 42s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {items.map((promo, i) => (
              <PromoCard
                key={`${promo.id}-${i}`}
                promo={promo}
                onClick={setSelectedPromo}
              />
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-theme-border to-transparent" />
        </div>
      </div>

      {selectedPromo && (
        <PromoModal promo={selectedPromo} onClose={() => setSelectedPromo(null)} />
      )}

      <style>{`
        @keyframes promo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
