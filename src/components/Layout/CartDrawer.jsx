import { FaXmark } from "react-icons/fa6";
import { useCart } from "../../service/useCart.js";

function CartDrawer() {
  const { items, cartCount, isCartOpen, closeCart, removeFromCart } = useCart();
  const total = items.reduce(
    (sum, item) => sum + Number(item.price.replace("$", "")),
    0,
  );

  return (
    <>
      {isCartOpen && (
        <button
          type="button"
          aria-label="Close shopping bag"
          onClick={closeCart}
          className="fixed inset-0 z-40 cursor-default bg-[#17283b]/35"
        />
      )}
      <aside
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#f3f0e9] text-[#17283b] shadow-[-12px_0_30px_rgba(23,40,59,0.12)] transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-start justify-between border-b border-[#bfc1bc] px-6 py-6 sm:px-8">
          <div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#a84f4c]">
              Your collection
            </p>
            <h2 className="mt-2 text-4xl tracking-tighter">The bag.</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close shopping bag"
            className="grid h-10 w-10 place-items-center border border-[#17283b] text-lg transition-colors hover:bg-[#17283b] hover:text-[#f3f0e9]">
            <FaXmark aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {items.length === 0 ? (
            <div className="border-y border-[#bfc1bc] py-10">
              <p className="text-2xl tracking-tighter">Your bag is waiting.</p>
              <p className="mt-3 text-sm leading-6 text-[#6e777a]">
                Add a piece from the shop and it will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex gap-4 border-b border-[#bfc1bc] pb-5">
                  <div
                    className={`grid h-20 w-16 shrink-0 place-items-center ${item.tone}`}>
                    <span className="text-2xl">{item.mark || item.art}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <h3 className="text-lg leading-tight">{item.name}</h3>
                      <span className="text-right">
                        <span className="block font-sans text-sm font-bold">
                          {item.price}
                        </span>
                        {item.priceNote && (
                          <span className="block font-sans text-[9px] uppercase tracking-wide text-[#a84f4c]">
                            Demo only
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-[#6e777a]">
                      {item.category || item.style}
                      {item.size ? ` · Size ${item.size}` : ""}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(index)}
                      className="mt-3 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#a84f4c] hover:text-[#17283b]">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#17283b] bg-[#e8e3d8] px-6 py-6 sm:px-8">
          <div className="flex items-center justify-between font-sans text-xs font-bold uppercase tracking-[0.12em]">
            <span>
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="mt-5 w-full bg-[#a84f4c] px-5 py-4 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#f3f0e9] transition-colors hover:bg-[#17283b] disabled:cursor-not-allowed disabled:opacity-40">
            Checkout <span aria-hidden="true">↗</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
