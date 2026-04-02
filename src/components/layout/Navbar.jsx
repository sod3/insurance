import React, { useState, useEffect } from "react";
import AffBtn from "../common/AffBtn";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  
  const links = [
    ["Compare Rates", "#compare"],
    ["Top Companies", "#companies"],
    ["Pricing Guide", "#pricing"],
    ["State Guides", "#states"],
    ["FAQ", "#faq"],
  ];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0f172a] shadow-xl" 
        : "bg-[#0f172a]/90 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center shadow-lg shadow-green-900/30">
              <svg className="w-4.5 h-4.5 text-white w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="cursor-pointer" onClick={() => window.location.href = "/"}>
              <span className="text-white font-extrabold text-base tracking-tight">InsureCompare<span className="text-[#22c55e]">Pro</span></span>
              <span className="hidden md:block text-[10px] text-slate-300 -mt-0.5 leading-none">Updated Jan 2026</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-7">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="text-white hover:text-[#22c55e] text-sm font-medium transition-colors">{l}</a>
            ))}
            <AffBtn label="Get Free Quote" size="sm" />
          </div>
          <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-[#0f172a] border-t border-slate-700 py-4 px-2 space-y-2">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="block text-white hover:text-[#22c55e] text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-all">{l}</a>
            ))}
            <div className="pt-2">
              <AffBtn label="Get Free Quote" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;