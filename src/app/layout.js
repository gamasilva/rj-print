import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title:
    "Cartuchos e Toners Originais no Atacado | Preço de Distribuidor",
  description:
    "Distribuidor atacadista de cartuchos e toners originais HP, Epson, Brother e Canon. Preço de fábrica para revendas e empresas. Estoque pronta-entrega para todo o Brasil.",
  keywords:
    "cartuchos originais atacado, toners originais atacado, distribuidor HP, distribuidor Epson, distribuidor Brother, distribuidor Canon, cartucho HP atacado, toner HP atacado",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.seusite.com.br",
  },
  openGraph: {
    title: "Cartuchos e Toners Originais no Atacado | Preço de Distribuidor",
    description:
      "Distribuidor atacadista de cartuchos e toners originais HP, Epson, Brother e Canon. Preço de fábrica para revendas e empresas.",
    url: "https://www.seusite.com.br",
    siteName: "RJ Print",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ Print - Soluções em Impressão | Cartuchos e Toners Originais",
    description:
      "Distribuidor atacadista de cartuchos e toners originais (HP, Epson, Brother, Canon) no Brasil. Preço de revenda e entrega rápida pela RJ Print.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "B2BBusiness",
  name: "RJ Print - Distribuidora Atacadista",
  description:
    "Distribuição B2B de cartuchos e toners originais HP, Epson, Brother e Canon à pronta-entrega. Soluções corporativas.",
  url: "https://www.seusite.com.br",
  telephone: "+55-21-96433-8875",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Exemplo, 123",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01234-567",
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
