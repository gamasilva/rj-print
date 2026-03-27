import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="quem-somos" className="relative py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-theme-accent/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Texto Sobre Nós — Reduzido */}
          <div className="flex flex-col items-start text-left">
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-extrabold tracking-tight text-theme-text-primary sm:text-4xl"
            >
              Quem Somos
            </h2>
            <div className="space-y-5 text-base text-theme-text-secondary leading-relaxed sm:text-lg">
              <p>
                A <strong className="text-theme-text-primary">RJ Print</strong> é referência na distribuição de cartuchos e toners originais para o mercado corporativo. Atendemos revendas, escritórios e empresas de todo o Brasil com <strong className="text-theme-text-primary">preço agressivo de atacado</strong> e estoque à pronta-entrega.
              </p>
              <p>
                Especializados nas linhas HP, Epson, Brother e Canon, distribuímos grandes volumes diariamente — cortando intermediários e alavancando a sua margem de lucro. Originalidade garantida com nota fiscal em cada operação.
              </p>
            </div>
          </div>

          {/* Visual — Moldura com Logo */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-theme-border shadow-2xl flex items-center justify-center p-8 bg-gradient-to-br from-theme-bg-card via-theme-bg-start to-theme-bg-end">
            
            {/* Grid decorativo */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, var(--theme-accent) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }} />
            </div>
            
            {/* Foto da Logo na Moldura */}
            <div className="relative z-10 w-full max-w-sm animate-pulse-slow">
              <Image 
                src="/logo_rjprint.webp" 
                alt="RJ Print Logo"
                width={400}
                height={150}
                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(59,130,246,0.2)]"
                loading="lazy"
              />
            </div>

            {/* Overlay gradiente inferior para profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-end via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <p className="text-sm font-bold text-theme-text-primary uppercase tracking-widest">
                RJ Print
              </p>
              <p className="text-xs text-theme-text-muted mt-1">
                Mais do que suprimentos, resultados reais.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
