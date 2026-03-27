import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] sm:min-h-[80vh] flex flex-col justify-center bg-transparent"
      aria-labelledby="hero-heading"
    >

      {/* Watermark Logo — LCP Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none sm:opacity-[0.06] -translate-y-20" aria-hidden="true">
        <Image
          src="/logoparahero.png"
          alt=""
          role="presentation"
          width={400}
          height={400}
          className="h-[60vh] w-auto object-contain sm:h-[70vh]"
          priority
          fetchPriority="high"
        />
      </div>

      {/* Orb decorativo */}
      <div
        className="absolute -top-20 -right-20 z-0 h-56 w-56 rounded-full blur-[100px] opacity-15 bg-blue-600 sm:h-80 sm:w-80 sm:-top-32 sm:-right-32"
        aria-hidden="true"
      />

      {/* ── Copy principal ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-20 lg:px-8 flex-1 flex flex-col w-full justify-center">
        <div className="text-center mb-12 sm:mb-20">
          {/* Headline */}
          <h1
            id="hero-heading"
            className="mx-auto max-w-sm text-3xl font-extrabold leading-tight tracking-tight text-[#E8ECF1] sm:max-w-3xl sm:text-4xl md:text-5xl lg:text-7xl"
          >
            Preço de Distribuidor{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              para sua Empresa.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-[#8690A2] sm:mt-8 sm:max-w-2xl sm:text-xl md:text-2xl">
            Estoque completo de suprimentos originais.{" "}
            <span className="text-[#C5CCD8] font-semibold block sm:inline">
              Atendemos revendas e empresas em todo o Brasil.
            </span>
          </p>

          {/* Mobile CTA WhatsApp */}
          <div className="mt-8 sm:hidden flex justify-center w-full">
            <a
              href="https://wa.me/5521964338875?text=Ol%C3%A1%2C%20acessei%20o%20site%20e%20gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl bg-[#25D366] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-transform active:scale-95"
            >
              <svg className="mr-2.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Faça seu Pedido
            </a>
          </div>

          {/* Badges de Garantia */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center sm:max-w-4xl mx-auto sm:mt-12 sm:gap-4 px-2 sm:px-0">
            {[
              {
                icon: (
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Produtos 100% Originais"
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                label: "Faturamento Direto"
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                label: "Garantia de 7 Dias"
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
                label: "Envio Imediato para todo Brasil"
              }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-lg border border-orange-500/20 bg-orange-500/10 px-3.5 py-2.5 text-[10px] md:text-[11px] uppercase tracking-wider font-semibold text-orange-100 backdrop-blur-md transition-colors hover:bg-orange-500/20"
              >
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
