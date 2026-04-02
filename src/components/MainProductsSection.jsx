import Image from "next/image";

const productCategories = [
  {
    id: "epson-t544-kit",
    title: "EPSON T544 Kit 4 Cores",
    description: "Kit original com 4 cores de tinta Epson T544 (70ml cada). Compatível com L3110, L3210, L3150, L3250, L5190, L5290 e L5590. Impressão nítida com custo mínimo por página.",
    image: "/EPSON-T544-KIT-4-CORES.webp",
    bullets: ["70 mL por unidade", "Compatível com 7 modelos", "100% Original Epson"],
    startingPrice: "R$ 149,00"
  },
  {
    id: "epson-kit-fotografico",
    title: "Kit Tinta Fotográfica Epson Original",
    description: "Kit com 6 refis originais (T554 + T555) com Preto Pigmentado, Preto Foto, Ciano, Magenta, Amarelo e Cinza. Para impressoras EcoTank L8160 e L8180, com qualidade fotográfica profissional.",
    image: "/Kit-Tinta-Fotogr-fica-Epson-Original.webp",
    bullets: ["6 tintas fotográficas", "Preto Pigmentado + Corante", "Para L8160 e L8180"],
    startingPrice: "R$ 229,00"
  },
  {
    id: "canon-g3111-kit",
    title: "Kit Tintas Original Canon G3111/G4111",
    description: "Kit de tintas originais Canon para as séries Pixma Maxx G1100, G2100, G3100, G3102 e G4100. Estoque disponível com entrega imediata para todo o Brasil.",
    image: "/Kit-Tintas-Original-Para-Canon-G3111-G3111-G4111-G4100-Gl190.webp",
    bullets: ["Compatível com 5 modelos", "Mega Tank original Canon", "Alta capacidade"],
    startingPrice: "R$ 139,00"
  },
  {
    id: "canon-gx6010-gi16",
    title: "Kit Tinta Original GX6010/GX7010 GI-16",
    description: "Kit com 4 cores GI-16 originais para Canon Mega Tank GX6010 e GX7010. Tecnologia de ponta para impressão de alto volume com custo por página ultra reduzido.",
    image: "/Kit-Tinta-Original-Para-Gx6010-Gx7010-Gi-16-Gi16-04-Cores.webp",
    bullets: ["4 cores GI-16 originais", "Para GX6010 e GX7010", "Custo mínimo por página"],
    startingPrice: "R$ 189,00"
  },
];

const WHATSAPP_NUMBER = "5521964338875";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, me interessei pela linha de produtos e gostaria de fazer uma cotação no atacado."
);

export default function MainProductsSection() {
  return (
    <section id="produtos" className="relative py-16 sm:py-28 overflow-hidden" aria-labelledby="main-products-heading">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] max-w-full h-[20rem] bg-theme-accent/10 blur-[120px] rounded-[100%] pointer-events-none" aria-hidden="true" />
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
                  className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-theme-border bg-white flex items-center justify-center p-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain p-4 transition-opacity duration-500 hover:opacity-90"
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
