const trustItems = [
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Produtos 100% Originais",
    description:
      "Todos os cartuchos e toners são originais de fábrica. Comprovamos a procedência com nota fiscal.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "100% Homologado",
    description:
      "Distribuição oficial de produtos íntegros, de lote rastreável. Seu parque de impressão seguro e regulamentado.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Estoque para Grandes Volumes",
    description:
      "Capacidade de entrega para pedidos de alto volume. Logística otimizada para todo o Brasil.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "CNPJ Transparente",
    description:
      "Empresa regularizada e transparente. Emissão de nota fiscal em todas as operações.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="beneficios"
      className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] py-10 sm:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            id="trust-heading"
            className="text-2xl font-extrabold tracking-tight text-[#E8ECF1] sm:text-3xl lg:text-4xl"
          >
            Por que somos o parceiro estratégico{" "}
            <span className="bg-gradient-to-r from-accent-light to-sky-400 bg-clip-text text-transparent">
              do seu negócio?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#9BA3B5] sm:text-base">
            Mais do que um fornecedor, somos o braço logístico que sua revenda
            precisa para crescer com segurança.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[#2A3243] bg-[#1A2332]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-[#1E2B3C]/80 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 sm:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/20 p-3 text-accent-light transition-colors group-hover:bg-accent/30">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#E0E4EA] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8690A2]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
