import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Artists", to: "/artists" },
  { label: "Styles", to: "/styles" },
  { label: "Shop", to: "/shop" },
  { label: "Studios", to: "/studios" },
  { label: "Inspiration", to: "/inspiration" },
];

const companyLinks = [
  { label: "About us", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "For artists", to: "/for-artists" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#171714] text-[#f3f0e9]">
      <div className="mx-auto max-w-295 px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-[#4a4841] pb-14 lg:grid-cols-[1.6fr_1fr_1fr_1.25fr] lg:gap-10">
          <div className="max-w-sm">
            <Link to="/" aria-label="Home Tattoo home">
              <img
                src={"/src/assets/images/Logo-white.png"}
                alt="Home Tattoo logo"
                className="h-25 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-lg leading-7 text-[#c9c5bb]">
              A considered home for independent tattoo culture, artists, and the
              people who wear the work.
            </p>
          </div>

          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#e9a976]">
              Stay in the line
            </p>
            <p className="mt-4 text-base leading-6 text-[#c9c5bb]">
              New artists, studio openings, and stories in your inbox.
            </p>
            <form className="mt-5 flex border-b border-[#f3f0e9] pb-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent font-sans text-sm text-[#f3f0e9] outline-none placeholder:text-[#8d8a82]"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="ml-3 text-xl text-[#e9a976] transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9a976]">
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 font-sans text-[11px] uppercase tracking-[0.08em] text-[#8d8a82] sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {new Date().getFullYear()} Home Tattoo</p>
          <div className="flex gap-5">
            <Link
              className="transition-colors hover:text-[#f3f0e9]"
              to="/privacy">
              Privacy
            </Link>
            <Link
              className="transition-colors hover:text-[#f3f0e9]"
              to="/terms">
              Terms
            </Link>
            <a
              className="transition-colors hover:text-[#f3f0e9]"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
          </div>
          <p className="m-0 sm:text-right">Made for the permanently curious.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#e9a976]">
        {title}
      </p>
      <nav
        className="mt-5 flex flex-col items-start gap-3"
        aria-label={`${title} links`}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-base text-[#f3f0e9] transition-colors hover:text-[#e9a976]">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Footer;
