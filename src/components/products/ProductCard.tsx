import { useState } from 'react';

export interface ProductCardItem {
  id: string;
  name: string;
  image: string;
  description: string;
  category?: string;
  code?: string;
  isPhotoTile?: boolean;
}

interface ProductCardProps {
  product: ProductCardItem;
  showCode?: boolean;
}

export function ProductCard({ product, showCode = false }: ProductCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="group flex h-full w-full flex-col bg-white border border-[#aeb0b1] transition-colors duration-300 hover:border-[#00943e]">
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white border-b border-[#aeb0b1]/50">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-[#aeb0b1]/15 p-6 text-center text-sm text-[#555555]">
            {product.name}
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.code ? `${product.name} — ${product.code}` : product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={
              product.isPhotoTile
                ? 'h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                : 'max-h-[82%] max-w-[82%] h-auto w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]'
            }
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-6 bg-white">
        {showCode && product.code ? (
          <p className="font-mono text-xs tracking-wide text-[#0074ba] tabular-code">
            {product.code}
          </p>
        ) : product.category ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#00943e]">
            {product.category}
          </p>
        ) : null}
        <h3 className="text-lg md:text-xl font-medium tracking-[-0.015em] text-[#555555]">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-[#555555]">
          {product.description}
        </p>
      </div>
    </article>
  );
}
