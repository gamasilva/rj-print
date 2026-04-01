"use client";

import Image from "next/image";

export default function GuaranteeSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-transparent" id="garantia">
      {/* Orb Blur Esquerdo */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-theme-accent/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-accent/20 bg-theme-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-theme-accent mb-4 transition-colors hover:bg-theme-accent/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Política de Transparência
          </span>
          <h2 className="text-3xl font-black tracking-tight text-theme-text-primary sm:text-5xl">
            Garantia Incondicional de{" "}
            <span className="text-theme-accent">30 Dias</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-theme-text-secondary">
            O nosso nicho exige o mais alto padrão. Para garantir que sua empresa receba suprimentos perfeitamente intactos e autênticos das fabricantes, estabelecemos um processo antifraude 100% seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Card 1 */}
          <div className="relative flex flex-col rounded-3xl border border-theme-border/50 bg-theme-bg-card p-8 backdrop-blur-sm transition-all duration-300 hover:bg-theme-bg-glass hover:-translate-y-1">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-theme-accent/10 border border-theme-accent/20 text-theme-accent">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-theme-text-primary mb-3">Selo de Proteção Total</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed flex-grow">
              Todo pedido é protegido por nossa política de 30 dias. Durante esse período, garantimos a integridade contra qualquer alteração durante o trânsito ou anomalia de fábrica.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col rounded-3xl border border-theme-border/50 bg-theme-bg-card p-8 backdrop-blur-sm transition-all duration-300 hover:bg-theme-bg-glass hover:-translate-y-1">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-theme-accent/10 border border-theme-accent/20 text-theme-accent">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-theme-text-primary mb-3">Verificação de Códigos</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed flex-grow">
              Trabalhamos exclusivamente com o envio de lotes rastreáveis. Caso precise ativar a garantia, solicitamos o QR Code e Código de Barras da caixa original.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col rounded-3xl border border-theme-border/50 bg-theme-bg-card p-8 backdrop-blur-sm transition-all duration-300 hover:bg-theme-bg-glass hover:-translate-y-1">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-theme-accent/10 border border-theme-accent/20 text-theme-accent">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-theme-text-primary mb-3">Evidência Fotográfica</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed flex-grow">
              Fotos nítidas do produto, da caixa e do lote são a prova máxima. Com isso, resolvemos seu chamado em tempo recorde comprovando a conformidade direto com a fabricante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
