import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="quem-somos" className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Texto Sobre Nós */}
          <div className="flex flex-col items-start text-left">
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Quem Somos
            </h2>
            <div className="space-y-6 text-base text-gray-300 leading-relaxed sm:text-lg">
              <p>
                A <strong className="text-white">RJ Print</strong> nasceu com um propósito claro: ser o parceiro definitivo e mais confiável na distribuição de cartuchos e toners originais para o mercado corporativo brasileiro. Entendemos que para a sua revenda, escritório ou empresa não parar, você precisa de três pilares: <strong className="text-white text-opacity-90">preço agressivo de atacado, amplo estoque à pronta-entrega e procedência 100% original.</strong>
              </p>
              
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 shadow-inner">
                <p className="font-semibold text-red-200">
                  Escritório travado por falta de tinta? Erros em documentos cruciais por falhas na impressão ou cartuchos secos?
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Blindamos seu parque de impressões com originais entregues antes da sua máquina parar. Troque o amadorismo e os atrasos constantes por uma logística homologada B2B.
                </p>
              </div>

              <p>
                Especializados nas linhas corporativas da HP, Epson, Brother e Canon, nós centralizamos e distribuímos grandes volumes diariamente. Isso significa que, ao comprar com a RJ Print, você está negociando de forma direta, cortando intermediários da cadeia de suprimentos e, consequentemente, alavancando a sua margem de lucro.
              </p>
              <p>
                Nosso compromisso inegociável é com o sucesso da sua operação. Para isso, atestamos a originalidade de 100% dos nossos produtos e os faturamos com nota fiscal transparente e blindada de fábrica.
              </p>
            </div>
          </div>

          {/* Imagem Placeholder */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-surface border border-white/5 shadow-2xl">
            <Image
              src="https://placehold.co/800x600/1E1E24/E8ECF1.png?text=RJ+Print+Matriz"
              alt="Instalações e Logística da RJ Print"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradiente de overlay sutil */}
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
