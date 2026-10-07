import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCartShopping, FaBars, FaCircleUser, FaXmark } from "react-icons/fa6";
import { useCart } from "../../service/useCart.js";
import logo from "../../assets/images/Logo.png";

const primaryLinks = [
  { label: "Tattoo", to: "/tattoo" },
  { label: "Clothes Shop", to: "/shop" },
];

const utilityLinks = [
  { label: "About us", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "For artists", to: "/for-artists" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  return (
    <header className="site-header relative z-30">
      <div className="utility-bar">
        <div className="nav-shell utility-bar__inner">
          <p className="utility-bar__message">
            Independent tattoo culture, curated daily.
          </p>
          <nav aria-label="Utility navigation" className="utility-nav">
            {utilityLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="utility-nav__link">
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              className="utility-nav__link utility-nav__link--location">
              <span aria-hidden="true">⌖</span>
              Find a studio
            </Link>
          </nav>
        </div>
      </div>

      <div className="primary-bar my-0 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="nav-shell primary-bar__inner relative grid grid-cols-3 items-center">
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? (
              <FaXmark aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`primary-nav${isMenuOpen ? " primary-nav--open" : ""}`}>
            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `primary-nav__link${isActive ? " primary-nav__link--active" : ""}`
                }>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/"
            className="brand justify-self-center relative z-20"
            aria-label="Home Tattoo home">
            <img
              src={logo}
              alt="Home Tattoo logo"
              className="h-25! w-auto! object-contain"
            />
          </Link>

          <div className="primary-actions justify-self-end">
            <nav aria-label="Shop and account" className="primary-actions__nav">
              <NavLink
                to="/profile"
                aria-label="Open your profile"
                className={({ isActive }) =>
                  `primary-nav__link${isActive ? " primary-nav__link--active" : ""}`
                }>
                <FaCircleUser aria-hidden="true" className="h-4 w-4" />
              </NavLink>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open shopping bag with ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                className="primary-nav__link primary-nav__link--shop relative inline-flex items-center justify-center text-lg">
                <span className="relative grid h-5 w-5 place-items-center">
                  <FaCartShopping aria-hidden="true" className="h-4 w-4" />
                  {cartCount > 0 && (
                    <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-[#a84f4c] px-1 font-sans text-[9px] font-bold text-[#f3f0e9]">
                      {cartCount}
                    </span>
                  )}
                </span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
