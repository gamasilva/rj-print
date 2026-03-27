import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import BrandsNavSection from "@/components/BrandsNavSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import AuthoritySection from "@/components/AuthoritySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AboutSection from "@/components/AboutSection";
import MainProductsSection from "@/components/MainProductsSection";

/* ───────────────────────────────────────────── */
/*  DADOS DE PRODUTOS — Suprimentos Originais    */
/* ───────────────────────────────────────────── */

const hpProducts = [
  {
    id: "hp-cf210a",
    name: "Toner HP CF210A Negro",
    description: "Toner original HP 131A preto de alta qualidade. Compatível com LaserJet Pro 200.",
    tags: ["Toner", "Negro", "LaserJet"],
    image: "/product_hp_toner_black.webp",
    yieldAmount: "Rende 1.600 páginas",
    costPerPage: "R$ 0,08 / pág",
    features: "Preto mais intenso",
    price: "129,90",
    wholesalePrice: "105,00",
  },
  {
    id: "hp-cf211a",
    name: "Toner HP CF211A Ciano",
    description: "Toner original HP 131A ciano. Cores vibrantes, ideais para propostas e materiais gráficos.",
    tags: ["Toner", "Ciano", "LaserJet"],
    image: "/product_hp_toner_cyan.webp",
    yieldAmount: "Rende 1.800 páginas",
    costPerPage: "R$ 0,08 / pág",
    features: "Cores ultrarrealistas",
    price: "135,90",
    wholesalePrice: "110,00",
  },
  {
    id: "hp-cf212a",
    name: "Toner HP CF212A Amarelo",
    description: "Toner original HP 131A amarelo. Alta qualidade de impressão em alto volume.",
    tags: ["Toner", "Amarelo", "LaserJet"],
    image: "/product_hp_toner_cyan.webp",
    yieldAmount: "Rende 1.800 páginas",
    costPerPage: "R$ 0,08 / pág",
    features: "Resistente a desbotamento",
    price: "135,90",
    wholesalePrice: "110,00",
  },
  {
    id: "hp-cf213a",
    name: "Toner HP CF213A Magenta",
    description: "Toner original HP 131A magenta. Imprima apresentações com nível profissional.",
    tags: ["Toner", "Magenta", "LaserJet"],
    image: "/product_hp_toner_black.webp",
    yieldAmount: "Rende 1.800 páginas",
    costPerPage: "R$ 0,08 / pág",
    features: "Qualidade de laboratório",
    price: "135,90",
    wholesalePrice: "110,00",
  },
  {
    id: "hp-662-negro",
    name: "Cartucho HP 662 Negro",
    description: "Cartucho de tinta original HP 662 preto. Para Deskjet 1516, 2516, 3516 e séries 2600/3700.",
    tags: ["Cartucho", "Negro", "Deskjet"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 120 páginas",
    costPerPage: "R$ 0,33 / pág",
    features: "Evita entupimentos",
    price: "39,90",
    wholesalePrice: "29,90",
  },
  {
    id: "hp-662-colorido",
    name: "Cartucho HP 662 Colorido",
    description: "Cartucho de tinta original HP 662 tri-color. Impressões coloridas fotográficas para casa e escritório.",
    tags: ["Cartucho", "Colorido", "Deskjet"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 100 páginas",
    costPerPage: "R$ 0,45 / pág",
    features: "Tinta de longa duração",
    price: "45,90",
    wholesalePrice: "34,90",
  },
];

const epsonProducts = [
  {
    id: "epson-t544-negro",
    name: "Tinta Epson T544 Negro",
    description: "Garrafa de tinta original Epson T544 preta 65ml. Para EcoTank L1110, L3110, L3150, L5190.",
    tags: ["EcoTank", "Negro", "65ml"],
    image: "/product_epson_ink.webp",
    yieldAmount: "Rende 4.500 páginas",
    costPerPage: "R$ 0,01 / pág",
    features: "Sistema EcoFit",
    price: "49,90",
    wholesalePrice: "38,00",
  },
  {
    id: "epson-t544-ciano",
    name: "Tinta Epson T544 Ciano",
    description: "Garrafa de tinta original Epson T544 ciano 65ml. Cores vivas para impressões brilhantes.",
    tags: ["EcoTank", "Ciano", "65ml"],
    image: "/product_epson_ink.webp",
    yieldAmount: "Rende 7.500 páginas (kit)",
    costPerPage: "R$ 0,01 / pág",
    features: "Secagem ultra-rápida",
    price: "49,90",
    wholesalePrice: "38,00",
  },
  {
    id: "epson-t544-magenta",
    name: "Tinta Epson T544 Magenta",
    description: "Garrafa de tinta original Epson T544 magenta 65ml. Alto desempenho para sublimação e documentos.",
    tags: ["EcoTank", "Magenta", "65ml"],
    image: "/product_epson_ink.webp",
    yieldAmount: "Rende 7.500 páginas (kit)",
    costPerPage: "R$ 0,01 / pág",
    features: "Densidade otimizada",
    price: "49,90",
    wholesalePrice: "38,00",
  },
  {
    id: "epson-t544-amarelo",
    name: "Tinta Epson T544 Amarelo",
    description: "Garrafa de tinta original Epson T544 amarela 65ml. Perfeita para imagens brilhantes.",
    tags: ["EcoTank", "Amarelo", "65ml"],
    image: "/product_epson_ink.webp",
    yieldAmount: "Rende 7.500 páginas (kit)",
    costPerPage: "R$ 0,01 / pág",
    features: "Maior nitidez em bordas",
    price: "49,90",
    wholesalePrice: "38,00",
  },
  {
    id: "epson-t140",
    name: "Cartucho Epson T140 Negro",
    description: "Cartucho original Epson T140 preto. Funciona perfeitamente nas Stylus TX560WD, TX620FWD.",
    tags: ["Cartucho", "Negro", "DuraBrite"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 945 páginas",
    costPerPage: "R$ 0,08 / pág",
    features: "Projetado com DuraBrite",
    price: "79,90",
    wholesalePrice: "65,00",
  },
];

const brotherProducts = [
  {
    id: "brother-tn1060",
    name: "Toner Brother TN-1060",
    description: "Toner original Brother TN-1060 para as impressoras HL-1110, DCP-1512.",
    tags: ["Toner", "Negro", "Compacto"],
    image: "/product_brother_toner.webp",
    yieldAmount: "Rende 1.000 páginas",
    costPerPage: "R$ 0,09 / pág",
    features: "Pó ultrafino",
    price: "95,00",
    wholesalePrice: "82,00",
  },
  {
    id: "brother-tn2370",
    name: "Toner Brother TN-2370",
    description: "Toner original Brother TN-2370 de capacidade industrial. Longa vida útil.",
    tags: ["Toner", "Negro", "Alta Capacidade"],
    image: "/product_brother_toner.webp",
    yieldAmount: "Rende 2.600 páginas",
    costPerPage: "R$ 0,06 / pág",
    features: "Ciclo expansível",
    price: "159,90",
    wholesalePrice: "135,00",
  },
  {
    id: "brother-lc509",
    name: "Cartucho Brother LC-509",
    description: "Cartucho original Brother LC-509 preto para DCP-J100, MFC-J200.",
    tags: ["Cartucho", "Negro", "InkBenefit"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 2.400 páginas",
    costPerPage: "R$ 0,03 / pág",
    features: "Otimizado para rotina B2B",
    price: "69,90",
    wholesalePrice: "56,00",
  },
  {
    id: "brother-lc505-ciano",
    name: "Cartucho Brother LC-505 Ciano",
    description: "Cartucho original Brother LC-505 ciano. Excepcional em gráficos CAD e fotos.",
    tags: ["Cartucho", "Ciano", "Alto Rendimento"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 1.300 páginas",
    costPerPage: "R$ 0,04 / pág",
    features: "Qualidade de cor superior",
    price: "55,90",
    wholesalePrice: "42,00",
  },
];

const canonProducts = [
  {
    id: "canon-137",
    name: "Toner Canon 137",
    description: "Toner original Canon 137 para as séries imageCLASS MF227dw, MF229dw.",
    tags: ["Toner", "Negro", "imageCLASS"],
    image: "/product_canon_toner.webp",
    yieldAmount: "Rende 2.400 páginas",
    costPerPage: "R$ 0,07 / pág",
    features: "Fusão rápida à laser",
    price: "179,90",
    wholesalePrice: "150,00",
  },
  {
    id: "canon-pg145",
    name: "Cartucho Canon PG-145",
    description: "Cartucho original Canon PG-145 preto para Pixma MG2410, MG2510, TS3110.",
    tags: ["Cartucho", "Negro", "Pixma"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 180 páginas",
    costPerPage: "R$ 0,38 / pág",
    features: "Tinta pigmentada densa",
    price: "69,90",
    wholesalePrice: "58,00",
  },
  {
    id: "canon-cl146",
    name: "Cartucho Canon CL-146",
    description: "Cartucho original Canon CL-146 tri-color para série Pixma. Sistema ChromaLife100.",
    tags: ["Cartucho", "Colorido", "Pixma"],
    image: "/product_cartridge_color.webp",
    yieldAmount: "Rende 180 páginas",
    costPerPage: "R$ 0,44 / pág",
    features: "ChromaLife100",
    price: "79,90",
    wholesalePrice: "68,00",
  },
  {
    id: "canon-055-negro",
    name: "Toner Canon 055 Negro",
    description: "Toner original Canon 055 preto. Compatível com imageCLASS MF746Cdw, LBP664Cdw.",
    tags: ["Toner", "Negro", "imageCLASS"],
    image: "/product_canon_toner.webp",
    yieldAmount: "Rende 2.300 páginas",
    costPerPage: "R$ 0,16 / pág",
    features: "Sem vazamento de pó",
    price: "369,90",
    wholesalePrice: "320,00",
  },
];

export default function Home() {
  const brandProducts = {
    hp: hpProducts,
    epson: epsonProducts,
    brother: brotherProducts,
    canon: canonProducts,
  };

  return (
    <>
      <HeroSection />

      <ClientsSection />

      <BrandsNavSection brandProducts={brandProducts} />

      <AuthoritySection />

      <GuaranteeSection />

      <MainProductsSection />

      <AboutSection />

      <SocialProofSection />

      <TrustSection />
    </>
  );
}
