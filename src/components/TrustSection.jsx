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
      "Cada cartucho e toner é original de fábrica, com selo de autenticidade e nota fiscal comprovando a procedência. Proteja seu parque de impressão.",
    stat: "100%",
    statLabel: "Original",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Homologação Total",
    description:
      "Distribuição de produtos íntegros, de lote rastreável. Seu parque de impressão seguro, regulamentado e com garantia do fabricante.",
    stat: "0",
    statLabel: "Reclamações",
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
      "Capacidade de entrega massiva para pedidos de alto volume. Logística própria otimizada para todo o Brasil — nunca deixamos sua empresa sem suprimentos.",
    stat: "+50K",
    statLabel: "Suprimentos/Ano",
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
    title: "Transparência Total",
    description:
      "Empresa regularizada com CNPJ ativo. Emissão de nota fiscal em 100% das operações. Sem surpresas, sem letrinhas miúdas — confiança de ponta a ponta.",
    stat: "NF-e",
    statLabel: "Em toda venda",
  },
];

export default function TrustSection() {
  return (
    <section
      id="beneficios"
      className="relative py-16 sm:py-28 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Orbs decorativos */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-theme-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-theme-accent-light/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-theme-bg-glass px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-theme-accent border border-theme-border/50 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-theme-accent animate-pulse" />
            Diferenciais Competitivos
          </span>
          <h2
            id="trust-heading"
            className="text-3xl font-black tracking-tight text-theme-text-primary sm:text-4xl lg:text-5xl"
          >
            Por que somos o parceiro{" "}
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              estratégico do seu negócio?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-theme-text-muted sm:text-lg leading-relaxed">
            Não somos apenas um fornecedor. Somos a engrenagem que mantém sua operação de impressão funcionando com máxima eficiência, segurança e economia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-theme-border/80 bg-gradient-to-b from-theme-bg-card to-theme-bg-glass p-8 backdrop-blur-sm transition-all duration-500 hover:bg-theme-bg-card/90 hover:border-theme-accent/20 hover:shadow-2xl hover:shadow-theme-accent/5 hover:-translate-y-2"
            >
              {/* Stat highlight */}
              <div className="absolute top-6 right-6 text-right">
                <p className="text-2xl font-black text-theme-accent/80 group-hover:text-theme-accent transition-colors">
                  {item.stat}
                </p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-theme-text-muted transition-colors">
                  {item.statLabel}
                </p>
              </div>

              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-theme-accent/20 to-theme-accent-light/10 p-4 text-theme-accent transition-all group-hover:from-theme-accent/30 group-hover:to-theme-accent-light/20 group-hover:shadow-lg group-hover:shadow-theme-accent/10">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-theme-text-primary mb-3 sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-theme-text-muted group-hover:text-theme-text-secondary transition-colors">
                {item.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-theme-accent to-theme-accent-light rounded-full transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
