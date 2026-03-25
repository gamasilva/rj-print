import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="quem-somos" className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Texto Sobre Nós — Reduzido */}
          <div className="flex flex-col items-start text-left">
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Quem Somos
            </h2>
            <div className="space-y-5 text-base text-gray-300 leading-relaxed sm:text-lg">
              <p>
                A <strong className="text-white">RJ Print</strong> é referência na distribuição de cartuchos e toners originais para o mercado corporativo. Atendemos revendas, escritórios e empresas de todo o Brasil com <strong className="text-white">preço agressivo de atacado</strong> e estoque à pronta-entrega.
              </p>
              <p>
                Especializados nas linhas HP, Epson, Brother e Canon, distribuímos grandes volumes diariamente — cortando intermediários e alavancando a sua margem de lucro. Originalidade garantida com nota fiscal em cada operação.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-surface border border-white/5 shadow-2xl">
            <Image
              src="https://placehold.co/800x600/1E1E24/E8ECF1.png?text=RJ+Print+Matriz"
              alt="Instalações e Logística da RJ Print"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121217]/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-white uppercase tracking-widest">
                Logística Premium
              </p>
              <p className="text-xs text-[#9CA3AF] mt-1">
                Matriz de Expedição Nacional
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
