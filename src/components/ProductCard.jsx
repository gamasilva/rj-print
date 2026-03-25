import Image from "next/image";

const WHATSAPP_NUMBER = "5521964338875";

export default function ProductCard({ product, brandName }) {
  const whatsappMsg = encodeURIComponent(
    `Olá, gostaria de aproveitar o Preço de Atacado no ${product.name}. Como funciona a compra em volume?`
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-200">
      
      {/* Imagem do Produto Suave */}
      <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-50/50 flex items-center justify-center p-4">
        <Image
          src={product.image || `https://placehold.co/400x300/ffffff/64748b.png?text=${encodeURIComponent(product.name)}`}
          alt={`${product.name} - ${brandName}`}
          width={400}
          height={300}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
          loading="lazy"
        />
        {/* Badge Sutil e Clean */}
        <span className="absolute top-2 left-2 rounded text-[10px] font-bold uppercase tracking-widest text-[#F97316] bg-[#FFF7ED] px-2 py-1 shadow-sm border border-[#FFEDD5]">
          Atacado
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        {/* Título */}
        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        {/* Rendimento / Qualidade */}
        <p className="mt-1.5 text-xs font-medium text-gray-500 line-clamp-1">
          {product.description || "Alto Rendimento | B2B"}
        </p>

        {/* Compatibilidade Instantânea (Redução de Atrito) */}
        <div className="mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] text-blue-700">
          <span className="font-bold uppercase tracking-wider opacity-80">Para:</span>
          <span className="font-semibold line-clamp-1">{product.tags?.[2] || "Modelos LaserJet/EcoTank"}</span>
        </div>

        {/* Preços - Menos ruído, mais clareza */}
        <div className="mt-4 mb-4 border-t border-gray-100 pt-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-medium text-gray-400">Preço Unitário:</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-gray-900 tracking-tight">
                R$ 39<span className="text-xl">,90</span>
              </span>
              <span className="text-[10px] font-bold text-[#16A34A] uppercase bg-green-50 px-1.5 py-0.5 rounded">no Pix</span>
            </div>
            {/* Custo Por Página (Gatilho B2B Financeiro) */}
            <span className="text-[10px] font-medium text-gray-400 mt-0.5">Custo aprox: R$ 0,02 / pág</span>
            
            {/* Gatilho Box Compacto */}
            <div className="mt-2.5 flex items-center gap-2 rounded bg-gray-50 px-2.5 py-2 border border-gray-100">
              <span className="text-[10px] uppercase font-bold text-gray-500">🛒 A partir de 10 un:</span>
              <span className="text-[12px] font-black text-[#16A34A]">R$ 29,90 <span className="font-semibold opacity-80 text-[10px]">/cada</span></span>
            </div>
          </div>
        </div>

        {/* Ação */}
        <div className="mt-auto pt-1">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-whatsapp px-4 py-3 text-[13px] font-bold text-white transition-all hover:bg-whatsapp-dark hover:shadow-md active:scale-95"
            aria-label={`Comprar ${product.name}`}
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Fazer Cotação
          </a>
          
          {/* Confiança (Minimalista) */}
          <div className="mt-3.5 flex items-center justify-center gap-4 text-[9px] font-semibold uppercase tracking-wider text-gray-400">
            <span className="flex items-center gap-1">🚚 Envio Imediato</span>
            <span className="h-3 w-[1px] bg-gray-200"></span>
            <span className="flex items-center gap-1">🛡️ NF-e Inclusa</span>
          </div>
        </div>
      </div>
    </article>
  );
}
