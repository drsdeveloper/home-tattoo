import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa6";
import {
  apparelCategories,
  materials,
  products,
  tattooStyles,
} from "../data/products.js";
import { useCart } from "../service/useCart.js";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

function ProductDetails() {
  const { slug } = useParams();
  const product =
    products.find((item) => item.slug === slug) ??
    tattooStyles.find((style) => style.slug === slug) ??
    materials.find((material) => material.slug === slug);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="flex-1 bg-[#f3f0e9] px-5 py-24 text-[#17283b] sm:px-8">
        <div className="mx-auto max-w-3xl border-y border-[#bfc1bc] py-12">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#a84f4c]">
            Product not found
          </p>
          <h1 className="mt-4 text-5xl tracking-tighter">
            This piece has moved on.
          </h1>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.12em]">
            <FaArrowLeft aria-hidden="true" /> Back to the shop
          </Link>
        </div>
      </main>
    );
  }

  const hasSizes = apparelCategories.includes(product.category);
  const isTattooStyle = product.category === "Tattoo style";
  const isMaterial = product.category === "Tattoo material";
  const productNumber =
    product.number ?? String(products.indexOf(product) + 1).padStart(2, "0");

  function handleAddToCart() {
    if (isTattooStyle) {
      addToCart(product);
    } else {
      for (let count = 0; count < quantity; count += 1) {
        addToCart(hasSizes ? { ...product, size: selectedSize } : product);
      }
    }
    setAdded(true);
  }

  return (
    <main className="flex-1 bg-[#f3f0e9] text-[#17283b]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 sm:pb-24">
        <Link
          to={isTattooStyle || isMaterial ? "/tattoo" : "/shop"}
          className="inline-flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#6e777a] transition-colors hover:text-[#a84f4c]">
          <FaArrowLeft aria-hidden="true" />
          {isTattooStyle
            ? "All styles"
            : isMaterial
              ? "All materials"
              : "All pieces"}
        </Link>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div
            className={`relative aspect-4/5 overflow-hidden p-5 sm:p-8 ${product.tone}`}>
            <div className="flex h-full items-center justify-center border border-current/30 p-3 sm:p-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute left-9 top-9 bg-[#f3f0e9] px-3 py-2 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-[#17283b]">
              {isTattooStyle
                ? "Field guide"
                : isMaterial
                  ? "Material library"
                  : "Small batch"}{" "}
              / {productNumber}
            </span>
          </div>

          <section className="flex flex-col lg:py-7">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#a84f4c]">
              {isTattooStyle
                ? "Tattoo style / field guide"
                : isMaterial
                  ? "Material library / studio tools"
                  : `${product.category} / studio goods`}
            </p>
            <div className="mt-4 flex items-start justify-between gap-5 border-b border-[#bfc1bc] pb-6">
              <h1 className="max-w-xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl">
                {product.name}
              </h1>
              {product.price && (
                <p className="shrink-0 pt-1 font-sans text-base font-bold">
                  {product.price}
                </p>
              )}
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#4d5961]">
              {product.description}
            </p>

            {(isTattooStyle || isMaterial) && (
              <p className="mt-4 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#a84f4c]">
                {product.priceNote}
              </p>
            )}

            {isTattooStyle ? (
              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-8 inline-flex min-h-14 items-center justify-center border border-[#17283b] px-5 font-sans text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#17283b] hover:text-[#f3f0e9] sm:self-start">
                {added ? "Added to cart" : "Add to cart"}{" "}
                <span aria-hidden="true">↗</span>
              </button>
            ) : hasSizes ? (
              <fieldset className="mt-8">
                <legend className="font-sans text-[10px] font-bold uppercase tracking-[0.15em]">
                  Size{" "}
                  <span className="ml-2 font-normal text-[#6e777a]">
                    {selectedSize}
                  </span>
                </legend>
                <div className="mt-3 grid max-w-md grid-cols-6 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                      className={`aspect-square border font-sans text-xs font-bold transition-colors ${selectedSize === size ? "border-[#17283b] bg-[#17283b] text-[#f3f0e9]" : "border-[#bfc1bc] hover:border-[#17283b]"}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {!isTattooStyle && (
              <div className="mt-8 flex gap-3">
                <div className="flex h-14 items-center border border-[#bfc1bc]">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() =>
                      setQuantity((value) => Math.max(1, value - 1))
                    }
                    className="grid h-full w-11 place-items-center text-sm hover:bg-[#e8e3d8]">
                    <FaMinus aria-hidden="true" />
                  </button>
                  <span
                    aria-live="polite"
                    className="w-8 text-center font-sans text-sm font-bold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() =>
                      setQuantity((value) => Math.min(10, value + 1))
                    }
                    className="grid h-full w-11 place-items-center text-sm hover:bg-[#e8e3d8]">
                    <FaPlus aria-hidden="true" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#a84f4c] px-5 font-sans text-[11px] font-bold uppercase tracking-[0.13em] text-[#f3f0e9] transition-colors hover:bg-[#17283b]">
                  {added ? "Added to cart" : "Add to cart"}{" "}
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            )}
            {!isTattooStyle && (
              <p
                className="mt-3 min-h-4 font-sans text-[10px] uppercase tracking-[0.12em] text-[#6e777a]"
                aria-live="polite">
                {added
                  ? `${quantity} ${quantity === 1 ? "piece" : "pieces"} added to your cart`
                  : "Ready to ship · limited run"}
              </p>
            )}

            <dl className="mt-8 divide-y divide-[#bfc1bc] border-y border-[#bfc1bc]">
              {(isTattooStyle
                ? [
                    ["Signature", product.signature],
                    ["Composition", product.composition],
                    ["Consider", product.considerations],
                  ]
                : isMaterial
                  ? [
                      ["Type", product.detail],
                      ["Use", product.description],
                    ]
                  : [
                      ["Material", product.material],
                      ["Fit / details", product.fit],
                      ["Care", product.care],
                    ]
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[110px_1fr] gap-4 py-4 sm:grid-cols-[140px_1fr]">
                  <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.13em] text-[#6e777a]">
                    {label}
                  </dt>
                  <dd className="text-sm leading-6">{value}</dd>
                </div>
              ))}
            </dl>
            {!isTattooStyle && (
              <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.12em] text-[#6e777a]">
                Questions about this piece?{" "}
                <Link
                  to="/book"
                  className="border-b border-[#a84f4c] pb-0.5 text-[#a84f4c]">
                  Find a studio
                </Link>
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
