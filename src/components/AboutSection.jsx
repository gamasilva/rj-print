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

          {/* Visual — Sem placeholder externo */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #1E1E24 0%, #0d1117 50%, #1a2332 100%)" }}
          >
            {/* Grid decorativo simulando logística */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(59,130,246,0.4) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }} />
            </div>
            
            {/* Ícone central */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 sm:h-24 sm:w-24">
                  <svg className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-white/80 sm:text-xl">Logística Nacional</p>
                <p className="text-sm text-gray-500 mt-1">Expedição diária para todo o Brasil</p>
              </div>
            </div>

            {/* Overlay gradiente */}
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
