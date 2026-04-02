import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "800"],
});

export const metadata = {
  title:
    "Cartuchos e Toners Originais no Atacado | Preço de Distribuidor | RJ Print",
  description:
    "Distribuidor atacadista de cartuchos e toners originais HP, Epson, Brother e Canon. Preço de fábrica para revendas e empresas. Estoque pronta-entrega para todo o Brasil.",
  keywords:
    "cartuchos originais atacado, toners originais atacado, distribuidor HP, distribuidor Epson, distribuidor Brother, distribuidor Canon, cartucho HP atacado, toner HP atacado, suprimentos de impressão atacado, revenda de cartuchos",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.rjprint.com.br",
  },
  openGraph: {
    title: "Cartuchos e Toners Originais no Atacado | RJ Print",
    description:
      "Distribuidor atacadista de cartuchos e toners originais HP, Epson, Brother e Canon. Preço de fábrica para revendas e empresas.",
    url: "https://www.rjprint.com.br",
    siteName: "RJ Print",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.rjprint.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RJ Print - Cartuchos e Toners Originais no Atacado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ Print - Cartuchos e Toners Originais no Atacado",
    description:
      "Distribuidor atacadista de cartuchos e toners originais (HP, Epson, Brother, Canon). Preço de fábrica e entrega para todo o Brasil.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RJ Print - Distribuidora Atacadista",
  description:
    "Distribuição B2B de cartuchos e toners originais HP, Epson, Brother e Canon à pronta-entrega para revendas e empresas.",
  url: "https://www.rjprint.com.br",
  telephone: "+55-21-96433-8875",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: [],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${montserrat.variable} theme-light-blue antialiased`}>
      <head>
        {/* Viewport otimizado para mobile - interactive-widget evita resize no iOS ao abrir teclado */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-theme-text-primary bg-theme-bg-end overflow-x-hidden transition-colors duration-300">
        {/* Google Tag Manager (noscript) — deve ficar imediatamente após a abertura do body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9S7CRPJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider>
          {/* Fundo Fixo com o Gradiente da Garantia */}
          <div className="fixed inset-0 bg-gradient-to-br from-theme-bg-start via-theme-bg-mid to-theme-bg-end -z-20 transition-colors duration-300" aria-hidden="true" />

          {/* Grid Pattern Global */}
          <div
            className="fixed inset-0 opacity-20 pointer-events-none -z-10 transition-colors duration-300"
            aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, var(--theme-pattern-color) 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }}
          />

          <a href="#conteudo-principal" className="skip-link">
            Pular para conteúdo principal
          </a>
          <Header />
          <main id="conteudo-principal" className="flex-1 relative z-0">
            {children}
          </main>
          <Footer />
          <WhatsAppFloating />
        </ThemeProvider>

        {/* GTM — lazyOnload: só executa após a página estar completamente ociosa.
            Não impacta FCP/LCP. Economiza ~70 KiB no tempo crítico. */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N9S7CRPJ');`,
          }}
        />
      </body>
    </html>
  );
}
