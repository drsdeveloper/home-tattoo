import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <main className="grid min-h-screen bg-[#f3f0e9] text-[#17283b] lg:grid-cols-[1.08fr_0.92fr]">
      <section className="relative hidden overflow-hidden bg-[#17283b] px-10 py-10 text-[#f3f0e9] lg:flex lg:flex-col lg:justify-between xl:px-16">
        <Link
          to="/"
          className="relative z-10 flex items-center gap-3"
          aria-label="Home Tattoo home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#e9a976] font-serif text-xl text-[#e9a976]">
            H
          </span>
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em]">
            Home Tattoo
          </span>
        </Link>
        <div className="relative z-10 max-w-lg pb-10">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#e9a976]">
            Your tattoo reference library
          </p>
          <h1 className="mt-5 max-w-md text-7xl leading-[0.88] tracking-[-0.08em] xl:text-8xl">
            Keep the good marks close.
          </h1>
          <p className="mt-7 max-w-sm font-sans text-sm leading-7 text-[#bfc9c9]">
            Save your favorite flash, follow artists you love, and keep your
            next idea in one place.
          </p>
        </div>
        <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full border border-[#52616a]" />
        <div className="absolute -bottom-8 -right-8 h-[280px] w-[280px] rounded-full border border-[#a84f4c]" />
        <div className="absolute right-20 top-1/3 h-24 w-24 rotate-45 border border-[#e9a976]" />
        <p className="relative z-10 font-sans text-[10px] uppercase tracking-[0.16em] text-[#8e9ba2]">
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
            Member access
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center py-16">
          <div className="mb-10">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#a84f4c]">
              Welcome back
            </p>
            <h2 className="mt-4 text-5xl tracking-[-0.07em] sm:text-6xl">
              Sign in to your collection.
            </h2>
            <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-[#7b878b]">
              Your saved artists, flash, and ideas are waiting.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  autoComplete="current-password"
                  placeholder="Enter your password"
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
            <div className="flex items-center justify-between gap-4 pt-1">
              <label className="flex items-center gap-2 font-sans text-xs text-[#536269]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 accent-[#a84f4c]"
                />{" "}
                Remember me
              </label>
              <button
                type="button"
                className="font-sans text-xs font-bold text-[#a84f4c] hover:underline">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-between bg-[#17283b] px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#f3f0e9] transition-colors hover:bg-[#a84f4c]">
              Sign in <FaArrowRight />
            </button>
          </form>
          <p className="mt-8 text-center font-sans text-sm text-[#7b878b]">
            New to Home Tattoo?{" "}
            <Link
              to="/signup"
              className="font-bold text-[#a84f4c] hover:underline">
              Create an account
            </Link>
          </p>
          <div className="mt-7 flex items-center gap-3 border-t border-[#d2d0c8] pt-6 font-sans text-xs text-[#7b878b]">
            <FaLock className="text-[#a84f4c]" /> Your account is private and
            secure.
          </div>
        </div>
        <p className="text-center font-sans text-[10px] uppercase tracking-[0.12em] text-[#a0a5a3]">
          Home Tattoo / Member portal / 2026
        </p>
      </section>
    </main>
  );
}

export default Login;
