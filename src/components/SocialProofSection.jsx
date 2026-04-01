export default function SocialProofSection() {
  const reviews = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Gerente de T.I, TechSolutions",
      text: "Compramos direto para nossas 4 filiais. A qualidade dos toners impressiona e a entrega é impecável. Nunca tivemos uma máquina danificada.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Dona de Papelaria, Copiadora & Cia",
      text: "Eu costumava ter problemas com cartuchos ressecados de outros fornecedores. Aqui os originais vêm perfeitos e a margem de revenda é ótima.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Roberto Silva",
      role: "Comprador de Suprimentos",
      text: "Atendimento via WhatsApp super ágil. Fecho os pedidos grandes da empresa toda semana com eles porque o preço é imbatível no atacado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80"
    },
  ];

  return (
    <section
      id="depoimentos"
      className="relative py-16 sm:py-24 overflow-hidden"
      aria-labelledby="social-proof-heading"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[20rem] h-[20rem] bg-theme-accent-light/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2
            id="social-proof-heading"
            className="text-2xl font-extrabold tracking-tight text-theme-text-primary sm:text-4xl lg:text-5xl"
          >
            Aprovado por quem{" "}
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              entende de impressão
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-theme-text-muted sm:text-lg">
            Empresas de todo o Brasil confiam na nossa qualidade e procedência.
          </p>

          {/* Trust Badges */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2.5 border border-green-500/20 shadow-sm min-h-[44px]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-[10px] font-bold">
                ✓
              </span>
              <span className="text-sm font-bold text-green-400">
                0 Reclamações no Reclame Aqui
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2.5 border border-blue-500/20 shadow-sm min-h-[44px]">
              <span className="text-sm font-bold text-blue-400">
                ⭐⭐⭐⭐⭐ 4.9/5 no Google
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-2xl sm:rounded-3xl bg-theme-bg-card p-6 sm:p-8 shadow-xl shadow-black/20 border border-theme-border/80 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:shadow-2xl hover:shadow-theme-accent/10 hover:border-theme-accent/30 hover:-translate-y-1"
            >
              {/* Estrelas */}
              <div className="flex gap-1 text-yellow-400 mb-4 sm:mb-6" role="img" aria-label={`Avaliação de ${review.rating} estrelas`}>
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="flex-1 text-sm sm:text-base italic leading-relaxed text-theme-text-secondary">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Cliente */}
              <div className="mt-6 sm:mt-8 flex items-center gap-4 border-t border-theme-border/80 pt-4 sm:pt-6">
                <img 
                  src={review.image} 
                  alt={`Foto de ${review.name}`}
                  width="48"
                  height="48"
                  className="h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-white/10 shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="text-sm font-bold text-theme-text-primary">{review.name}</div>
                  <div className="text-xs font-medium text-theme-text-muted">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
