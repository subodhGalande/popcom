import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef();
  const mobileNav = useRef();

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    });
  });
  useGSAP(
    () => {
      if (menuOpen) {
        gsap.timeline().from(mobileNav.current, {
          duration: 0.25,
          x: 50,
          opacity: 0,
          scalex: 1,
        });
      }
    },
    { dependencies: [menuOpen] },
  );

  return (
    <header className="relative top-0 mt-8 font-bold">
      <nav
        ref={navbarRef}
        className="relative z-50 mx-auto flex items-center justify-between px-4 md:max-w-6xl"
      >
        {/* Left links - hidden on mobile */}
        <div className="hidden w-1/3 items-center justify-around md:flex">
          <a href="">Home</a>
          <a href="">Influencers</a>
        </div>

        {/* Center logo */}
        <div className="flex w-1/3 items-center justify-center">
          <img src="/logo.png" alt="brand-logo" width="150px" />
        </div>

        {/* Right section */}
        <div className="hidden w-1/3 items-center justify-around md:flex">
          <a href="">Contact us</a>
          <div>
            <Search size={22} />
          </div>
          <button className="bg-accent-gray rounded-full px-3 py-2">
            Sign in
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          ref={mobileNav}
          className="absolute top-full left-0 z-[9999] w-full bg-[#fff] shadow-md md:hidden"
        >
          <div className="flex flex-col items-center gap-6 py-6 text-lg">
            <a href="">Home</a>
            <a href="">Influencers</a>
            <a href="">Contact us</a>
            <button className="bg-accent-gray rounded-full px-4 py-2">
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
