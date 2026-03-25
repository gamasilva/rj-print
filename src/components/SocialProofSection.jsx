export default function SocialProofSection() {
  const reviews = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Gerente de T.I, TechSolutions",
      text: "Compramos direto para nossas 4 filiais. A qualidade dos toners impressiona e a entrega é impecável. Nunca tivemos uma máquina danificada.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Dona de Papelaria, Copiadora & Cia",
      text: "Eu costumava ter problemas com cartuchos ressecados de outros fornecedores. Aqui os originais vêm perfeitos e a margem de revenda é ótima.",
      rating: 5,
    },
    {
      id: 3,
      name: "Roberto Silva",
      role: "Comprador de Suprimentos",
      text: "Atendimento via WhatsApp super ágil. Fecho os pedidos grandes da empresa toda semana com eles porque o preço é imbatível no atacado.",
      rating: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="bg-white py-10 sm:py-20"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="social-proof-heading"
            className="text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl lg:text-4xl"
          >
            Aprovado por quem{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              entende de impressão
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            Revendas e empresas de todo o Brasil confiam na nossa logística e qualidade de procedência.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md border border-gray-100 sm:p-8"
            >
              {/* Estrelas */}
              <div className="flex gap-1 text-yellow-400 mb-4" aria-label={`Avaliação de ${review.rating} estrelas`}>
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-700">
                "{review.text}"
              </blockquote>

              {/* Cliente */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
