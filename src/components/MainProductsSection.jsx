import Image from "next/image";

const productCategories = [
  {
    id: "cartuchos",
    title: "Cartuchos de Tinta",
    description: "Cartuchos originais HP, Epson e Canon com o maior giro de mercado. Alto rendimento para impressoras jato de tinta, entregando cores vibrantes e impressões sem falhas.",
    image: "/product_cartridge_color.webp",
    bullets: ["Todas as numerações", "Rendimento Padrão e XL", "100% Originais"],
    startingPrice: "R$ 29,90"
  },
  {
    id: "toners",
    title: "Toners Laser",
    description: "Linha completa de toners originais para impressoras laser monocromáticas e coloridas. Qualidade impecável para documentos oficiais e altíssima capacidade de impressão.",
    image: "/product_hp_toner_black.webp",
    bullets: ["Cores CMYK e Monocromáticos", "Até 10.000 páginas", "Secagem instantânea"],
    startingPrice: "R$ 34,90"
  },
  {
    id: "refis",
    title: "Refil de Tinta (EcoTank/MegaTank)",
    description: "Garrafas de tintas originais desenhadas para sistemas de tanque. Rendimento imbatível, evitando entupimentos na cabeça de impressão e zelando pelo equipamento.",
    image: "/product_epson_ink.webp",
    bullets: ["Tintas Corante e Pigmentada", "Maior custo x benefício", "Evita manutenções"],
    startingPrice: "R$ 38,90"
  },
  {
    id: "cilindros",
    title: "Cilindros e Unidades de Imagem",
    description: "Peças de reposição vitais para copiadoras e multifuncionais de alto volume, assegurando que o toner seja transferido para o papel com a máxima nitidez e em velocidade industrial.",
    image: "/product_brother_toner.webp",
    bullets: ["Alta durabilidade", "Qualidade fotográfica", "Manutenção preventiva"],
    startingPrice: "R$ 89,90"
  },
];

const WHATSAPP_NUMBER = "5521964338875";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, me interessei pela linha de produtos e gostaria de fazer uma cotação no atacado."
);

export default function MainProductsSection() {
  return (
    <section id="produtos" className="relative py-16 sm:py-28" aria-labelledby="main-products-heading">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-theme-accent/10 blur-[120px] rounded-[100%] pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="main-products-heading"
            className="text-3xl font-extrabold tracking-tight text-theme-text-primary sm:text-4xl"
          >
            Nosso Mix de{" "}
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Alta Perfomance
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-theme-text-muted sm:text-lg">
            Da impressora doméstica à linha de produção corporativa, temos o estoque ideal para suprir sua necessidade.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-24">
          {productCategories.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={category.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Imagem */}
                <div
                  className={`relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-xl border border-theme-border bg-white ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Conteúdo */}
                <div
                  className={`flex flex-col items-start text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl font-black text-theme-text-primary sm:text-3xl mb-4">
                    {category.title}
                  </h3>
                  <p className="text-base text-theme-text-secondary leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-theme-text-primary">
                        <svg className="w-5 h-5 text-whatsapp mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Preço Âncora Atacado */}
                  <div className="mb-6 flex flex-wrap items-baseline gap-2 rounded-lg bg-theme-bg-glass px-4 py-3 border border-theme-border w-full sm:w-auto">
                    <span className="text-xs font-bold text-theme-text-muted uppercase tracking-widest">A partir de</span>
                    <span className="text-3xl font-black text-theme-text-primary tracking-tight">{category.startingPrice}</span>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      "Olá, gostaria de saber mais sobre a linha de " + category.title + " no atacado."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-all hover:bg-whatsapp-dark shadow-md hover:shadow-xl hover:scale-105"
                  >
                    Cotar {category.title}
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
