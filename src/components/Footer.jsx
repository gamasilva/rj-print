"use client";

const WHATSAPP_NUMBER = "5521964338875";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, gostaria de fazer uma cotação de cartuchos e toners no atacado."
);

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme, mounted } = useTheme();

  return (
    <footer className="relative overflow-hidden bg-[#13131F] border-t border-transparent transition-colors duration-300">
      {/* Glow radial sutil superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-[800px] bg-gradient-to-r from-transparent via-theme-accent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-theme-accent opacity-[0.03] blur-[100px]" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Empresa */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-6 inline-block">
              <Image
                src="/logo_rjprint.webp"
                alt="RJ Print - Soluções em Impressão"
                width={180}
                height={60}
                className="h-12 w-auto sm:h-14 object-contain brightness-110 drop-shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="text-sm/relaxed font-medium text-white/50">
              Distribuidor atacadista premium de cartuchos e toners originais. Qualidade e preço imbatíveis para revendas e empresas em todo o Brasil.
            </p>
          </div>

          {/* Marcas */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-[13px] font-black text-white/90 mb-6 tracking-[0.15em] uppercase">Marcas</h2>
            <nav aria-label="Links das marcas">
              <ul className="space-y-3 text-sm font-semibold text-white/50">
                {['HP', 'Epson', 'Brother', 'Canon'].map(marca => (
                  <li key={marca}>
                    <a href="#marcas" className="hover:text-theme-accent transition-colors min-h-[44px] inline-flex items-center">
                      Linha {marca}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Informações */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-[13px] font-black text-white/90 mb-6 tracking-[0.15em] uppercase">Info & Contato</h2>
            <address className="not-italic text-sm/relaxed font-semibold text-white/50 space-y-3">
              <p>CNPJ: <span className="text-white/80 font-bold">40.390.360/0001-61</span></p>
              <p>Rio de Janeiro - RJ</p>
              <p>
                <a
                  href="mailto:contato@rjprint.com.br"
                  className="hover:text-theme-accent transition-colors"
                >
                  contato@rjprint.com.br
                </a>
              </p>
              <p>
                <a
                  href="tel:+5521964338875"
                  className="hover:text-theme-accent transition-colors"
                >
                  (21) 96433-8875
                </a>
              </p>
            </address>
          </div>

          {/* CTA Final */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-[13px] font-black text-white/90 mb-6 tracking-[0.15em] uppercase">Faça um Pedido</h2>
            <p className="text-sm font-medium text-white/50 mb-6">
              Atendimento ágil para demandas corporativas.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-black text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-all duration-200 hover:bg-[#1ebe5d] hover:shadow-[0_12px_25px_rgba(37,211,102,0.5)] active:scale-95 min-h-[44px] tracking-wide"
              aria-label="Fazer cotação pelo WhatsApp"
            >
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.113 1.519 5.845L.052 23.548a.5.5 0 00.612.612l5.703-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.33-1.546.5.5 0 00-.396-.07l-3.547.912.912-3.547a.5.5 0 00-.07-.396A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              FALAR COM VENDAS
            </a>
          </div>
        </div>

        {/* Selos Segurança & Pagamento */}
        <div className="mt-16 rounded-3xl border border-white/[0.05] bg-white/[0.01] p-6 lg:p-8 flex flex-col items-center gap-10 lg:flex-row lg:justify-between shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Pagamento</span>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {/* PIX */}
              <div className="flex h-10 w-[84px] items-center justify-center rounded-xl bg-[#1A1A24] border border-white/5 saturate-150">
                <span className="text-[#32BCAD] font-black tracking-tight text-[15px]">pix</span>
              </div>
              {/* Mercado Pago */}
              <div className="flex h-10 w-[112px] items-center justify-center rounded-xl bg-[#1A1A24] border border-white/5 shadow-inner">
                <span className="text-[#00B1EA] font-black tracking-tight text-[13px] leading-none mt-0.5">mercado</span>
                <span className="text-[#1E293B] bg-white rounded-sm px-[3px] py-[2px] font-black tracking-tight text-[10px] ml-1 leading-none mt-0.5">pago</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/[0.05] mx-4 lg:hidden"></div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Segurança</span>
            <div className="flex flex-wrap justify-center items-center gap-3 text-white">
              {/* SSL */}
              <div className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#1A1A24] px-4 border border-white/5 min-w-[120px]">
                <svg className="h-[18px] w-[18px] text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold tracking-wide">SSL 256-bit</span>
              </div>
              {/* Site Seguro */}
              <div className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#1A1A24] px-4 border border-white/5 min-w-[130px]">
                <svg className="h-[18px] w-[18px] text-theme-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold tracking-wide">Site Blindado</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.05] pt-8 lg:flex-row">
          <p className="text-xs font-medium text-white/40 text-center lg:text-left">
            © {currentYear} RJ Print. Todos os direitos reservados.
            <br className="sm:hidden" />
            <span className="hidden sm:inline px-3 opacity-30">|</span>
            <span className="inline-block mt-2 sm:mt-0 font-semibold text-white/50">CNPJ: 40.390.360/0001-61</span>
          </p>

          <div className="flex gap-6 text-xs font-bold text-white/40">
            <a href="#" className="hover:text-theme-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-theme-accent transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
