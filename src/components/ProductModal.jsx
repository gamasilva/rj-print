"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5521964338875";

export default function ProductModal({ product, brandName, onClose }) {
  const whatsappMsg = encodeURIComponent(
    `Olá, gostaria de aproveitar o Preço de Atacado no ${product.name}. Como funciona a compra em volume?`
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
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
      aria-label={product.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container — bottom sheet no mobile, dialog centralizado no sm+ */}
      <div className="relative z-10 mx-0 sm:mx-6 flex max-h-[78dvh] sm:max-h-[90dvh] w-full sm:max-w-3xl flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border-t sm:border border-white/15 bg-[#1e1e2e] shadow-[0_-8px_40px_rgba(0,0,0,0.5)] sm:shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

        {/* Header mobile: drag handle + botão Fechar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2 shrink-0 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-white/20" aria-hidden="true" style={{margin: '0 auto'}} />
        </div>

        {/* Botão Fechar — visível e fácil de tocar */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-2 text-[11px] font-bold text-white/80 backdrop-blur-md transition-all hover:bg-white/25 hover:text-white active:scale-90 sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:gap-0 sm:p-0 sm:justify-center"
          aria-label="Fechar"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sm:hidden">Fechar</span>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto overscroll-contain">
          
          {/* Image Section — Desktop: lado a lado, Mobile: topo */}
          <div className="flex flex-col lg:flex-row">
            
            {/* Imagem — compacta no mobile, maior no desktop */}
            <div className="relative flex items-center justify-center bg-white p-4 sm:p-8 lg:p-10 lg:w-[45%] h-36 sm:h-auto">
              <Image
                src={product.image || "/product_cartridge_color.webp"}
                alt={`${product.name} - ${brandName}`}
                width={500}
                height={500}
                className="h-full w-auto max-w-full object-contain sm:max-h-[30vh] lg:max-h-[45vh]"
              />
              <span className="absolute left-3 top-3 rounded-lg bg-green-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                Pronta Entrega
              </span>
            </div>

            {/* Info Section */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              
              {/* Brand Tag */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex rounded-full bg-theme-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-theme-accent border border-theme-accent/25">
                  {brandName}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase text-blue-400 border border-blue-500/20">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100% Original
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-white sm:text-2xl leading-tight">
                {product.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {product.description || "Produto original de alto rendimento para uso B2B."}
              </p>

              {/* Specs Grid */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {product.yieldAmount && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/40">Rendimento</p>
                    <p className="mt-0.5 text-sm font-black text-white">{product.yieldAmount}</p>
                  </div>
                )}
                {product.costPerPage && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/40">Custo/Folha</p>
                    <p className="mt-0.5 text-sm font-black text-green-400">{product.costPerPage}</p>
                  </div>
                )}
                {product.features && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center col-span-2 sm:col-span-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/40">Diferencial</p>
                    <p className="mt-0.5 text-sm font-black text-orange-400 truncate" title={product.features}>{product.features}</p>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-white/40 tracking-wide">Preço Unitário</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-4xl font-black tracking-tight text-white">
                        R$ {product.price?.split(",")[0] || "39"}
                        <span className="text-2xl">,{product.price?.split(",")[1] || "90"}</span>
                      </span>
                      <span className="rounded-lg bg-green-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-green-400 border border-green-500/25">
                        no Pix
                      </span>
                    </div>
                  </div>
                </div>

                {/* Wholesale */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/10">
                  <span className="text-xs font-bold uppercase text-white/50">A partir de 10 un:</span>
                  <span className="text-base font-black text-green-400">
                    R$ {product.wholesalePrice || "29,90"} <span className="text-[10px] font-semibold text-white/50">/cada</span>
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-black uppercase tracking-wide text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all hover:bg-[#1ebe5d] active:scale-95"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Fazer Cotação
              </a>

              {/* Trust */}
              <div className="mt-4 flex items-center justify-center gap-5 text-[10px] font-bold uppercase tracking-wider text-white/40">
                <span className="flex items-center gap-1">🚚 Envio Imediato</span>
                <span className="h-3 w-px bg-white/20" />
                <span className="flex items-center gap-1">🛡️ NF-e Inclusa</span>
                <span className="h-3 w-px bg-white/20" />
                <span className="flex items-center gap-1">✅ Garantia 30d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
