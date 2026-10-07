import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../service/useCart.js";

const categories = [
  "All styles",
  "Japanese",
  "Traditional",
  "Fine line",
  "Blackwork",
];

// 1. Updated products array to use real image URLs instead of character symbols
const products = [
  {
    name: "Great Wave Study",
    style: "Japanese",
    price: "$18",
    detail: "A5 archival print",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
    tone: "bg-[#d9e0df] text-[#17283b]",
  },
  {
    name: "Lucky Koi Flash",
    style: "Traditional",
    price: "$14",
    detail: "12-piece flash sheet",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800",
    tone: "bg-[#e5c9bc] text-[#8f3f40]",
  },
  {
    name: "Quiet Moon No. 02",
    style: "Fine line",
    price: "$22",
    detail: "A4 archival print",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800",
    tone: "bg-[#dedbd0] text-[#17283b]",
  },
  {
    name: "Tiger & Peony",
    style: "Blackwork",
    price: "$18",
    detail: "A5 archival print",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tone: "bg-[#c7c3b8] text-[#17283b]",
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("All styles");
  const { addToCart, cartCount } = useCart();
  const visibleProducts = products.filter(
    (product) =>
      activeCategory === "All styles" || product.style === activeCategory,
  );

  return (
    <main className="flex-1 bg-[#f3f0e9] text-[#17283b]">
      <div className="border-b border-[#d4d0c7] bg-[#17283b] px-5 py-2 text-center font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#e9a976]">
        Free shipping on orders over $75 · New flash released every Friday
      </div>

      <section className="border-b border-[#c9c7bf] bg-[#e8e3d8]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Home Tattoo · Collection 01
            </p>
            <h1 className="mt-5 max-w-2xl text-6xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-8xl">
              The complete flash collection.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#4d5961]">
              Artist-drawn tattoo styles for collecting, planning, and finding
              the mark that feels like yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-sans text-xs font-bold uppercase tracking-[0.12em]">
              <a
                href="#shop"
                className="bg-[#a84f4c] px-5 py-4 text-[#f3f0e9] transition-colors hover:bg-[#8f3f40] hover:text-[#f3f0e9]">
                Shop flash <span aria-hidden="true">↘</span>
              </a>
              <Link
                to="/artists"
                className="border-b border-[#17283b] px-1 py-3 text-[#17283b] transition-colors hover:text-[#a84f4c]">
                Meet the artists
              </Link>
            </div>
          </div>
          {/* Featured Hero Card with Image */}
          <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2">
            <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full border border-[#a84f4c] sm:-right-8 sm:-top-8 sm:h-28 sm:w-28" />
            <div className="relative border border-[#17283b] bg-[#f3f0e9] p-5 shadow-[12px_12px_0_#a84f4c] sm:p-8">
              <div className="relative grid aspect-[1.12] overflow-hidden border border-[#a84f4c]/60 bg-[#d9e0df]">
                <img
                  src={products[0].image}
                  alt="Featured Great Wave Study"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17283b]/80 to-transparent p-4 text-center text-[#f3f0e9]">
                  <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.25em]">
                    Japanese study / 01
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#a84f4c]">
                <span>Featured style</span>
                <span>Vol. 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c9c7bf]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#c9c7bf] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          <Value
            title="Drawn by artists"
            text="Every design begins as a real line, not a template."
            icon="✦"
          />
          <Value
            title="Made to last"
            text="Printed on archival stock with rich, lasting ink."
            icon="◌"
          />
          <Value
            title="Find your style"
            text="Japanese, traditional, fine line, and beyond."
            icon="↗"
          />
        </div>
      </section>

      <section
        id="shop"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-7 border-b border-[#bfc1bc] pb-7 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Shop the collection
            </p>
            <h2 className="mt-3 text-4xl tracking-tighter sm:text-5xl">
              Start with a style.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#4d5961]">
            Collect references, find a favorite, or take a finished idea to your
            artist.
          </p>
        </div>
        <div className="mt-7 flex gap-5 overflow-x-auto pb-2 font-sans text-xs font-bold uppercase tracking-[0.12em]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap border-b-2 pb-2 transition-colors ${
                activeCategory === category
                  ? "border-[#a84f4c] text-[#a84f4c]"
                  : "border-transparent text-[#6e777a] hover:text-[#17283b]"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with full images */}
        <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <article key={product.name} className="group">
              <div
                className={`relative aspect-4/5 overflow-hidden border border-[#17283b]/20 ${product.tone}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-[#f3f0e9]/90 px-2 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#17283b] backdrop-blur-sm">
                  HT — {product.style.slice(0, 2)}
                </span>
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-[#17283b] text-xl text-[#f3f0e9] opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                  aria-label={`Add ${product.name} to cart`}>
                  +
                </button>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg tracking-[-0.02em]">{product.name}</h3>
                  <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-[#6e777a]">
                    {product.detail} · {product.style}
                  </p>
                </div>
                <p className="font-sans text-sm font-bold">{product.price}</p>
              </div>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-4 w-full border border-[#17283b] py-3 font-sans text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#17283b] hover:text-[#f3f0e9]">
                Add to cart
              </button>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[#bfc1bc] pt-7 sm:flex-row sm:items-center">
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-[#6e777a]">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
          </p>
          <Link
            to="/shop"
            className="font-sans text-xs font-bold uppercase tracking-[0.13em] text-[#a84f4c] hover:text-[#17283b]">
            View all pieces →
          </Link>
        </div>
      </section>

      {/* Gallery Showcase with images */}
      <section className="border-y border-[#c9c7bf] bg-[#dedbd0]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_1.3fr] md:py-20">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              See the styles in action
            </p>
            <h2 className="mt-4 text-4xl leading-[0.95] tracking-tighter sm:text-6xl">
              From paper to skin.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-3/4 overflow-hidden border border-[#17283b]/20 bg-[#a84f4c]">
              <img
                src={products[1].image}
                alt="Style gallery 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 aspect-3/4 overflow-hidden border border-[#17283b]/20 bg-[#17283b]">
              <img
                src={products[3].image}
                alt="Style gallery 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-3/4 overflow-hidden border border-[#17283b]/20 bg-[#d9e0df]">
              <img
                src={products[2].image}
                alt="Style gallery 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17283b] text-[#f3f0e9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#e9a976]">
              Join the studio list
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[0.95] tracking-tighter sm:text-6xl">
              New styles, artist drops, and first access.
            </h2>
          </div>
          <form className="flex w-full max-w-sm border-b border-[#e9a976] pb-3">
            <label htmlFor="home-email" className="sr-only">
              Email address
            </label>
            <input
              id="home-email"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent font-sans text-sm text-[#f3f0e9] outline-none placeholder:text-[#8d8a82]"
            />
            <button
              type="submit"
              className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#e9a976]">
              Join ↗
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Value({ title, text, icon }) {
  return (
    <div className="flex gap-4 py-7 md:px-8 md:py-9 first:md:pl-0 last:md:pr-0">
      <span className="text-2xl text-[#a84f4c]">{icon}</span>
      <div>
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em]">
          {title}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-[#6e777a]">{text}</p>
      </div>
    </div>
  );
}

export default Home;
