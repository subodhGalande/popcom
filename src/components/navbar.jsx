import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="top-0 z-50 mt-8 font-bold">
      <nav className="mx-auto flex items-center justify-between md:max-w-6xl">
        {/* left side */}
        <div className="flex w-1/3 items-center justify-around">
          <a href="">Home</a>
          <a href="">Influencers</a>
        </div>
        {/* center */}
        <div className="flex w-1/3 items-center justify-center">
          <img src="/logo.png" alt="brand-logo" width="175px" />
        </div>
        {/* right */}
        <div className="flex w-1/3 items-center justify-around">
          <a href="">Contact us</a>
          <div className="-mr-14">
            <Search size={22} />
          </div>
          <button className="bg-accent-gray rounded-full px-3 py-2">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
