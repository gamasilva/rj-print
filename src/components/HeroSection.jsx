import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[85vh] sm:min-h-[80vh] flex flex-col justify-center"
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

      {/* Watermark Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none sm:opacity-[0.06] -translate-y-20">
        <Image
          src="/logo_apenas_imagem.png"
          alt="Watermark RJ Print"
          width={800}
          height={800}
          className="h-[60vh] w-auto object-contain sm:h-[70vh]"
          priority
        />
      </div>

      {/* Orb decorativo */}
      <div
        className="absolute -top-20 -right-20 z-0 h-56 w-56 rounded-full blur-[100px] opacity-15 bg-blue-600 sm:h-80 sm:w-80 sm:-top-32 sm:-right-32"
        aria-hidden="true"
      />

      {/* ── Copy principal ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-20 lg:px-8 flex-1 flex flex-col w-full justify-center">
        <div className="text-center animate-fade-in mb-12 sm:mb-20">
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

          {/* Badges de Garantia */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-1 justify-start sm:justify-center sm:mt-12 sm:gap-6 sm:overflow-visible sm:flex-wrap scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { icon: "🏆", label: "Qualidade Original" },
              { icon: "💎", label: "Produtos Genuínos" },
              { icon: "💧", label: "Segurança Total" },
              { icon: "✅", label: "Garantia de Fábrica" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex-shrink-0 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-[#C5CCD8] backdrop-blur-md sm:px-6 sm:py-3 sm:text-sm transition-all hover:bg-white/10"
              >
                <span className="text-sm sm:text-xl">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
