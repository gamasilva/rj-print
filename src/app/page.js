import HeroSection from "@/components/HeroSection";
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

const epsonProducts = [
  {
    id: "epson-t544-kit",
    name: "EPSON T544 Kit 4 Cores",
    description: "Kit original com 4 cores de tinta Epson T544 (70ml cada). Compatível com L3110, L3210, L3150, L3250, L5190, L5290, L5590.",
    tags: ["EcoTank", "Kit", "T544", "L3110", "L3150", "L5190", "L3210", "L3250", "L5290", "L5590"],
    image: "/EPSON-T544-KIT-4-CORES.webp",
    yieldAmount: "70 mL por unidade",
    costPerPage: "R$ 0,01 / pág",
    features: "Kit completo CMYK",
    price: "149,00",
    wholesalePrice: "149,00",
  },
  {
    id: "epson-t544-l4150",
    name: "Kit 4 Cores Tinta Epson (L4150/L6161)",
    description: "Kit original com 4 cores (70ml cada) para EcoTank L4150, L4160, L6161, L6171, L6191.",
    tags: ["EcoTank", "Kit", "L4150", "L4160", "L6161", "L6171", "L6191"],
    image: "/Kit-4-Cores-Tinta-Epson.webp",
    yieldAmount: "70 mL por unidade",
    costPerPage: "R$ 0,01 / pág",
    features: "Impressão profissional",
    price: "159,00",
    wholesalePrice: "159,00",
  },
  {
    id: "epson-kit-fotografico",
    name: "Kit Tinta Fotográfica Epson Original",
    description: "Kit com 6 refis originais: T554 Preto Pigmentado + T555 Preto Foto, Ciano, Magenta, Amarelo e Cinza (70ml cada). Para EcoTank L8160 e L8180.",
    tags: ["Fotográfico", "T554", "T555", "L8160", "L8180", "6 cores"],
    image: "/Kit-Tinta-Fotogr-fica-Epson-Original.webp",
    yieldAmount: "70 mL por unidade",
    costPerPage: "R$ 0,01 / pág",
    features: "6 tintas fotográficas",
    price: "229,00",
    wholesalePrice: "229,00",
  },
  {
    id: "epson-t664-kit6",
    name: "Kit 6 Tintas T664 Epson",
    description: "Kit com 6 unidades (Preto x3, Amarelo x1, Ciano x1, Magenta x1). Para L110, L120, L200, L210, L355, L365, L455, L555, L395, L495 e outros.",
    tags: ["T664", "Kit", "L110", "L120", "L200", "L210", "L355", "L365", "L395", "L575"],
    image: "/Kit-6-Tintas-T664-Epson.webp",
    yieldAmount: "70 mL por unidade",
    costPerPage: "R$ 0,01 / pág",
    features: "Kit econômico 6 unidades",
    price: "199,00",
    wholesalePrice: "199,00",
  },
  {
    id: "epson-t534-preta",
    name: "Tinta Epson T534120-AL Preta",
    description: "Tinta preta original Epson T534. Compatível com EcoTank M1120, M3180, M1180 e M2170.",
    tags: ["T534", "Preto", "EcoTank", "M1120", "M3180", "M1180", "M2170"],
    image: "/Tinta-Epson-T534120-AL-preta.webp",
    yieldAmount: "Alta capacidade",
    costPerPage: "R$ 0,01 / pág",
    features: "Monocromática premium",
    price: "68,00",
    wholesalePrice: "68,00",
  },
];

const canonProducts = [
  {
    id: "canon-g3111-kit",
    name: "Kit Tintas Original Canon G3111/G4111/Gl190",
    description: "Kit de tintas originais Canon compatível com Pixma Maxx G1100, G2100, G3100, G3102, G4100.",
    tags: ["Canon", "G3111", "G4111", "G1100", "G2100", "G3100", "G3102", "G4100", "GI190"],
    image: "/Kit-Tintas-Original-Para-Canon-G3111-G3111-G4111-G4100-Gl190.webp",
    yieldAmount: "Alta capacidade",
    costPerPage: "R$ 0,01 / pág",
    features: "Mega Tank original",
    price: "139,00",
    wholesalePrice: "139,00",
  },
  {
    id: "canon-gx6010-gi16",
    name: "Kit Tinta Original GX6010/GX7010 GI-16",
    description: "Kit com 4 cores GI-16 originais para Canon Mega Tank GX6010 e GX7010.",
    tags: ["Canon", "GX6010", "GX7010", "GI16", "GI-16", "Mega Tank"],
    image: "/Kit-Tinta-Original-Para-Gx6010-Gx7010-Gi-16-Gi16-04-Cores.webp",
    yieldAmount: "Alta capacidade",
    costPerPage: "R$ 0,01 / pág",
    features: "4 cores GI-16",
    price: "189,00",
    wholesalePrice: "189,00",
  },
  {
    id: "canon-gi10-kit5",
    name: "Kit 5 Refis Tinta Mega Tank GI10",
    description: "Kit com 5 refis GI-10 originais para Canon Mega Tank G6010, G7010, GM4010 e GM2010.",
    tags: ["Canon", "GI10", "GI-10", "G6010", "G7010", "GM2010", "GM4010"],
    image: "/Kit-5-Refis-Tinta-Mega-Tank-Para-Gi10-G10-Gm2010-G6010-G7010.webp",
    yieldAmount: "Alta capacidade",
    costPerPage: "R$ 0,01 / pág",
    features: "5 refis completos",
    price: "149,00",
    wholesalePrice: "149,00",
  },
];

export default function Home() {
  const brandProducts = {
    epson: epsonProducts,
    canon: canonProducts,
  };

  return (
    <>
      <HeroSection />

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
