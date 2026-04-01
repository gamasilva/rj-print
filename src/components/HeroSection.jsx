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
          MOBILE  (< lg) — impacto em 3 segundos e Full viewport
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 flex h-[100dvh] w-full flex-col justify-between overflow-hidden px-6 pt-12 pb-8 text-center lg:hidden">

        {/* Logo fundo GIGANTE */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.08]" aria-hidden="true">
          <Image src="/logo_rjprint.webp" alt="" role="presentation" width={500} height={500}
            className="w-[160%] max-w-none h-auto object-contain" priority fetchPriority="high" />
        </div>

        {/* Topo do Viewport (Logo + Textos) */}
        <div className="relative z-10 flex flex-col items-center mt-2">
          {/* Eyebrow */}
          <p className="mb-4 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#FF2A2A] drop-shadow-sm">
            Preço de Distribuidor · Original de Fábrica
          </p>

          {/* Headline */}
          <h1 id="hero-heading" className="text-[2.5rem] sm:text-[2.8rem] font-black leading-[1.06] tracking-tight text-white drop-shadow-lg">
            Tinta Original.<br />
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Preço Imbatível.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-[280px] text-[14px] sm:text-[15px] font-medium leading-snug text-white/80">
            Suprimentos 100% originais, entrega em todo o Brasil.
          </p>
        </div>

        {/* Meio e CTA */}
        <div className="relative z-10 flex flex-col items-center w-full mt-auto mb-auto">
          {/* CTA — 100% opaco e por cima de tudo */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex w-full max-w-[300px] items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-[18px] text-[16px] font-black uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:bg-[#1ebd5a] active:scale-95 transition-all"
          >
            <svg className="h-[22px] w-[22px] shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Pedir Agora
          </a>

          {/* Micro-copy de fricção zero */}
          <p className="mt-3 text-[11px] font-bold text-white/50">
            Sem cadastro · Resposta em minutos
          </p>
        </div>

        {/* Base do Viewport (Badges) */}
        <div className="relative z-10 flex w-full items-center justify-center pb-2">
          <div className="mx-auto flex w-full max-w-[320px] justify-between px-2">
            {[
              { n: "100%", l: "Original" },
              { n: "#1", l: "Menor Preço" },
              { n: "30d", l: "Garantia" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-[2px]">
                <span className="text-[1.35rem] leading-none font-black text-[#D5DAE6] drop-shadow-sm">{s.n}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D5DAE6]/70">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extensão de fundo (Bleed) para Mobile: Preenche o espaço extra do Safari e empurra o conteúdo seguinte para baixo sem deixar fundo branco. */}
      <div className="relative h-[25vh] w-full bg-[#282838] lg:hidden pointer-events-none" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════
          DESKTOP  (≥ lg) — layout duas colunas
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto hidden min-h-[88vh] max-w-7xl items-center gap-16 px-8 py-24 lg:flex xl:gap-24 xl:px-12">

        {/* Coluna esquerda — copy */}
        <div className="flex flex-1 flex-col items-start text-left">


          {/* Headline desktop */}
          <h1 className="text-5xl font-black leading-[1.07] tracking-tight text-white xl:text-6xl 2xl:text-7xl">
            Preço de{" "}
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Distribuidor
            </span>
            <br />
            para sua Empresa.
          </h1>

          {/* Sub-headline desktop */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70 xl:text-xl">
            Cartuchos e Toners originais para diversas marcas.{" "}
            <strong className="font-semibold text-white">
              Estoque completo e entrega imediata para todo o Brasil.
            </strong>
          </p>

          {/* CTAs desktop */}
          <div className="mt-10 flex items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-base font-black uppercase tracking-wide text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1ebe5d] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:scale-95">
              <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Faça seu Pedido Agora
            </a>
            <span className="text-sm text-white/50">Resp. em &lt;5 min</span>
          </div>

          {/* Badges desktop — linha horizontal */}
          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <span className="text-base leading-none">{b.emoji}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-white/90">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita — logo com moldura dourada */}
        <div className="relative flex shrink-0 items-center justify-center">
          {/* Glow dourado por trás */}
          <div className="absolute inset-0 rounded-3xl bg-[#B38728] opacity-20 blur-[60px]" aria-hidden="true" />

          {/* Borda dourada */}
          <div className="relative p-[2.5px] rounded-3xl shadow-2xl" style={{
            background: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
          }}>
            <div className="overflow-hidden rounded-[22px] bg-[#282838]">
              <Image
                src="/logo_rjprint.webp"
                alt="RJ Print - Distribuidora Atacadista de Cartuchos e Toners"
                width={400}
                height={400}
                className="block h-auto w-[340px] object-contain xl:w-[400px]"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Badge flutuante */}
          <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-[#282838]/90 px-4 py-3 shadow-xl backdrop-blur-md">
            <span className="text-2xl">🏆</span>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-wide">+16 Anos</p>
              <p className="text-[10px] text-white/60 font-medium">No mercado</p>
            </div>
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
