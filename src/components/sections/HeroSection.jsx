import React from "react";
import AffBtn from "../common/AffBtn";

const HeroSection = () => {
  const stats = [
    { value: "50+", label: "Providers Compared" },
    { value: "$892", label: "Avg. Annual Savings" },
    { value: "2.4M+", label: "Quotes Analyzed" },
    { value: "4.8★", label: "User Trust Rating" },
  ];
  const urgency = ["Rates change daily", "Updated for 2026", "Free comparison tool"];

  return (
    <section className="relative bg-[#0f172a] min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-[0.035]"
        style={{backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"56px 56px"}} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[250px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-950/60 border border-green-800/60 text-green-400 text-xs font-bold px-4 py-2 rounded-full mb-7 shadow-lg">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Updated Jan 2026 · Trusted by 2.4M+ American Drivers
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-6">
            Compare Car Insurance<br />
            <span className="text-[#22c55e]">Quotes Online</span>
          </h1>

          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-5 leading-relaxed font-light">
            Find the best auto insurance rates in the USA. Compare 50+ top providers and <strong className="text-white font-semibold">save up to 70%</strong> on your car insurance - no calls, no spam.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {urgency.map(u => (
              <span key={u} className="bg-amber-900/30 border border-amber-700/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                ⚡ {u}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <AffBtn label="Compare Rates Now →" size="lg" />
            <a href="#companies" className="inline-flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all">
              View Top Companies
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
            {stats.map(s => (
              <div key={s.label} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4 backdrop-blur-sm hover:bg-white/[0.07] transition-all">
                <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-slate-400 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-medium">
            {["256-bit SSL Encrypted", "No Spam Calls", "Free to Compare", "Independent & Unbiased"].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 10 0 30L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;