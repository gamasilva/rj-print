import Image from "next/image";

const WHATSAPP_NUMBER = "5521964338875";

export default function ProductCard({ product, brandName }) {
  const whatsappMsg = encodeURIComponent(
    `Olá, gostaria de aproveitar o Preço de Atacado no ${product.name}. Como funciona a compra em volume?`
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1E1E24]/60 backdrop-blur-md p-5 shadow-sm transition-[box-shadow,border-color,transform] duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-white/20 hover:-translate-y-1">
      
      {/* Imagem do Produto */}
      <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-white flex items-center justify-center p-4">
        <Image
          src={product.image || "/product_cartridge_color.webp"}
          alt={`${product.name} - ${brandName}`}
          width={400}
          height={300}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge Atacado */}
        <span className="absolute top-2 left-2 rounded text-[10px] font-bold uppercase tracking-widest text-[#F97316] bg-[#FFF7ED] px-2 py-1 shadow-sm border border-[#FFEDD5]">
          Atacado
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        {/* Título */}
        <h3 className="text-base font-bold text-white leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        {/* Descrição Completa */}
        <p className="mt-1.5 text-[11px] leading-relaxed text-gray-400">
          {product.description || "Produto original de alto rendimento para uso B2B."}
        </p>

        {/* Detalhes Técnicos - Rendimento, Custo por pág, etc. */}
        <div className="mt-3.5 mb-3 w-full flex flex-col gap-1.5 rounded-xl bg-white/5 border border-white/5 p-3 text-[11px]">
          {product.yieldAmount && (
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium">📄 Rendimento:</span>
              <span className="text-gray-200 font-bold">{product.yieldAmount}</span>
            </div>
          )}
          {product.costPerPage && (
             <div className="flex justify-between items-center">
               <span className="text-gray-400 font-medium">💰 Custo por folha:</span>
               <span className="text-green-400 font-bold bg-green-500/10 px-1.5 py-0.5 rounded tracking-wide">{product.costPerPage}</span>
             </div>
          )}
          {product.features && (
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium">✨ Diferencial:</span>
              <span className="text-orange-400 font-bold max-w-[55%] truncate text-right" title={product.features}>{product.features}</span>
            </div>
          )}
        </div>

        {/* Tags de Autenticidade */}
        <div className="flex gap-1.5 mb-4">
          <span className="inline-flex items-center gap-1 rounded bg-blue-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/20">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Original
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-cyan-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
            Genuíno
          </span>
        </div>

        {/* Preços */}
        <div className="mt-auto border-t border-white/10 pt-3 mb-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-medium text-gray-400">Preço Unitário:</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-white tracking-tight">
                R$ {product.price?.split(',')[0] || "39"}<span className="text-xl">,{product.price?.split(',')[1] || "90"}</span>
              </span>
              <span className="text-[10px] font-bold text-green-400 uppercase bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">no Pix</span>
            </div>
            
            {/* Gatilho Box Compacto */}
            <div className="mt-2.5 flex items-center justify-between rounded bg-white/5 px-2.5 py-2 border border-white/5">
              <span className="text-[10px] uppercase font-bold text-gray-400">🛒 A partir de 10 un:</span>
              <span className="text-[12px] font-black text-green-400">R$ {product.wholesalePrice || "29,90"} <span className="font-semibold opacity-80 text-[10px] text-gray-400">/cada</span></span>
            </div>
          </div>
        </div>

        {/* Ação */}
        <div className="pt-1">
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
          
          {/* Confiança */}
          <div className="mt-3.5 flex items-center justify-center gap-4 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            <span className="flex items-center gap-1">🚚 Envio Imediato</span>
            <span className="h-3 w-[1px] bg-gray-700"></span>
            <span className="flex items-center gap-1">🛡️ NF-e Inclusa</span>
          </div>
        </div>
      </div>
    </article>
  );
}
