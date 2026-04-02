import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5521964338875?text=Ol%C3%A1%2C%20acessei%20o%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";

const badges = [
  { emoji: "✅", label: "100% Original" },
  { emoji: "💰", label: "Melhor Preço" },
  { emoji: "🛡️", label: "Garantia 30 dias" },
  { emoji: "🚚", label: "Entrega Brasil" },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#282838] lg:overflow-visible"
      aria-labelledby="hero-heading"
    >
      {/* Orbs decorativos */}
      <div className="absolute -right-20 -top-20 z-0 h-72 w-72 rounded-full bg-theme-accent opacity-15 blur-[100px]" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 z-0 h-60 w-60 rounded-full bg-theme-accent-light opacity-10 blur-[100px]" aria-hidden="true" />


      {/* ═══════════════════════════════════════════════════
          MOBILE  (< lg) — layout limpo, foco total na conversão
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 flex min-h-[100dvh] w-full flex-col justify-between px-6 pt-14 pb-10 text-center lg:hidden">

        {/* Visual Context: Produtos Originais */}
        <div className="relative mx-auto mt-4 mb-6 flex h-40 w-full max-w-[320px] items-end justify-center">
          {/* Caixa Epson (Esquerda) */}
          <div className="absolute bottom-2 left-2 z-10 w-28 -rotate-6 transform shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105">
            <Image src="/product_epson_ink.webp" alt="Tinta Original Epson" width={120} height={120} className="w-full rounded-2xl object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" priority fetchPriority="high" />
          </div>
          {/* Caixa Brother (Direita) */}
          <div className="absolute bottom-0 right-2 z-10 w-32 rotate-6 transform shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105">
            <Image src="/product_brother_toner.webp" alt="Toner Original Brother" width={130} height={130} className="w-full rounded-2xl object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" priority />
          </div>
          {/* Caixa HP (Centro, Destacada) */}
          <div className="relative z-20 mb-4 w-36 shadow-2xl transition-transform duration-500 hover:scale-110">
            <Image src="/product_hp_toner_black.webp" alt="Toner Original HP" width={150} height={150} className="w-full rounded-2xl object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]" priority />
          </div>

          {/* Selo Visual Flutuante */}
          <div className="absolute -bottom-4 z-30 flex animate-bounce items-center gap-1.5 rounded-full border border-green-400/50 bg-[#282838] px-4 py-1.5 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
            <span className="text-sm">🛡️</span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#25D366]">Produto Original</span>
          </div>
        </div>

        {/* ── COPY PRINCIPAL ── */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-[2rem] font-black leading-[1.1] tracking-tight text-white drop-shadow-lg"
          >
            Cartuchos e Toners 100% Originais.{" "}
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              O Melhor Preço do Brasil,
            </span>
            <br />
            Sem Risco para sua Impressora.
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-4 max-w-[340px] text-[13.5px] font-medium leading-relaxed text-white/70">
            Pare de pagar caro nas grandes lojas ou arriscar seu equipamento com peças paralelas.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex w-full max-w-[300px] items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-[18px] text-[16px] font-black uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(37,211,102,0.55)] hover:bg-[#1ebd5a] active:scale-95 transition-all"
          >
            <svg className="h-[22px] w-[22px] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Pedir
          </a>
          <p className="mt-3 text-[11px] font-bold text-white/40">
            Sem cadastro · Resposta em minutos
          </p>
        </div>

        {/* ── TRUST BADGES COM ÍCONES SVG ── */}
        <div className="relative z-10 w-full">
          <div className="mx-auto grid max-w-[340px] grid-cols-3 gap-2">

            {/* 100% Original */}
            <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <span className="text-[11px] font-black text-white leading-tight text-center">100%<br />Original</span>
            </div>

            {/* Menor Preço */}
            <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33" />
                </svg>
              </div>
              <span className="text-[11px] font-black text-white leading-tight text-center">#1<br />Menor Preço</span>
            </div>

            {/* Garantia 30d */}
            <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="text-[11px] font-black text-white leading-tight text-center">30 dias<br />Garantia</span>
            </div>

          </div>
        </div>
      </div>



      {/* ═══════════════════════════════════════════════════
          DESKTOP  (≥ lg) — layout centralizado (como no mobile, adaptado)
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto hidden w-full max-w-5xl flex-col items-center justify-start px-8 pt-6 pb-12 text-center lg:flex xl:px-12">

        {/* Visual Context: Produtos Originais */}
        <div className="relative mx-auto mt-0 mb-6 flex h-[240px] w-full max-w-[450px] shrink-0 items-end justify-center xl:h-[280px] xl:max-w-[550px]">
          {/* Caixa Epson (Esquerda) */}
          <div className="absolute bottom-6 left-0 z-10 w-40 -rotate-6 transform shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-110 xl:w-48">
            <Image src="/product_epson_ink.webp" alt="Tinta Original Epson" width={250} height={250} className="w-full rounded-2xl object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]" priority fetchPriority="high" />
          </div>
          {/* Caixa Brother (Direita) */}
          <div className="absolute bottom-0 right-0 z-10 w-44 rotate-6 transform shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-110 xl:w-52">
            <Image src="/product_brother_toner.webp" alt="Toner Original Brother" width={250} height={250} className="w-full rounded-2xl object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]" priority />
          </div>
          {/* Caixa HP (Centro, Destacada) */}
          <div className="relative z-20 w-48 shadow-2xl transition-transform duration-500 hover:scale-110 xl:w-56">
            <Image src="/product_hp_toner_black.webp" alt="Toner Original HP" width={300} height={300} className="w-full rounded-2xl object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]" priority />
          </div>

          {/* Selo Visual Flutuante */}
          <div className="absolute -bottom-4 z-30 flex animate-bounce items-center gap-2 rounded-full border border-green-400/50 bg-[#282838] px-4 py-1.5 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
            <span className="text-base">🛡️</span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#25D366]">Produto Original</span>
          </div>
        </div>

        {/* ── COPY PRINCIPAL ── */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          {/* Headline desktop */}
          <h1 className="text-[2.25rem] font-black leading-[1.1] tracking-tight text-white lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem]">
            Cartuchos e Toners <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">100% Originais.</span>{" "}
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              O Melhor Preço do Brasil,
            </span>{" "}
            Sem Risco para sua Impressora.
          </h1>

          {/* Sub-headline desktop */}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 xl:text-lg">
            Pare de pagar caro nas grandes lojas ou arriscar seu equipamento com peças paralelas.
          </p>

          {/* CTAs desktop */}
          <div className="mt-6 mb-8 flex flex-col items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-black uppercase tracking-wide text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1ebe5d] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:scale-95">
              <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Fazer Pedido
            </a>
            <span className="text-sm font-medium text-white/50">Sem cadastro · Resposta em &lt;5 min</span>
          </div>

          {/* Badges desktop — linha horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-base leading-none">{b.emoji}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-white/90">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barra de urgência desktop */}
      <div className="relative z-10 hidden border-t border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm lg:block">
        <p className="text-xs font-semibold text-white/70">
          🔥 <span className="font-bold text-white">Estoque limitado</span> — Preços válidos enquanto durarem os lotes disponíveis.
        </p>
      </div>
    </section>
  );
}
