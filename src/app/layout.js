import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

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
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1E1E24" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface">
        <a href="#conteudo-principal" className="skip-link">
          Pular para conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
