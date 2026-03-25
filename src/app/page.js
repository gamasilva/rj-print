import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import AuthoritySection from "@/components/AuthoritySection";
import AboutSection from "@/components/AboutSection";
import MainProductsSection from "@/components/MainProductsSection";

/* ───────────────────────────────────────────── */
/*  DADOS DE PRODUTOS — Substitua pelas imagens */
/*  reais e informações do catálogo.            */
/* ───────────────────────────────────────────── */

const hpProducts = [
  {
    id: "hp-cf210a",
    name: "Toner HP CF210A Negro",
    description: "Toner original HP 131A preto. Rendimento aprox. 1.600 páginas. Compatível com LaserJet Pro 200.",
    tags: ["Toner", "Negro", "LaserJet"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Toner+HP+CF210A",
  },
  {
    id: "hp-cf211a",
    name: "Toner HP CF211A Ciano",
    description: "Toner original HP 131A ciano. Rendimento aprox. 1.800 páginas. Cores vibrantes e precisas.",
    tags: ["Toner", "Ciano", "LaserJet"],
    image: "https://placehold.co/400x400/1E1E24/0EA5E9.png?text=Toner+HP+CF211A",
  },
  {
    id: "hp-cf212a",
    name: "Toner HP CF212A Amarelo",
    description: "Toner original HP 131A amarelo. Alta qualidade de impressão e rendimento consistente.",
    tags: ["Toner", "Amarelo", "LaserJet"],
    image: "https://placehold.co/400x400/1E1E24/EAB308.png?text=Toner+HP+CF212A",
  },
  {
    id: "hp-cf213a",
    name: "Toner HP CF213A Magenta",
    description: "Toner original HP 131A magenta. Ideal para impressões profissionais em alto volume.",
    tags: ["Toner", "Magenta", "LaserJet"],
    image: "https://placehold.co/400x400/1E1E24/EC4899.png?text=Toner+HP+CF213A",
  },
  {
    id: "hp-662-negro",
    name: "Cartucho HP 662 Negro",
    description: "Cartucho de tinta original HP 662 preto. Para Deskjet 1516, 2516, 3516 e séries 2600/3700.",
    tags: ["Cartucho", "Negro", "Deskjet"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Cartucho+HP+662+N",
  },
  {
    id: "hp-662-colorido",
    name: "Cartucho HP 662 Colorido",
    description: "Cartucho de tinta original HP 662 tri-color. Impressões coloridas com qualidade fotográfica.",
    tags: ["Cartucho", "Colorido", "Deskjet"],
    image: "https://placehold.co/400x400/1E1E24/A855F7.png?text=Cartucho+HP+662+C",
  },
];

const epsonProducts = [
  {
    id: "epson-t544-negro",
    name: "Tinta Epson T544 Negro",
    description: "Garrafa de tinta original Epson T544 preta 65ml. Para EcoTank L1110, L3110, L3150, L5190.",
    tags: ["EcoTank", "Negro", "65ml"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Epson+T544+Negro",
  },
  {
    id: "epson-t544-ciano",
    name: "Tinta Epson T544 Ciano",
    description: "Garrafa de tinta original Epson T544 ciano 65ml. Cores vivas e duráveis na linha EcoTank.",
    tags: ["EcoTank", "Ciano", "65ml"],
    image: "https://placehold.co/400x400/1E1E24/0EA5E9.png?text=Epson+T544+Ciano",
  },
  {
    id: "epson-t544-magenta",
    name: "Tinta Epson T544 Magenta",
    description: "Garrafa de tinta original Epson T544 magenta 65ml. Alto rendimento sem desperdício.",
    tags: ["EcoTank", "Magenta", "65ml"],
    image: "https://placehold.co/400x400/1E1E24/EC4899.png?text=Epson+T544+Mag",
  },
  {
    id: "epson-t544-amarelo",
    name: "Tinta Epson T544 Amarelo",
    description: "Garrafa de tinta original Epson T544 amarela 65ml. Custo por página extremamente baixo.",
    tags: ["EcoTank", "Amarelo", "65ml"],
    image: "https://placehold.co/400x400/1E1E24/EAB308.png?text=Epson+T544+Ama",
  },
  {
    id: "epson-t140",
    name: "Cartucho Epson T140 Negro",
    description: "Cartucho original Epson T140 preto de alta capacidade. Para Stylus TX560WD, TX620FWD.",
    tags: ["Cartucho", "Negro", "Alta Capacidade"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Epson+T140+Negro",
  },
];

const brotherProducts = [
  {
    id: "brother-tn1060",
    name: "Toner Brother TN-1060",
    description: "Toner original Brother TN-1060. Rendimento aprox. 1.000 páginas. Para HL-1110, DCP-1512.",
    tags: ["Toner", "Negro", "Compacto"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Brother+TN-1060",
  },
  {
    id: "brother-tn2370",
    name: "Toner Brother TN-2370",
    description: "Toner original Brother TN-2370 de alta capacidade. Rendimento aprox. 2.600 páginas.",
    tags: ["Toner", "Negro", "Alta Capacidade"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Brother+TN-2370",
  },
  {
    id: "brother-lc509",
    name: "Cartucho Brother LC-509 Negro",
    description: "Cartucho original Brother LC-509 preto ultra alto rendimento. Para DCP-J100, MFC-J200.",
    tags: ["Cartucho", "Negro", "Ultra Rendimento"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Brother+LC-509",
  },
  {
    id: "brother-lc505-ciano",
    name: "Cartucho Brother LC-505 Ciano",
    description: "Cartucho original Brother LC-505 ciano de alto rendimento. Cores fiéis e duráveis.",
    tags: ["Cartucho", "Ciano", "Alto Rendimento"],
    image: "https://placehold.co/400x400/1E1E24/0EA5E9.png?text=Brother+LC-505",
  },
];

const canonProducts = [
  {
    id: "canon-137",
    name: "Toner Canon 137",
    description: "Toner original Canon 137. Rendimento aprox. 2.400 páginas. Para imageCLASS MF227dw, MF229dw.",
    tags: ["Toner", "Negro", "imageCLASS"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Canon+Toner+137",
  },
  {
    id: "canon-pg145",
    name: "Cartucho Canon PG-145 Negro",
    description: "Cartucho original Canon PG-145 preto. Para Pixma MG2410, MG2510, TS3110.",
    tags: ["Cartucho", "Negro", "Pixma"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Canon+PG-145",
  },
  {
    id: "canon-cl146",
    name: "Cartucho Canon CL-146 Colorido",
    description: "Cartucho original Canon CL-146 tri-color. Impressões em cores com qualidade Canon.",
    tags: ["Cartucho", "Colorido", "Pixma"],
    image: "https://placehold.co/400x400/1E1E24/A855F7.png?text=Canon+CL-146",
  },
  {
    id: "canon-055-negro",
    name: "Toner Canon 055 Negro",
    description: "Toner original Canon 055 preto. Para imageCLASS MF746Cdw, LBP664Cdw. Rendimento 2.300 páginas.",
    tags: ["Toner", "Negro", "imageCLASS"],
    image: "https://placehold.co/400x400/1E1E24/E8ECF1.png?text=Canon+055+Negro",
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
      <HeroSection brandProducts={brandProducts} />

      <AuthoritySection />

      <MainProductsSection />

      <AboutSection />

      <SocialProofSection />

      <TrustSection />
    </>
  );
}
