import React from "react";

const WHATSAPP_NUMBER = "5521964338875";

export default function AuthoritySection() {
  const whatsappMsg = encodeURIComponent(
    "Olá! Gostaria de falar com um especialista sobre suprimentos para minha impressora."
  );

  return (
    <section id="logistica" className="relative w-full py-16 sm:py-24">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-theme-accent-light/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Coluna 1: Logística */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 rounded-2xl bg-theme-bg-glass p-4 text-theme-text-primary">
              <svg
                className="h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-theme-text-primary">
              Entregas 100% Rastreadas
            </h2>
            <p className="text-base text-theme-text-muted leading-relaxed">
              Trabalhamos com as melhores e mais rápidas transportadoras do Brasil. Acompanhe seu pedido em tempo real, da nossa expedição até a sua porta.
            </p>
          </div>

          {/* Coluna 2: Estatísticas */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 rounded-2xl bg-theme-bg-glass p-4 text-theme-text-primary">
              <svg
                className="h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>
            <h2 className="mb-6 text-2xl font-bold text-theme-text-primary">
              Nossos Números
            </h2>
            
            <div className="flex flex-col gap-6 w-full">
              <div className="border-l-4 border-theme-border/50 pl-4 py-1">
                <p className="text-4xl font-black text-theme-text-primary">+15.000</p>
                <p className="mt-1 text-sm font-medium text-theme-text-muted uppercase tracking-wide">Entregas no Ano</p>
              </div>
              <div className="border-l-4 border-theme-border/50 pl-4 py-1">
                <p className="text-4xl font-black text-theme-text-primary">+50.000</p>
                <p className="mt-1 text-sm font-medium text-theme-text-muted uppercase tracking-wide">Suprimentos Vendidos</p>
              </div>
              <div className="border-l-4 border-theme-border/50 pl-4 py-1">
                <p className="text-4xl font-black text-theme-text-primary">+10 Milhões</p>
                <p className="mt-1 text-sm font-medium text-theme-text-muted uppercase tracking-wide">De Páginas Impressas</p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Atendimento */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 rounded-2xl bg-theme-bg-glass p-4 text-theme-text-primary">
              <svg
                className="h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-theme-text-primary">
              Atendimento Especializado
            </h2>
            <p className="mb-8 text-base text-theme-text-muted leading-relaxed flex-grow">
              Nada de robôs. Fale com um especialista humano que entende exatamente o que a sua impressora precisa e resolve sua demanda na hora.
            </p>
            
            {/* CTA Secundário: Falar com Especialista WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-whatsapp-dark hover:shadow-whatsapp/20 active:scale-95 w-full sm:w-auto"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.113 1.519 5.845L.052 23.548a.5.5 0 00.612.612l5.703-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.33-1.546.5.5 0 00-.396-.07l-3.547.912.912-3.547a.5.5 0 00-.07-.396A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Falar com Especialista
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
