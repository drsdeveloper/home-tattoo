import { Link } from "react-router-dom";
import { materials, tattooStyles } from "../data/products.js";

function Tattoo() {
  return (
    <main className="flex-1 bg-[#f3f0e9] text-[#17283b]">
      <section className="border-b border-[#c9c7bf] bg-[#e8e3d8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
            The field guide / volume 01
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-8xl">
              Find the language your skin speaks.
            </h1>
            <p className="max-w-sm text-lg leading-8 text-[#4d5961]">
              A starting point for the symbols, techniques, and artists behind
              the styles we keep coming back to.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-6 border-b border-[#bfc1bc] pb-7 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Four ways in
            </p>
            <h2 className="mt-3 text-4xl tracking-tighter sm:text-5xl">
              Start with a feeling.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#4d5961]">
            There is no right answer. The best style is the one that keeps
            pulling your eye back.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {tattooStyles.map((style) => (
            <article
              key={style.name}
              className="group grid gap-6 border-b border-[#bfc1bc] pb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <Link
                to={`/tattoo/${style.slug}`}
                aria-label={`View ${style.name} tattoo style details`}
                className={`relative block aspect-[1.1] overflow-hidden p-4 ${style.tone}`}>
                <div className="flex h-full items-center justify-center border border-current/30">
                  <img
                    src={style.image}
                    alt={`${style.name} tattoo style`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#a84f4c]">
                  Style {style.number}
                </p>
                <Link
                  to={`/tattoo/${style.slug}`}
                  className="mt-3 inline-block hover:text-[#a84f4c]">
                  <h3 className="text-4xl tracking-tighter">{style.name}</h3>
                </Link>
                <p className="mt-4 max-w-xs text-base leading-7 text-[#4d5961]">
                  {style.description}
                </p>
                <p className="mt-3 font-sans text-xs font-bold uppercase tracking-widest text-[#17283b]">
                  {style.price}{" "}
                  <span className="font-normal text-[#6e777a]">· demo</span>
                </p>
                <Link
                  to={`/tattoo/${style.slug}`}
                  className="mt-6 inline-flex border-b border-[#17283b] pb-2 font-sans text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:border-[#a84f4c] hover:text-[#a84f4c]">
                  Explore {style.name} <span className="ml-3">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#c9c7bf] bg-[#e8e3d8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-8 border-b border-[#bfc1bc] pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
                Material library
              </p>
              <h2 className="mt-3 text-4xl tracking-tighter sm:text-5xl">
                What makes the mark.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#4d5961]">
              Style is the feeling. Material is how an artist gives it a body.
              Here is a quick look at the tools behind the finished piece.
            </p>
          </div>

          <div className="mt-10 grid gap-px border border-[#bfc1bc] bg-[#bfc1bc] sm:grid-cols-2">
            {materials.map((material) => (
              <article
                key={material.name}
                className="grid gap-6 bg-[#e8e3d8] p-6 sm:grid-cols-[0.65fr_1fr] sm:p-8">
                <Link
                  to={`/material/${material.slug}`}
                  aria-label={`View ${material.name} tattoo material details`}
                  className={`grid aspect-square place-items-center p-4 ${material.tone}`}>
                  <div className="flex h-full w-full items-center justify-center border border-current/30">
                    <img
                      src={material.image}
                      alt={`${material.name} tattoo material`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#a84f4c]">
                    {material.detail}
                  </p>
                  <h3 className="mt-3 text-3xl tracking-tighter">
                    {material.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#4d5961]">
                    {material.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#bfc1bc] pt-4">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#6e777a]">
                      {material.priceNote}
                    </span>
                    <span className="font-sans text-sm font-bold text-[#17283b]">
                      {material.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#c9c7bf] bg-[#17283b] text-[#f3f0e9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_1.2fr] md:items-center md:py-20">
          <h2 className="max-w-lg text-5xl leading-[0.9] tracking-tighter sm:text-6xl">
            The best reference is the one that feels like you.
          </h2>
          <div className="md:border-l md:border-[#66707a] md:pl-10">
            <p className="max-w-md text-lg leading-8 text-[#c9c5bb]">
              Save the details that resonate, then bring them to a tattooer who
              understands the difference between copying a picture and making a
              mark your own.
            </p>
            <Link
              to="/artists"
              className="mt-7 inline-flex font-sans text-xs font-bold uppercase tracking-[0.13em] text-[#e9a976]">
              Meet the artists <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tattoo;
