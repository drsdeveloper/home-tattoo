import { Link } from "react-router-dom";

const savedPieces = [
  {
    name: "Lucky Koi Flash",
    style: "Traditional",
    price: "$14",
    mark: "鯉",
    tone: "bg-[#e5c9bc] text-[#8f3f40]",
  },
  {
    name: "Quiet Moon No. 02",
    style: "Fine line",
    price: "$22",
    mark: "☾",
    tone: "bg-[#dedbd0] text-[#17283b]",
  },
  {
    name: "Tiger & Peony",
    style: "Blackwork",
    price: "$18",
    mark: "虎",
    tone: "bg-[#c7c3b8] text-[#17283b]",
  },
];

function Profile() {
  return (
    <main className="flex-1 bg-[#f3f0e9] text-[#17283b]">
      <section className="border-b border-[#c9c7bf] bg-[#e8e3d8]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
            Your studio / profile
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full border border-[#17283b] bg-[#a84f4c] text-6xl text-[#f3f0e9] shadow-[8px_8px_0_#17283b]">
                M
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#6e777a]">
                  Member since 2024
                </p>
                <h1 className="mt-2 text-6xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-8xl">
                  Mia Rivera
                </h1>
                <p className="mt-4 text-lg text-[#4d5961]">
                  @miarivera · London, UK
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button
                type="button"
                className="bg-[#17283b] px-5 py-4 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#f3f0e9] transition-colors hover:bg-[#a84f4c]">
                Edit profile
              </button>
              <Link
                to="/shop"
                className="border border-[#17283b] px-5 py-4 font-sans text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#a84f4c] hover:text-[#f3f0e9]">
                Explore shop <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="grid gap-5 border-y border-[#bfc1bc] py-6 sm:grid-cols-3 sm:divide-x sm:divide-[#bfc1bc] sm:py-8">
          <ProfileStat value="12" label="Saved pieces" />
          <ProfileStat value="03" label="Artists followed" />
          <ProfileStat value="01" label="Upcoming booking" />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Your details
            </p>
            <h2 className="mt-3 text-4xl tracking-tighter">
              A place for the marks that stay with you.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#4d5961]">
              Keep references close, follow the artists you trust, and make the
              next appointment feel considered.
            </p>
            <div className="mt-8 border-l-2 border-[#a84f4c] pl-5">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#6e777a]">
                Next up
              </p>
              <p className="mt-2 text-xl">Consultation with Ana Sol</p>
              <p className="mt-1 text-sm text-[#6e777a]">
                17 October 2026 · 14:30
              </p>
              <Link
                to="/book"
                className="mt-4 inline-flex font-sans text-[11px] font-bold uppercase tracking-[0.13em] text-[#a84f4c]">
                View booking <span className="ml-2">↗</span>
              </Link>
            </div>
          </aside>

          <div>
            <div className="flex items-end justify-between border-b border-[#bfc1bc] pb-5">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
                  Saved flash
                </p>
                <h2 className="mt-3 text-4xl tracking-tighter">
                  Your collection.
                </h2>
              </div>
              <span className="font-sans text-[11px] uppercase tracking-[0.13em] text-[#6e777a]">
                03 pieces
              </span>
            </div>
            <div className="mt-7 grid gap-6 sm:grid-cols-3">
              {savedPieces.map((piece) => (
                <article key={piece.name} className="group">
                  <div className={`relative aspect-[0.82] p-3 ${piece.tone}`}>
                    <div className="flex h-full flex-col items-center justify-center border border-current/30">
                      <span className="text-7xl leading-none transition-transform duration-500 group-hover:scale-110">
                        {piece.mark}
                      </span>
                      <span className="mt-4 font-sans text-[9px] font-bold uppercase tracking-[0.18em]">
                        {piece.style}
                      </span>
                    </div>
                    <span className="absolute left-5 top-5 font-sans text-[9px] font-bold uppercase tracking-[0.16em]">
                      HT / 0{savedPieces.indexOf(piece) + 1}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg leading-tight">{piece.name}</h3>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-[#6e777a]">
                        {piece.style}
                      </p>
                    </div>
                    <span className="font-sans text-sm font-bold">
                      {piece.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex border-b border-[#17283b] pb-2 font-sans text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:border-[#a84f4c] hover:text-[#a84f4c]">
              Browse more flash <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProfileStat({ value, label }) {
  return (
    <div className="flex items-baseline gap-4 sm:px-7 first:sm:pl-0">
      <span className="text-4xl tracking-tighter">{value}</span>
      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#6e777a]">
        {label}
      </span>
    </div>
  );
}

export default Profile;
