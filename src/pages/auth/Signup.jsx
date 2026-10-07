import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa6";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <main className="grid min-h-screen bg-[#f3f0e9] text-[#17283b] lg:grid-cols-[1.08fr_0.92fr]">
      <section className="relative hidden overflow-hidden bg-[#a84f4c] px-10 py-10 text-[#f3f0e9] lg:flex lg:flex-col lg:justify-between xl:px-16">
        <Link
          to="/"
          className="relative z-10 flex items-center gap-3"
          aria-label="Home Tattoo home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#f3f0e9] font-serif text-xl">
            H
          </span>
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em]">
            Home Tattoo
          </span>
        </Link>
        <div className="relative z-10 max-w-lg pb-10">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#f7d0a9]">
            A place for your next idea
          </p>
          <h1 className="mt-5 max-w-md text-7xl leading-[0.88] tracking-[-0.08em] xl:text-8xl">
            Find the line that feels like yours.
          </h1>
          <p className="mt-7 max-w-sm font-sans text-sm leading-7 text-[#f7ddd2]">
            Build a personal archive of references before your next appointment.
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 h-[390px] w-[390px] rounded-full border border-[#e9a976]" />
        <div className="absolute right-24 top-1/3 h-24 w-24 rotate-45 border border-[#f7d0a9]" />
        <p className="relative z-10 font-sans text-[10px] uppercase tracking-[0.16em] text-[#f7ddd2]">
          Independent tattoo culture, curated daily.
        </p>
      </section>
      <section className="flex min-h-screen flex-col px-6 py-7 sm:px-12 sm:py-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between lg:justify-end">
          <Link
            to="/"
            className="flex items-center gap-3 lg:hidden"
            aria-label="Home Tattoo home">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#17283b] font-serif text-lg">
              H
            </span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em]">
              Home Tattoo
            </span>
          </Link>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b878b]">
            Join the collection
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center py-12">
          <div className="mb-8">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Start here
            </p>
            <h2 className="mt-4 text-5xl tracking-[-0.07em] sm:text-6xl">
              Make room for good ideas.
            </h2>
            <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-[#7b878b]">
              Create an account to save flash, follow artists, and keep your
              references close.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#536269]">
                Your name
              </span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="What should we call you?"
                required
                className="mt-2 w-full border border-[#c5c4bd] bg-transparent px-4 py-3.5 font-sans text-sm outline-none transition-colors placeholder:text-[#a0a5a3] focus:border-[#a84f4c]"
              />
            </label>
            <label className="block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#536269]">
                Email address
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="mt-2 w-full border border-[#c5c4bd] bg-transparent px-4 py-3.5 font-sans text-sm outline-none transition-colors placeholder:text-[#a0a5a3] focus:border-[#a84f4c]"
              />
            </label>
            <label className="block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#536269]">
                Password
              </span>
              <span className="relative mt-2 block">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  minLength="8"
                  required
                  className="w-full border border-[#c5c4bd] bg-transparent px-4 py-3.5 pr-12 font-sans text-sm outline-none transition-colors placeholder:text-[#a0a5a3] focus:border-[#a84f4c]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-0 top-0 grid h-full w-12 place-items-center text-sm text-[#7b878b]"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </span>
            </label>
            <label className="flex items-start gap-2 pt-2 font-sans text-xs leading-5 text-[#536269]">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#a84f4c]"
              />{" "}
              I agree to receive occasional studio notes and accept the terms of
              membership.
            </label>
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-between bg-[#17283b] px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#f3f0e9] transition-colors hover:bg-[#a84f4c]">
              Create account <FaArrowRight />
            </button>
          </form>
          <p className="mt-8 text-center font-sans text-sm text-[#7b878b]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[#a84f4c] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        <p className="text-center font-sans text-[10px] uppercase tracking-[0.12em] text-[#a0a5a3]">
          Home Tattoo / Member portal / 2026
        </p>
      </section>
    </main>
  );
}

export default Signup;
