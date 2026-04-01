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

const brotherProducts = [
  {
    id: "brother-tn3662xl",
    name: "Toner Brother TN3662XL",
    description: "Toner original Brother TN3662XL de alta capacidade. Compatível com DCP-L5512DN, DCP-L5662DN, HL-L5212DN, HL-L5212DW, HL-L6412DW, MFC-L5912DW e MFC-L6912DW.",
    tags: ["TN3662", "TN3662XL", "DCP-L5512DN", "DCP-L5662DN", "HL-L5212DN", "HL-L5212DW", "HL-L6412DW", "MFC-L5912DW", "MFC-L6912DW"],
    image: "/Toner-Brother-Tn3662xl.webp",
    yieldAmount: "Alta capacidade XL",
    costPerPage: "Excelente custo/pág",
    features: "100% Original Brother",
    price: "329,00",
    wholesalePrice: "329,00",
  },
  {
    id: "brother-tn3612xl",
    name: "Toner Brother TN3612XL",
    description: "Toner original Brother TN3612XL. Compatível com DCP-L5512DN, DCP-L5662DN, HL-L5212DN, HL-L5212DW, HL-L6412DW, MFC-L5912DW e MFC-L6912DW.",
    tags: ["TN3612", "TN3612XL", "DCP-L5512DN", "DCP-L5662DN", "HL-L5212DN", "HL-L5212DW", "HL-L6412DW", "MFC-L5912DW", "MFC-L6912DW"],
    image: "/Toner-Brother-Tn3612xl.webp",
    yieldAmount: "Alta capacidade XL",
    costPerPage: "Excelente custo/pág",
    features: "100% Original Brother",
    price: "349,00",
    wholesalePrice: "349,00",
  },
  {
    id: "brother-kit-tn219",
    name: "Kit 04 Toner L3240/L3560/L3760 TN219",
    description: "Kit com 4 toners originais TN-219 (CMYK). Compatível com MFC-L3760CDW, DCP-L3560CDW, HL-L3280CDW, HL-L3240CDW e variantes.",
    tags: ["TN219", "TN-219", "Kit", "MFC-L3760CDW", "DCP-L3560CDW", "HL-L3280CDW", "HL-L3240CDW", "L3760", "L3560", "L3280", "L3240"],
    image: "/Kit-04-Toner-L3240-L3560-L3760-Tn219.webp",
    yieldAmount: "Kit 4 cores CMYK",
    costPerPage: "Excelente custo/pág",
    features: "Kit colorido completo",
    price: "809,00",
    wholesalePrice: "809,00",
  },
  {
    id: "brother-kit-tn217",
    name: "Kit 4 Toner Brother Original TN217",
    description: "Kit com 4 toners originais TN-217 (BK/Y/M/C). Compatível com MFC-L3750CDW, HL-L3210CW, DCP-L3551CDW e variantes.",
    tags: ["TN217", "TN-217", "217BK", "217Y", "217M", "217C", "Kit", "MFC-L3750CDW", "HL-L3210CW", "DCP-L3551CDW"],
    image: "/Kit-4-Toner-Brother-Tn217.webp",
    yieldAmount: "Kit 4 cores CMYK",
    costPerPage: "Excelente custo/pág",
    features: "Kit colorido completo",
    price: "799,00",
    wholesalePrice: "799,00",
  },
  {
    id: "brother-tn1060",
    name: "Toner Brother TN1060 Original",
    description: "Toner original Brother TN1060. Compatível com HL-1110, HL-1112, DCP-1512, MFC-1810, MFC-1815, DCP-1617, HL-1202, HL-1212, HL-1602.",
    tags: ["TN1060", "TN-1060", "HL-1110", "HL-1112", "DCP-1512", "MFC-1810", "MFC-1815", "DCP-1617", "HL-1202", "HL-1212"],
    image: "/Toner-Brother-TN1060.webp",
    yieldAmount: "Rendimento padrão",
    costPerPage: "Ótimo custo/pág",
    features: "100% Original Brother",
    price: "99,00",
    wholesalePrice: "99,00",
  },
  {
    id: "brother-tn116",
    name: "Toner Brother TN116 / TN-116",
    description: "Toner original Brother TN116. Compatível com HL-L1222, HL-L1222V, HL-L1232W, HL-L1232WV e DCP-L1632W.",
    tags: ["TN116", "TN116BR", "TN-116", "HL-L1222", "HL-L1222V", "HL-L1232W", "HL-L1232WV", "DCP-L1632W", "L1222", "L1232"],
    image: "/Toner-Brother-Tn116.webp",
    yieldAmount: "Rendimento padrão",
    costPerPage: "Melhor custo/pág",
    features: "100% Original Brother",
    price: "79,00",
    wholesalePrice: "79,00",
  },
  {
    id: "brother-tn3472",
    name: "Toner TN3472 / TN-3472 12K",
    description: "Toner original Brother TN3472 com 12.000 páginas. Compatível com DCP-L5502DN, DCP-L5652DN, HL-L5102DW, HL-L6202DW, HL-L6402DW, MFC-L6902DW, MFC-L6702DW, MFC-L5902DW.",
    tags: ["TN3472", "TN-3472", "DCP-L5502DN", "DCP-L5652DN", "HL-L5102DW", "HL-L6202DW", "HL-L6402DW", "MFC-L6902DW", "MFC-L6702DW", "12K"],
    image: "/Toner-Brother-Tn3472.webp",
    yieldAmount: "12.000 páginas",
    costPerPage: "Ótimo custo/pág",
    features: "Alta capacidade 12K",
    price: "189,00",
    wholesalePrice: "189,00",
  },
  {
    id: "brother-tn3492",
    name: "Toner Brother TN3492",
    description: "Toner original Brother TN3492 de ultra alta capacidade. Compatível com MFC-L6902DW, HL-L6402DW, MFC-L6900DW e HL-L6400DW.",
    tags: ["TN3492", "TN-3492", "MFC-L6902DW", "HL-L6402DW", "MFC-L6900DW", "HL-L6400DW"],
    image: "/Toner-Brother-Tn3492.webp",
    yieldAmount: "Ultra alta capacidade",
    costPerPage: "Ótimo custo/pág",
    features: "100% Original Brother",
    price: "189,00",
    wholesalePrice: "189,00",
  },
  {
    id: "brother-tn2370",
    name: "Toner Brother TN2370",
    description: "Toner original Brother TN2370. Compatível com HL-L2360DW, HL-L2320D, MFC-L2720DW, MFC-L2740DW, MFC-L2700DW, DCP-L2520DW e DCP-L2540DW.",
    tags: ["TN2370", "TN-2370", "HL-L2360DW", "HL-L2320D", "MFC-L2720DW", "MFC-L2740DW", "MFC-L2700DW", "DCP-L2520DW", "DCP-L2540DW"],
    image: "/Toner-Brother-TN2370.webp",
    yieldAmount: "Alta capacidade",
    costPerPage: "Ótimo custo/pág",
    features: "100% Original Brother",
    price: "150,00",
    wholesalePrice: "150,00",
  },
  {
    id: "brother-tn2340",
    name: "Cartucho de Toner Brother TN2340",
    description: "Toner original Brother TN2340. Compatível com HL-L2320D, HL-L2360DW, MFC-L2740DW, MFC-L2720DW, MFC-L2700DW, DCP-L2520DW e DCP-L2540DW.",
    tags: ["TN2340", "TN-2340", "HL-L2320D", "HL-L2360DW", "MFC-L2740DW", "MFC-L2720DW", "MFC-L2700DW", "DCP-L2520DW", "DCP-L2540DW"],
    image: "/Toner-Brother-Tn2340.webp",
    yieldAmount: "Alta capacidade",
    costPerPage: "Ótimo custo/pág",
    features: "100% Original Brother",
    price: "149,00",
    wholesalePrice: "149,00",
  },
  {
    id: "brother-dr3440",
    name: "Cilindro Brother DR3440",
    description: "Cilindro original Brother DR3440. Compatível com TN3472, TN3422, TN3442, TN3492. Para: DCP-L5652DN, DCP-L5602DN, MFC-L5702DW, MFC-L6702DW, MFC-L6902DW, HL-L5102DW, HL-L5202DW, HL-L6402DW, HL-L6202DW e outros.",
    tags: ["DR3440", "DR-3440", "DCP-L5652DN", "DCP-L5602DN", "MFC-L5702DW", "MFC-L6702DW", "MFC-L6902DW", "HL-L5102DW", "HL-L5202DW", "HL-L6402DW", "HL-L6202DW"],
    image: "/Cilindro-Brother-Dr3440.webp",
    yieldAmount: "Longa durabilidade",
    costPerPage: "Alta durabilidade",
    features: "Cilindro original",
    price: "160,00",
    wholesalePrice: "160,00",
  },
];

export default function Home() {
  const brandProducts = {
    epson: epsonProducts,
    canon: canonProducts,
    brother: brotherProducts,
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
