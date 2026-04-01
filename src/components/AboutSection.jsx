import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="quem-somos" className="relative py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-theme-accent/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Texto Sobre Nós */}
          <div className="flex flex-col items-start text-left">
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-extrabold tracking-tight text-theme-text-primary sm:text-4xl"
            >
              Quem Somos
            </h2>
            <div className="space-y-5 text-base text-theme-text-secondary leading-relaxed sm:text-lg">
              <p>
                A <strong className="text-theme-text-primary">RJ Print</strong> é referência na distribuição de cartuchos e toners originais para o mercado corporativo. Com <strong className="text-theme-text-primary">16 anos de experiência no ramo</strong>, atendemos revendas, escritórios e empresas de todo o Brasil com <strong className="text-theme-text-primary">preço agressivo de atacado</strong> e estoque à pronta-entrega.
              </p>
              <p>
                Especializados nas linhas Epson e Canon, distribuímos grandes volumes diariamente — cortando intermediários e alavancando a sua margem de lucro. Originalidade garantida com nota fiscal em cada operação.
              </p>
            </div>
          </div>

          {/* Visual — Moldura ajustada à logo 1080x1080 */}
          <div className="flex justify-center lg:justify-end">
            {/* Wrapper com borda dourada via gradiente */}
            <div className="relative p-[2px] rounded-2xl" style={{
              background: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
            }}>
              {/* Moldura interna quadrada — sem cor de fundo, encaixa a logo */}
              <div className="overflow-hidden rounded-[14px] bg-[#282838]">
                <Image
                  src="/logo_rjprint.webp"
                  alt="RJ Print - Distribuidora Atacadista de Cartuchos e Toners"
                  width={320}
                  height={320}
                  className="block h-auto w-[220px] object-contain sm:w-[280px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
