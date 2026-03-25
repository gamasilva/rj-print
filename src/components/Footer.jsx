const WHATSAPP_NUMBER = "5521964338875";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, gostaria de fazer uma cotação de cartuchos e toners no atacado."
);

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-[#D5DAE6] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Empresa */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo_rjprint.webp"
                alt="RJ Print - Soluções em Impressão"
                width={160}
                height={50}
                className="h-10 w-auto sm:h-12 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Distribuidor atacadista de cartuchos e toners originais para
              revendas e empresas em todo o Brasil.
            </p>
          </div>

          {/* Marcas */}
          <div>
            <h2 className="text-lg font-bold text-[#E8ECF1] mb-4">Marcas</h2>
            <nav aria-label="Links das marcas">
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#marcas" className="hover:text-blue-400 transition-colors min-h-[44px] inline-flex items-center">
                    Linha HP
                  </a>
                </li>
                <li>
                  <a href="#marcas" className="hover:text-blue-400 transition-colors min-h-[44px] inline-flex items-center">
                    Linha Epson
                  </a>
                </li>
                <li>
                  <a href="#marcas" className="hover:text-blue-400 transition-colors min-h-[44px] inline-flex items-center">
                    Linha Brother
                  </a>
                </li>
                <li>
                  <a href="#marcas" className="hover:text-blue-400 transition-colors min-h-[44px] inline-flex items-center">
                    Linha Canon
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Informações */}
          <div>
            <h2 className="text-lg font-bold text-[#E8ECF1] mb-4">Informações</h2>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>CNPJ: 40.390.360/0001-61</p>
              <p>Rio de Janeiro - RJ</p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:contato@rjprint.com.br"
                  className="hover:text-blue-400 transition-colors"
                >
                  contato@rjprint.com.br
                </a>
              </p>
              <p>
                Tel / WhatsApp:{" "}
                <a
                  href="tel:+5521964338875"
                  className="hover:text-blue-400 transition-colors"
                >
                  (21) 96433-8875
                </a>
              </p>
            </address>
          </div>

          {/* CTA Final */}
          <div>
            <h2 className="text-lg font-bold text-[#E8ECF1] mb-4">Faça sua Cotação</h2>
            <p className="text-sm text-gray-400 mb-4">
              Atendimento rápido e personalizado para o seu volume.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-whatsapp-dark hover:scale-105 active:scale-95 min-h-[44px]"
              aria-label="Fazer cotação pelo WhatsApp"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.113 1.519 5.845L.052 23.548a.5.5 0 00.612.612l5.703-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.33-1.546.5.5 0 00-.396-.07l-3.547.912.912-3.547a.5.5 0 00-.07-.396A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Selos Segurança & Pagamento */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pagamento via</span>
            <div className="flex items-center gap-3">
              {/* PIX */}
              <div className="flex h-8 w-20 items-center justify-center rounded bg-white/5 px-2 py-1 border border-white/10">
                <span className="text-[#32BCAD] font-bold text-sm">pix</span>
              </div>
              {/* Mercado Pago */}
              <div className="flex h-8 w-28 items-center justify-center rounded bg-white/5 px-2 py-1 border border-white/10">
                <span className="text-[#00B1EA] font-bold text-xs">mercado</span>
                <span className="text-[#1E293B] bg-white rounded-sm px-1 font-bold text-[10px] ml-1">pago</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Segurança</span>
            <div className="flex items-center gap-3 text-[#D5DAE6]">
              {/* SSL */}
              <div className="flex items-center gap-1.5 rounded bg-white/5 px-3 py-1 border border-white/10">
                <svg className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">SSL 256-bit</span>
              </div>
              {/* Site Seguro */}
              <div className="flex items-center gap-1.5 rounded bg-white/5 px-3 py-1 border border-white/10">
                <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">Site Blindado</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} RJ Print. Todos os direitos reservados.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            CNPJ: 40.390.360/0001-61
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors min-h-[44px] inline-flex items-center">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors min-h-[44px] inline-flex items-center">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
