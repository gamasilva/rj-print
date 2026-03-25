import ProductCard from "./ProductCard";

const accentColors = {
  hp: {
    border: "border-blue-500/20",
    badge: "bg-blue-600",
    gradient: "from-blue-50 to-white",
    text: "text-blue-700",
  },
  epson: {
    border: "border-sky-500/20",
    badge: "bg-sky-600",
    gradient: "from-sky-50 to-white",
    text: "text-sky-700",
  },
  brother: {
    border: "border-indigo-500/20",
    badge: "bg-indigo-600",
    gradient: "from-indigo-50 to-white",
    text: "text-indigo-700",
  },
  canon: {
    border: "border-red-500/20",
    badge: "bg-red-600",
    gradient: "from-red-50 to-white",
    text: "text-red-700",
  },
};

export default function BrandSection({ brandId, brandName, subtitle, products, even }) {
  const colors = accentColors[brandId] || accentColors.hp;

  return (
    <section
      id={brandId}
      className={`scroll-mt-20 py-14 sm:py-20 ${even ? "bg-surface" : "bg-card"}`}
      aria-labelledby={`${brandId}-heading`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="mb-10 text-center sm:mb-14">
          <span
            className={`mb-3 inline-flex items-center gap-1.5 rounded-full ${colors.badge} px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#F7F8FA]`}
          >
            {brandName}
          </span>
          <h2
            id={`${brandId}-heading`}
            className="mt-3 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl lg:text-4xl"
          >
            Linha Completa {brandName}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-secondary sm:text-base">
            {subtitle}
          </p>
          <div
            className={`mx-auto mt-4 h-1 w-16 rounded-full ${colors.badge}`}
            aria-hidden="true"
          />
        </div>

        {/* Grid de Produtos */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              brandName={brandName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
