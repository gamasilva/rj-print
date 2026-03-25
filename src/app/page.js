import HeroSection from "@/components/HeroSection";
import BrandsNavSection from "@/components/BrandsNavSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import AuthoritySection from "@/components/AuthoritySection";
import AboutSection from "@/components/AboutSection";
import MainProductsSection from "@/components/MainProductsSection";

/* ───────────────────────────────────────────── */
/*  DADOS DE PRODUTOS — Suprimentos Originais    */
/* ───────────────────────────────────────────── */

const hpProducts = [
  {
    id: "hp-cf210a",
    name: "Toner HP CF210A Negro",
    description: "Toner original HP 131A preto. Rendimento aprox. 1.600 páginas. Compatível com LaserJet Pro 200.",
    tags: ["Toner", "Negro", "LaserJet"],
    image: "/product_hp_toner_black.webp",
  },
  {
    id: "hp-cf211a",
    name: "Toner HP CF211A Ciano",
    description: "Toner original HP 131A ciano. Rendimento aprox. 1.800 páginas. Cores vibrantes e precisas.",
    tags: ["Toner", "Ciano", "LaserJet"],
    image: "/product_hp_toner_cyan.webp",
  },
  {
    id: "hp-cf212a",
    name: "Toner HP CF212A Amarelo",
    description: "Toner original HP 131A amarelo. Alta qualidade de impressão e rendimento consistente.",
    tags: ["Toner", "Amarelo", "LaserJet"],
    image: "/product_hp_toner_cyan.webp",
  },
  {
    id: "hp-cf213a",
    name: "Toner HP CF213A Magenta",
    description: "Toner original HP 131A magenta. Ideal para impressões profissionais em alto volume.",
    tags: ["Toner", "Magenta", "LaserJet"],
    image: "/product_hp_toner_black.webp",
  },
  {
    id: "hp-662-negro",
    name: "Cartucho HP 662 Negro",
    description: "Cartucho de tinta original HP 662 preto. Para Deskjet 1516, 2516, 3516 e séries 2600/3700.",
    tags: ["Cartucho", "Negro", "Deskjet"],
    image: "/product_cartridge_color.webp",
  },
  {
    id: "hp-662-colorido",
    name: "Cartucho HP 662 Colorido",
    description: "Cartucho de tinta original HP 662 tri-color. Impressões coloridas com qualidade fotográfica.",
    tags: ["Cartucho", "Colorido", "Deskjet"],
    image: "/product_cartridge_color.webp",
  },
];

const epsonProducts = [
  {
    id: "epson-t544-negro",
    name: "Tinta Epson T544 Negro",
    description: "Garrafa de tinta original Epson T544 preta 65ml. Para EcoTank L1110, L3110, L3150, L5190.",
    tags: ["EcoTank", "Negro", "65ml"],
    image: "/product_epson_ink.webp",
  },
  {
    id: "epson-t544-ciano",
    name: "Tinta Epson T544 Ciano",
    description: "Garrafa de tinta original Epson T544 ciano 65ml. Cores vivas e duráveis na linha EcoTank.",
    tags: ["EcoTank", "Ciano", "65ml"],
    image: "/product_epson_ink.webp",
  },
  {
    id: "epson-t544-magenta",
    name: "Tinta Epson T544 Magenta",
    description: "Garrafa de tinta original Epson T544 magenta 65ml. Alto rendimento sem desperdício.",
    tags: ["EcoTank", "Magenta", "65ml"],
    image: "/product_epson_ink.webp",
  },
  {
    id: "epson-t544-amarelo",
    name: "Tinta Epson T544 Amarelo",
    description: "Garrafa de tinta original Epson T544 amarela 65ml. Custo por página extremamente baixo.",
    tags: ["EcoTank", "Amarelo", "65ml"],
    image: "/product_epson_ink.webp",
  },
  {
    id: "epson-t140",
    name: "Cartucho Epson T140 Negro",
    description: "Cartucho original Epson T140 preto de alta capacidade. Para Stylus TX560WD, TX620FWD.",
    tags: ["Cartucho", "Negro", "Alta Capacidade"],
    image: "/product_cartridge_color.webp",
  },
];

const brotherProducts = [
  {
    id: "brother-tn1060",
    name: "Toner Brother TN-1060",
    description: "Toner original Brother TN-1060. Rendimento aprox. 1.000 páginas. Para HL-1110, DCP-1512.",
    tags: ["Toner", "Negro", "Compacto"],
    image: "/product_brother_toner.webp",
  },
  {
    id: "brother-tn2370",
    name: "Toner Brother TN-2370",
    description: "Toner original Brother TN-2370 de alta capacidade. Rendimento aprox. 2.600 páginas.",
    tags: ["Toner", "Negro", "Alta Capacidade"],
    image: "/product_brother_toner.webp",
  },
  {
    id: "brother-lc509",
    name: "Cartucho Brother LC-509 Negro",
    description: "Cartucho original Brother LC-509 preto ultra alto rendimento. Para DCP-J100, MFC-J200.",
    tags: ["Cartucho", "Negro", "Ultra Rendimento"],
    image: "/product_cartridge_color.webp",
  },
  {
    id: "brother-lc505-ciano",
    name: "Cartucho Brother LC-505 Ciano",
    description: "Cartucho original Brother LC-505 ciano de alto rendimento. Cores fiéis e duráveis.",
    tags: ["Cartucho", "Ciano", "Alto Rendimento"],
    image: "/product_cartridge_color.webp",
  },
];

const canonProducts = [
  {
    id: "canon-137",
    name: "Toner Canon 137",
    description: "Toner original Canon 137. Rendimento aprox. 2.400 páginas. Para imageCLASS MF227dw, MF229dw.",
    tags: ["Toner", "Negro", "imageCLASS"],
    image: "/product_canon_toner.webp",
  },
  {
    id: "canon-pg145",
    name: "Cartucho Canon PG-145 Negro",
    description: "Cartucho original Canon PG-145 preto. Para Pixma MG2410, MG2510, TS3110.",
    tags: ["Cartucho", "Negro", "Pixma"],
    image: "/product_cartridge_color.webp",
  },
  {
    id: "canon-cl146",
    name: "Cartucho Canon CL-146 Colorido",
    description: "Cartucho original Canon CL-146 tri-color. Impressões em cores com qualidade Canon.",
    tags: ["Cartucho", "Colorido", "Pixma"],
    image: "/product_cartridge_color.webp",
  },
  {
    id: "canon-055-negro",
    name: "Toner Canon 055 Negro",
    description: "Toner original Canon 055 preto. Para imageCLASS MF746Cdw, LBP664Cdw. Rendimento 2.300 páginas.",
    tags: ["Toner", "Negro", "imageCLASS"],
    image: "/product_canon_toner.webp",
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

      <BrandsNavSection brandProducts={brandProducts} />

      <AuthoritySection />

      <MainProductsSection />

      <AboutSection />

      <SocialProofSection />

      <TrustSection />
    </>
  );
}
