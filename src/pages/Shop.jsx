import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../service/useCart.js";
import { products } from "../data/products.js";

const filters = ["All pieces", "Tops", "Layers", "Accessories"];

function Shop() {
  const [activeFilter, setActiveFilter] = useState("All pieces");
  const { addToCart, cartCount: bagCount } = useCart();
  const visibleProducts = products.filter(
    (product) =>
      activeFilter === "All pieces" || product.category === activeFilter,
  );

  return (
    <main className="flex-1 bg-[#f3f0e9] text-[#17283b]">
      <section className="border-b border-[#c9c7bf] bg-[#a84f4c] text-[#f3f0e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4c6a3]">
              The uniform / collection 02
            </p>
            <h1 className="mt-5 max-w-3xl text-6xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-8xl">
              Clothes for people who wear their stories.
            </h1>
          </div>
          <p className="max-w-sm text-lg leading-8 text-[#f7ded0]">
            Easy layers, hard-wearing cotton, and small signals for the studio,
            the street, and everywhere in between.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-6 border-b border-[#bfc1bc] pb-6 md:flex-row md:items-center">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Small batch goods
            </p>
            <h2 className="mt-3 text-4xl tracking-tighter sm:text-5xl">
              The shop.
            </h2>
          </div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#6e777a]">
            {bagCount} {bagCount === 1 ? "item" : "items"} in your bag
          </p>
        </div>

        <div className="mt-7 flex gap-5 overflow-x-auto pb-2 font-sans text-xs font-bold uppercase tracking-[0.12em]">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap border-b-2 pb-2 transition-colors ${activeFilter === filter ? "border-[#a84f4c] text-[#a84f4c]" : "border-transparent text-[#6e777a] hover:text-[#17283b]"}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-9 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <article key={product.name} className="group">
              <Link
                to={`/shop/${product.slug}`}
                aria-label={`View details for ${product.name}`}
                className={`relative block aspect-4/5 overflow-hidden p-5 ${product.tone}`}>
                <div className="flex h-full flex-col items-center justify-center border border-current/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <Link
                    to={`/shop/${product.slug}`}
                    className="hover:text-[#a84f4c]">
                    <h3 className="text-xl tracking-[-0.02em]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-[#6e777a]">
                    {product.category} · limited run
                  </p>
                </div>
                <p className="font-sans text-sm font-bold">{product.price}</p>
              </div>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-4 w-full border border-[#17283b] py-3 font-sans text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#17283b] hover:text-[#f3f0e9]">
                Add to bag
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#c9c7bf] bg-[#dedbd0]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Need the mark first?
            </p>
            <h2 className="mt-3 text-4xl tracking-tighter sm:text-5xl">
              Browse the flash collection.
            </h2>
          </div>
          <Link
            to="/"
            className="button button--dark self-start font-sans text-xs font-bold uppercase tracking-[0.12em] md:self-auto">
            Shop tattoo prints <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Shop;
